"use client";

import type { ReactNode } from "react";
import { ToastProvider } from "@/lib/toast-context";
import { WindowManagerProvider } from "@/lib/window-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WindowManagerProvider>
      <ToastProvider>{children}</ToastProvider>
    </WindowManagerProvider>
  );
}
