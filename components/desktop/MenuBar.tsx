"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Square } from "lucide-react";
import { useClock } from "@/lib/use-clock";
import { useWindowManager } from "@/lib/window-context";
import { useToast } from "@/lib/toast-context";
import { WINDOW_META } from "@/lib/window-meta";
import type { WindowId } from "@/lib/types";

const MENU_IDS: WindowId[] = ["work", "process", "contact"];

export function MenuBar() {
  const time = useClock();
  const { openWindow } = useWindowManager();
  const { showToast } = useToast();
  const [appleMenuOpen, setAppleMenuOpen] = useState(false);
  const [sleeping, setSleeping] = useState(false);

  const triggerSleep = () => {
    setAppleMenuOpen(false);
    setSleeping(true);
    window.setTimeout(() => setSleeping(false), 1400);
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 hidden h-9 items-center justify-between bg-white/70 px-4 shadow-sm backdrop-blur-xl backdrop-saturate-150 md:flex dark:bg-[#1e1e1e]/60">
        <div className="flex items-center gap-5">
          <div className="relative">
            <button
              onClick={() => setAppleMenuOpen((open) => !open)}
              aria-label="System menu"
              className="flex items-center opacity-90 transition hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Apple.png" alt="System menu" className="h-4 w-4 object-contain dark:invert" draggable={false} />
            </button>

            <AnimatePresence>
              {appleMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -4 }}
                  transition={{ duration: 0.12 }}
                  className="absolute left-0 top-8 w-56 overflow-hidden rounded-lg border border-black/10 bg-white/95 py-1 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-neutral-800/95"
                >
                  <button
                    onClick={() => {
                      setAppleMenuOpen(false);
                      openWindow("about");
                    }}
                    className="block w-full px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-blue-500 hover:text-white dark:text-neutral-100"
                  >
                    About Ilgiz.Studio
                  </button>
                  <button
                    onClick={() => {
                      setAppleMenuOpen(false);
                      openWindow("contact");
                    }}
                    className="block w-full px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-blue-500 hover:text-white dark:text-neutral-100"
                  >
                    Preferences…
                  </button>
                  <div className="my-1 h-px bg-black/10 dark:bg-white/10" />
                  <button
                    onClick={triggerSleep}
                    className="block w-full px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-blue-500 hover:text-white dark:text-neutral-100"
                  >
                    Sleep
                  </button>
                  <button
                    onClick={() => {
                      setAppleMenuOpen(false);
                      showToast("Nice try — nothing to restart here");
                    }}
                    className="block w-full px-3 py-1.5 text-left text-[13px] text-neutral-800 hover:bg-blue-500 hover:text-white dark:text-neutral-100"
                  >
                    Restart…
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.02em] text-neutral-900 dark:text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-900/80 dark:bg-white/90" />
            ILGIZ.STUDIO
          </span>
          <nav className="flex items-center gap-4">
            {MENU_IDS.map((id) => (
              <button
                key={id}
                onClick={() => openWindow(id)}
                className="text-[13px] font-normal text-neutral-700 transition hover:text-neutral-950 dark:text-white/85 dark:hover:text-white"
              >
                {WINDOW_META[id].shortLabel}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 text-[12.5px] text-neutral-700 dark:text-white/85">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span>Available for projects</span>
          </span>
          <span className="flex items-center gap-2 text-neutral-400 dark:text-white/60">
            <Minus className="h-3.5 w-3.5" strokeWidth={2.2} />
            <Square className="h-3 w-3" strokeWidth={2.2} />
          </span>
          <span className="tabular-nums">{time}</span>
        </div>
      </div>

      {appleMenuOpen && (
        <button
          aria-label="Close menu"
          onClick={() => setAppleMenuOpen(false)}
          className="fixed inset-0 z-40 cursor-default"
        />
      )}

      <AnimatePresence>
        {sleeping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-none fixed inset-0 z-[999] bg-black"
          />
        )}
      </AnimatePresence>
    </>
  );
}
