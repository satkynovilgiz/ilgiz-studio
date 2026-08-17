"use client";

import { useWindowManager } from "@/lib/window-context";
import { WINDOW_META } from "@/lib/window-meta";
import type { WindowId } from "@/lib/types";

export function AppIcon({ id }: { id: WindowId }) {
  const meta = WINDOW_META[id];
  const Icon = meta.icon;
  const { openWindow } = useWindowManager();

  return (
    <button
      onClick={() => openWindow(id)}
      className="flex flex-col items-center gap-1.5 transition active:scale-95"
    >
      <div
        className={`relative flex h-14 w-14 items-center justify-center rounded-[16px] bg-gradient-to-br ${meta.iconGradient} shadow-md ring-1 ring-black/5`}
      >
        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
        {meta.badge ? (
          <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-semibold text-white ring-2 ring-white dark:ring-neutral-950">
            {meta.badge}
          </span>
        ) : null}
      </div>
      <span className="text-[11px] font-medium text-neutral-700 dark:text-neutral-200">
        {meta.shortLabel}
      </span>
    </button>
  );
}
