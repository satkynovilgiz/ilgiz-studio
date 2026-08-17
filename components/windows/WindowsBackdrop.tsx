"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useWindowManager } from "@/lib/window-context";

export function WindowsBackdrop() {
  const { openWindows } = useWindowManager();
  const hasOpen = openWindows.length > 0;

  return (
    <AnimatePresence>
      {hasOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none fixed inset-0 z-40 hidden bg-black/10 backdrop-blur-sm md:block dark:bg-black/30"
        />
      )}
    </AnimatePresence>
  );
}
