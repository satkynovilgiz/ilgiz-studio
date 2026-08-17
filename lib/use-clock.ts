"use client";

import { useSyncExternalStore } from "react";

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function subscribe(callback: () => void) {
  const interval = window.setInterval(callback, 15000);
  return () => window.clearInterval(interval);
}

const getServerSnapshot = () => "--:--";

export function useClock(): string {
  return useSyncExternalStore(subscribe, () => formatTime(new Date()), getServerSnapshot);
}
