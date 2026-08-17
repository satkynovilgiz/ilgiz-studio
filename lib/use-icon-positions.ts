"use client";

import { useCallback, useSyncExternalStore } from "react";

interface Position {
  x: number;
  y: number;
}

type PositionsMap = Record<string, Position>;

const STORAGE_KEY = "ilgiz-studio:icon-positions";
const listeners = new Set<() => void>();
const emptySnapshot: PositionsMap = {};
let cache: PositionsMap | null = null;

function readFromStorage(): PositionsMap {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function getSnapshot(): PositionsMap {
  if (cache === null) {
    cache = readFromStorage();
  }
  return cache;
}

function getServerSnapshot(): PositionsMap {
  return emptySnapshot;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setPositionInStore(id: string, pos: Position) {
  cache = { ...getSnapshot(), [id]: pos };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
  } catch {
    // localStorage unavailable (private mode, etc.) — positions just won't persist
  }
  listeners.forEach((listener) => listener());
}

export function useIconPositions() {
  const positions = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setPosition = useCallback((id: string, pos: Position) => {
    setPositionInStore(id, pos);
  }, []);

  return { positions, setPosition };
}
