"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { WindowId } from "./types";

interface WindowManagerContextValue {
  openWindows: WindowId[];
  isOpen: (id: WindowId) => boolean;
  zIndexOf: (id: WindowId) => number;
  isFocused: (id: WindowId) => boolean;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  toggleWindow: (id: WindowId) => void;
}

const WindowManagerContext = createContext<WindowManagerContextValue | null>(
  null
);

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [openWindows, setOpenWindows] = useState<WindowId[]>([]);

  const openWindow = useCallback((id: WindowId) => {
    setOpenWindows((prev) =>
      prev.includes(id) ? [...prev.filter((w) => w !== id), id] : [...prev, id]
    );
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
    setOpenWindows((prev) => prev.filter((w) => w !== id));
  }, []);

  const focusWindow = useCallback((id: WindowId) => {
    setOpenWindows((prev) =>
      prev.length === 0 || prev[prev.length - 1] === id
        ? prev
        : [...prev.filter((w) => w !== id), id]
    );
  }, []);

  const toggleWindow = useCallback((id: WindowId) => {
    setOpenWindows((prev) =>
      prev.includes(id)
        ? prev.filter((w) => w !== id)
        : [...prev, id]
    );
  }, []);

  const isOpen = useCallback(
    (id: WindowId) => openWindows.includes(id),
    [openWindows]
  );
  const zIndexOf = useCallback(
    (id: WindowId) => openWindows.indexOf(id),
    [openWindows]
  );
  const isFocused = useCallback(
    (id: WindowId) => openWindows[openWindows.length - 1] === id,
    [openWindows]
  );

  const value = useMemo<WindowManagerContextValue>(
    () => ({
      openWindows,
      isOpen,
      zIndexOf,
      isFocused,
      openWindow,
      closeWindow,
      focusWindow,
      toggleWindow,
    }),
    [openWindows, isOpen, zIndexOf, isFocused, openWindow, closeWindow, focusWindow, toggleWindow]
  );

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error("useWindowManager must be used within a WindowManagerProvider");
  }
  return ctx;
}
