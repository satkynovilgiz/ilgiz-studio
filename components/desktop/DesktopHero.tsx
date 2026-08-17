"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FolderIcon } from "./FolderIcon";
import { DesktopWidgets } from "./Widgets";
import { DESKTOP_ICONS } from "@/lib/desktop-icons";
import { useIconPositions } from "@/lib/use-icon-positions";
import { useWindowManager } from "@/lib/window-context";
import { useToast } from "@/lib/toast-context";

const ROWS_PER_COLUMN = 5;
const COLUMN_WIDTH = 108;
const ROW_HEIGHT = 104;

export function DesktopHero() {
  const [selected, setSelected] = useState<string | null>(null);
  const { positions, setPosition } = useIconPositions();
  const { openWindow } = useWindowManager();
  const { showToast } = useToast();
  const boundsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative hidden h-full w-full md:block"
      onClick={() => setSelected(null)}
    >
      <div className="absolute left-6 top-5 z-10 flex gap-2">
        <Link
          href="/privacy"
          className="rounded-full border border-black/5 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-200"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="rounded-full border border-black/5 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-200"
        >
          Terms of Service
        </Link>
      </div>

      <DesktopWidgets />

      {/* Anchored to the bottom-right corner, opposite the top-right widgets
          and left-side icons/card, and capped in size so it can't overlap them. */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 w-[42vw] max-w-[560px]">
        <Image
          src="/ilgizsatkynov.webp"
          alt="Illustration of Ilgiz working at a retro computer setup"
          width={960}
          height={540}
          priority
          className="h-auto max-h-[50vh] w-full object-contain object-bottom"
        />
      </div>

      {/* Drag playground for desktop icons — bounded away from the menu bar,
          dock, and edges. Icon positions are absolute within this box and
          freely draggable, like real desktop icons. */}
      <div ref={boundsRef} className="absolute left-6 right-6 top-20 bottom-28 z-10">
        {DESKTOP_ICONS.map((config, index) => {
          const column = Math.floor(index / ROWS_PER_COLUMN);
          const row = index % ROWS_PER_COLUMN;
          return (
            <FolderIcon
              key={config.id}
              id={config.id}
              label={config.label}
              icon={config.icon}
              badge={config.badge}
              defaultPosition={{ x: column * COLUMN_WIDTH, y: row * ROW_HEIGHT }}
              selected={selected === config.id}
              onSelect={() => setSelected(config.id)}
              onActivate={() => {
                if (config.action.type === "window") {
                  openWindow(config.action.windowId);
                } else {
                  showToast(config.action.message);
                }
              }}
              boundsRef={boundsRef}
              position={positions[config.id]}
              onPositionChange={setPosition}
            />
          );
        })}
      </div>

      <div className="absolute bottom-24 left-6 z-10 w-64 rounded-2xl bg-white p-5 shadow-xl dark:bg-neutral-800">
        <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
          About me
        </span>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          ILGIZ SATKYNOV
        </h1>
        <p className="mt-0.5 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          Web Designer &amp; Developer
        </p>
      </div>
    </div>
  );
}
