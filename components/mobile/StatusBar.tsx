"use client";

import { BatteryFull, Signal, Wifi } from "lucide-react";
import { useClock } from "@/lib/use-clock";

export function StatusBar() {
  const time = useClock();

  return (
    <div className="relative z-10 flex items-center justify-between px-6 pb-1 pt-3 text-[15px] font-semibold text-neutral-900 dark:text-neutral-50">
      <span className="tabular-nums">{time}</span>
      <div className="flex items-center gap-1.5">
        <Signal className="h-3.5 w-3.5" strokeWidth={2.4} />
        <Wifi className="h-3.5 w-3.5" strokeWidth={2.4} />
        <BatteryFull className="h-4 w-4" strokeWidth={2} />
      </div>
    </div>
  );
}
