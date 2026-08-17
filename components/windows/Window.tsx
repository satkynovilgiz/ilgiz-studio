"use client";

import { AnimatePresence, motion, useDragControls } from "framer-motion";
import type { ReactNode } from "react";
import { useMediaQuery } from "@/lib/use-media-query";
import { useWindowManager } from "@/lib/window-context";
import { WINDOW_META } from "@/lib/window-meta";
import type { WindowId } from "@/lib/types";

interface WindowProps {
  id: WindowId;
  children: ReactNode;
}

const DESKTOP_GEOMETRY: Record<
  WindowId,
  { width: number; height: number; offsetX: number; offsetY: number }
> = {
  about: { width: 420, height: 520, offsetX: -260, offsetY: -30 },
  work: { width: 880, height: 580, offsetX: 0, offsetY: 0 },
  process: { width: 760, height: 560, offsetX: 70, offsetY: 30 },
  contact: { width: 780, height: 480, offsetX: -40, offsetY: 60 },
};

const SPRING = { type: "spring" as const, stiffness: 380, damping: 32, mass: 0.9 };
const SHEET_SPRING = { type: "spring" as const, stiffness: 340, damping: 34, mass: 1 };

export function Window({ id, children }: WindowProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { isOpen, closeWindow, focusWindow, zIndexOf } = useWindowManager();
  const dragControls = useDragControls();
  const meta = WINDOW_META[id];
  const open = isOpen(id);
  const zIndex = 100 + zIndexOf(id);

  if (isDesktop) {
    const geo = DESKTOP_GEOMETRY[id];
    return (
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={meta.title}
            drag
            dragControls={dragControls}
            dragListener={false}
            dragMomentum={false}
            dragElastic={0}
            onPointerDown={() => focusWindow(id)}
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={SPRING}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              marginTop: -geo.height / 2 + geo.offsetY,
              marginLeft: -geo.width / 2 + geo.offsetX,
              width: geo.width,
              height: geo.height,
              zIndex,
            }}
            className="flex max-h-[85vh] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl shadow-black/30 dark:border-white/10 dark:bg-neutral-900"
          >
            <div
              onPointerDown={(event) => {
                focusWindow(id);
                dragControls.start(event);
              }}
              className="relative flex h-10 shrink-0 cursor-default items-center border-b border-black/10 bg-[#e4e0d5] px-4 dark:border-white/10 dark:bg-[#33312c]"
            >
              <div className="flex items-center gap-2">
                <button
                  aria-label="Close window"
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={() => closeWindow(id)}
                  className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10 transition hover:brightness-90"
                />
                <span className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
                <span className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/10" />
              </div>
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-wider text-neutral-500 dark:text-neutral-400">
                {meta.title}
              </span>
            </div>
            <div className="min-h-0 flex-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label={meta.title}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={{ top: 0, bottom: 0.4 }}
          onDragEnd={(_, info) => {
            if (info.offset.y > 120 || info.velocity.y > 600) {
              closeWindow(id);
            }
          }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={SHEET_SPRING}
          style={{ zIndex }}
          className="fixed inset-0 flex flex-col overflow-hidden rounded-t-[28px] bg-white shadow-2xl dark:bg-neutral-900"
        >
          <div className="flex justify-center pt-2.5 pb-1">
            <div className="h-1.5 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <div className="relative flex h-12 shrink-0 items-center justify-center px-4">
            <button
              onClick={() => closeWindow(id)}
              className="absolute left-3 text-[16px] font-medium text-blue-500 active:opacity-60"
            >
              Done
            </button>
            <h2 className="text-[15px] font-semibold text-neutral-900 dark:text-neutral-50">
              {meta.shortLabel}
            </h2>
          </div>
          <div className="min-h-0 flex-1 pb-[env(safe-area-inset-bottom)]">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
