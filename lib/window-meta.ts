import type { LucideIcon } from "lucide-react";
import { Banknote, Radar as RadarIcon, UserRound, Briefcase } from "lucide-react";
import type { WindowId } from "./types";

export interface WindowMeta {
  id: WindowId;
  title: string;
  shortLabel: string;
  icon: LucideIcon;
  badge?: number;
  iconGradient: string;
}

export const WINDOW_META: Record<WindowId, WindowMeta> = {
  about: {
    id: "about",
    title: "ABOUT ME",
    shortLabel: "About",
    icon: UserRound,
    iconGradient: "from-slate-400 to-slate-600",
  },
  work: {
    id: "work",
    title: "WORK — FINDER",
    shortLabel: "Work",
    icon: Briefcase,
    badge: 6,
    iconGradient: "from-blue-400 to-indigo-600",
  },
  process: {
    id: "process",
    title: "PROCESS & PRICING",
    shortLabel: "Process & Pricing",
    icon: Banknote,
    badge: 5,
    iconGradient: "from-emerald-400 to-teal-600",
  },
  contact: {
    id: "contact",
    title: "CONTACT — AIRDROP",
    shortLabel: "Contact",
    icon: RadarIcon,
    iconGradient: "from-fuchsia-400 to-purple-600",
  },
};

export const WINDOW_ORDER: WindowId[] = ["about", "work", "process", "contact"];
