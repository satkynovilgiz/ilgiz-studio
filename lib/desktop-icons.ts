import type { ComponentType } from "react";
import { Avatar } from "@/components/icons/Avatar";
import { FolderGlyph } from "@/components/icons/FolderGlyph";
import type { WindowId } from "./types";

export type DesktopIconAction =
  | { type: "window"; windowId: WindowId }
  | { type: "toast"; message: string };

export interface DesktopIconConfig {
  id: string;
  label: string;
  icon: ComponentType;
  badge?: number;
  action: DesktopIconAction;
}

export const DESKTOP_ICONS: DesktopIconConfig[] = [
  { id: "about", label: "About", icon: Avatar, action: { type: "window", windowId: "about" } },
  {
    id: "work",
    label: "Work",
    icon: FolderGlyph,
    badge: 6,
    action: { type: "window", windowId: "work" },
  },
  {
    id: "process",
    label: "Process & Pricing",
    icon: FolderGlyph,
    badge: 5,
    action: { type: "window", windowId: "process" },
  },
  {
    id: "contact",
    label: "Contact",
    icon: FolderGlyph,
    action: { type: "window", windowId: "contact" },
  },
  {
    id: "ilgiz",
    label: "Ilgiz",
    icon: FolderGlyph,
    action: { type: "toast", message: "Just me, being me 🙂" },
  },
  {
    id: "pics",
    label: "pics",
    icon: FolderGlyph,
    action: { type: "toast", message: "No pics in here yet 📷" },
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderGlyph,
    action: { type: "toast", message: "Real projects live in the Work folder →" },
  },
  {
    id: "secrets",
    label: "my secrets :|",
    icon: FolderGlyph,
    action: { type: "toast", message: "Nice try. Nothing to see here 👀" },
  },
];
