"use client";

import { useEffect, useRef, type ComponentType } from "react";
import { motion, useMotionValue } from "framer-motion";

interface FolderIconProps {
  id: string;
  label: string;
  icon: ComponentType;
  badge?: number;
  defaultPosition: { x: number; y: number };
  selected: boolean;
  onSelect: () => void;
  onActivate: () => void;
  boundsRef: React.RefObject<HTMLDivElement | null>;
  position?: { x: number; y: number };
  onPositionChange: (id: string, pos: { x: number; y: number }) => void;
}

export function FolderIcon({
  id,
  label,
  icon: Icon,
  badge,
  defaultPosition,
  selected,
  onSelect,
  onActivate,
  boundsRef,
  position,
  onPositionChange,
}: FolderIconProps) {
  const dragged = useRef(false);
  const start = position ?? defaultPosition;
  const x = useMotionValue(start.x);
  const y = useMotionValue(start.y);

  // The persisted position loads asynchronously relative to this component's
  // first paint (server/hydration render has none yet) — once it's in, snap
  // the motion values to it rather than leaving them at the default slot.
  useEffect(() => {
    if (position) {
      x.set(position.x);
      y.set(position.y);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position?.x, position?.y]);

  const handleDragEnd = () => {
    dragged.current = true;
    onPositionChange(id, { x: x.get(), y: y.get() });
    window.setTimeout(() => {
      dragged.current = false;
    }, 0);
  };

  return (
    <motion.button
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={boundsRef}
      onDragEnd={handleDragEnd}
      onClick={(event) => {
        event.stopPropagation();
        if (dragged.current) return;
        onSelect();
      }}
      onDoubleClick={(event) => {
        event.stopPropagation();
        onActivate();
      }}
      style={{ position: "absolute", left: 0, top: 0, x, y }}
      whileDrag={{ scale: 1.05, zIndex: 30 }}
      className="flex w-24 cursor-grab select-none flex-col items-center gap-1 rounded-lg px-1 py-2 outline-none active:cursor-grabbing"
    >
      <div className="relative h-16 w-16">
        <Icon />
        {badge ? (
          <span className="absolute -right-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-pink-500 px-1 text-[10px] font-semibold text-white ring-2 ring-white dark:ring-[#2a2825]">
            {badge}
          </span>
        ) : null}
      </div>
      <span
        className={`rounded px-1.5 py-0.5 text-center text-[11px] font-medium leading-tight ${
          selected ? "bg-blue-500 text-white" : "text-neutral-800 dark:text-neutral-100"
        }`}
      >
        {label}
      </span>
    </motion.button>
  );
}
