"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export function PhotosLightbox({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            onClick={(event) => event.stopPropagation()}
            className="w-[min(760px,90vw)] rounded-2xl border border-black/10 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-neutral-900"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                Photos — Recent Work
              </h2>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-1 text-neutral-400 transition hover:bg-black/5 hover:text-neutral-700 dark:hover:bg-white/10 dark:hover:text-neutral-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {PROJECTS.map((project) => (
                <div key={project.id} className="overflow-hidden rounded-xl border border-black/5 dark:border-white/10">
                  <div className={`h-24 w-full bg-gradient-to-br ${project.gradient}`} />
                  <div className="bg-white p-2 dark:bg-neutral-800">
                    <p className="truncate text-[12px] font-medium text-neutral-800 dark:text-neutral-100">
                      {project.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
