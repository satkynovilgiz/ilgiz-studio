"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send, Camera } from "lucide-react";
import { CONTACT_LINKS } from "@/lib/data";
import type { ContactLink } from "@/lib/types";

const ICONS: Record<ContactLink["id"], typeof Send> = {
  telegram: Send,
  instagram: Camera,
  email: Mail,
};

const RING_SIZES = [260, 200, 140];

export function ContactContent() {
  return (
    <div className="thin-scrollbar flex h-full flex-col overflow-y-auto md:flex-row md:overflow-hidden">
      <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
          Let&apos;s discuss your project.
        </h1>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          Tell me what you&apos;re building, roughly when you need it live,
          and I&apos;ll get back to you with next steps — usually within a
          day.
        </p>

        <div className="mt-6 flex flex-col gap-1">
          {CONTACT_LINKS.map((link) => {
            const Icon = ICONS[link.id];
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.id === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-neutral-900 dark:text-neutral-50">
                      {link.label}
                    </span>
                    <span className="block text-[12px] text-neutral-500 dark:text-neutral-400">
                      {link.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-neutral-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-500 dark:text-neutral-600" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-neutral-900 dark:to-blue-950/30">
        <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-full">
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(59,130,246,0) 0deg, rgba(59,130,246,0.4) 45deg, rgba(59,130,246,0) 110deg, rgba(59,130,246,0) 360deg)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          {RING_SIZES.map((size) => (
            <div
              key={size}
              style={{ width: size, height: size }}
              className="absolute rounded-full border border-blue-400/30 dark:border-blue-400/20"
            />
          ))}
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white text-center shadow-lg ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/10"
          >
            <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
              IS
            </span>
            <span className="text-[9px] font-medium text-neutral-400">
              Ilgiz
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
