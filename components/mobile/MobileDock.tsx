"use client";

import { useWindowManager } from "@/lib/window-context";
import { INSTAGRAM_URL, TELEGRAM_URL } from "@/lib/data";
import { FinderImageIcon, InstagramImageIcon, TelegramImageIcon } from "@/components/icons/UploadedIcons";
import { ContactIcon } from "@/components/icons/SystemIcons";

export function MobileDock() {
  const { openWindow } = useWindowManager();

  return (
    <div className="px-6 pb-2">
      <div className="flex items-center justify-around rounded-[26px] border border-white/40 bg-white/60 px-4 py-2.5 shadow-lg backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-800/60">
        <button
          onClick={() => window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer")}
          aria-label="Telegram"
          className="h-12 w-12 shadow active:scale-95"
        >
          <TelegramImageIcon />
        </button>
        <button
          onClick={() => window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer")}
          aria-label="Instagram"
          className="h-12 w-12 shadow active:scale-95"
        >
          <InstagramImageIcon />
        </button>
        <button
          onClick={() => openWindow("contact")}
          aria-label="Contact"
          className="h-12 w-12 shadow active:scale-95"
        >
          <ContactIcon />
        </button>
        <button
          onClick={() => openWindow("work")}
          aria-label="Work"
          className="h-12 w-12 shadow active:scale-95"
        >
          <FinderImageIcon />
        </button>
      </div>
    </div>
  );
}
