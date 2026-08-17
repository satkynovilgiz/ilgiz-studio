"use client";

import { useRef, useState, type ComponentType, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useToast } from "@/lib/toast-context";
import { useWindowManager } from "@/lib/window-context";
import { GITHUB_URL, INSTAGRAM_URL, TELEGRAM_URL } from "@/lib/data";
import {
  CalendarImageIcon,
  FinderImageIcon,
  GitHubImageIcon,
  InstagramImageIcon,
  NotesImageIcon,
  PhotosImageIcon,
  SafariImageIcon,
  SettingsImageIcon,
  SpotifyImageIcon,
  TelegramImageIcon,
  TrashImageIcon,
  VSCodeImageIcon,
} from "@/components/icons/UploadedIcons";
import { PhotosLightbox } from "./PhotosLightbox";

interface DockItem {
  id: string;
  label: string;
  Icon: ComponentType;
  action: () => void;
}

function DockIcon({
  mouseX,
  item,
  running,
}: {
  mouseX: MotionValue<number>;
  item: DockItem;
  running: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return Infinity;
    return value - (bounds.x + bounds.width / 2);
  });

  const sizeSync = useTransform(distance, [-160, 0, 160], [50, 76, 50]);
  const size = useSpring(sizeSync, { mass: 0.15, stiffness: 260, damping: 16 });

  const Icon = item.Icon;

  return (
    <div className="flex flex-col items-center gap-1">
      <motion.button
        ref={ref}
        style={{ width: size, height: size }}
        onClick={item.action}
        title={item.label}
        aria-label={item.label}
        whileTap={{ scale: 0.9 }}
        className="flex shrink-0 items-center justify-center drop-shadow-md"
      >
        <Icon />
      </motion.button>
      <span
        className={`h-1 w-1 rounded-full transition-opacity ${
          running ? "bg-white/70 opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export function Dock() {
  const mouseX = useMotionValue(Infinity);
  const { showToast } = useToast();
  const { openWindow } = useWindowManager();
  const [running, setRunning] = useState<Set<string>>(new Set());
  const [photosOpen, setPhotosOpen] = useState(false);

  const markRunning = (id: string) => {
    setRunning((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const items: DockItem[] = [
    {
      id: "finder",
      label: "Finder",
      Icon: FinderImageIcon,
      action: () => {
        markRunning("finder");
        openWindow("work");
      },
    },
    {
      id: "photos",
      label: "Photos",
      Icon: PhotosImageIcon,
      action: () => {
        markRunning("photos");
        setPhotosOpen(true);
      },
    },
    {
      id: "notes",
      label: "Notes",
      Icon: NotesImageIcon,
      action: () => {
        markRunning("notes");
        openWindow("about");
      },
    },
    {
      id: "telegram",
      label: "Telegram",
      Icon: TelegramImageIcon,
      action: () => {
        markRunning("telegram");
        window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "instagram",
      label: "Instagram",
      Icon: InstagramImageIcon,
      action: () => {
        markRunning("instagram");
        window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "spotify",
      label: "Spotify",
      Icon: SpotifyImageIcon,
      action: () => {
        markRunning("spotify");
        showToast("♪ Currently listening to lo-fi coding beats");
      },
    },
    {
      id: "safari",
      label: "Safari",
      Icon: SafariImageIcon,
      action: () => {
        markRunning("safari");
        openWindow("contact");
      },
    },
    {
      id: "calendar",
      label: "Calendar",
      Icon: CalendarImageIcon,
      action: () => {
        markRunning("calendar");
        openWindow("process");
      },
    },
    {
      id: "vscode",
      label: "VS Code",
      Icon: VSCodeImageIcon,
      action: () => {
        markRunning("vscode");
        showToast("💻 Probably debugging something right now");
      },
    },
    {
      id: "github",
      label: "GitHub",
      Icon: GitHubImageIcon,
      action: () => {
        markRunning("github");
        window.open(GITHUB_URL, "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "settings",
      label: "System Settings",
      Icon: SettingsImageIcon,
      action: () => showToast("System Settings — not implemented yet"),
    },
    {
      id: "trash",
      label: "Trash",
      Icon: TrashImageIcon,
      action: () => showToast("It's empty… for now 🗑️"),
    },
  ];

  return (
    <>
      <motion.div
        onMouseMove={(event) => mouseX.set(event.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="fixed bottom-4 left-1/2 z-50 hidden -translate-x-1/2 items-end gap-2 rounded-[22px] border border-white/15 bg-neutral-900/80 px-3 pb-2 pt-2.5 shadow-xl shadow-black/30 backdrop-blur-xl md:flex"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 40px rgba(0,0,0,0.35)" }}
      >
        {items.map((item): ReactNode => (
          <DockIcon key={item.id} mouseX={mouseX} item={item} running={running.has(item.id)} />
        ))}
      </motion.div>
      <PhotosLightbox open={photosOpen} onClose={() => setPhotosOpen(false)} />
    </>
  );
}
