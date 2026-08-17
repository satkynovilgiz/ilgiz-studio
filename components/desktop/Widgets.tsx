"use client";

import { useClock } from "@/lib/use-clock";

function CalendarWidget() {
  const now = new Date();
  const dayName = now.toLocaleDateString("en-US", { weekday: "short" });
  const monthDay = now.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const startWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: Array<number | null> = [
    ...Array.from({ length: startWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="flex h-[155px] w-[155px] flex-col rounded-[20px] border border-black/5 bg-white p-3 shadow-lg dark:border-white/10 dark:bg-neutral-800">
      <div className="text-center">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-red-500">
          {dayName}
        </div>
        <div className="text-lg font-bold leading-tight text-neutral-900 dark:text-neutral-50">
          {monthDay}
        </div>
      </div>
      <div className="mt-2 grid flex-1 grid-cols-7 gap-y-[1px]">
        {cells.map((day, index) => (
          <div key={index} className="flex items-center justify-center">
            {day ? (
              day === today ? (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-semibold text-white">
                  {day}
                </span>
              ) : (
                <span className="text-[8px] text-neutral-400 dark:text-neutral-500">{day}</span>
              )
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ClockWidget() {
  const time = useClock();

  return (
    <div className="flex h-[155px] w-[155px] flex-col items-center justify-center rounded-[20px] bg-neutral-900 text-white shadow-lg dark:bg-black">
      <span className="text-[34px] font-semibold leading-none tabular-nums">{time}</span>
      <span className="mt-2 text-[11px] font-medium text-white/50">Local Time</span>
    </div>
  );
}

export function DesktopWidgets() {
  return (
    <div
      className="absolute right-6 top-14 z-10 flex gap-3"
      onClick={(event) => event.stopPropagation()}
    >
      <CalendarWidget />
      <ClockWidget />
    </div>
  );
}
