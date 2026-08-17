"use client";

import Link from "next/link";
import { StatusBar } from "./StatusBar";
import { AppIcon } from "./AppIcon";
import { MobileDock } from "./MobileDock";
import { HomeIndicator } from "./HomeIndicator";
import { WINDOW_ORDER } from "@/lib/window-meta";

export function MobileHome() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-b from-indigo-100 via-sky-50 to-white md:hidden dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-7 w-36 -translate-x-1/2 rounded-b-2xl bg-black" />

      <StatusBar />

      <div className="flex flex-1 flex-col px-6 pt-10">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            ILGIZ SATKYNOV
          </h1>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Web Designer &amp; Developer
          </p>
        </div>

        <div className="mt-9 grid grid-cols-4 gap-x-3 gap-y-6">
          {WINDOW_ORDER.map((id) => (
            <AppIcon key={id} id={id} />
          ))}
        </div>

        <div className="mt-auto flex justify-center gap-4 pb-3">
          <Link
            href="/privacy"
            className="text-[11px] font-medium text-neutral-500 underline-offset-2 dark:text-neutral-400"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[11px] font-medium text-neutral-500 underline-offset-2 dark:text-neutral-400"
          >
            Terms of Service
          </Link>
        </div>
      </div>

      <MobileDock />
      <HomeIndicator />
    </div>
  );
}
