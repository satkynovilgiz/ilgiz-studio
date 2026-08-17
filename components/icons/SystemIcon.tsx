import type { ReactNode } from "react";

interface SystemIconProps {
  glyph: ReactNode;
  from: string;
  to: string;
  glyphScale?: string;
}

export function SystemIcon({ glyph, from, to, glyphScale = "52%" }: SystemIconProps) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28%]"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[45%]"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.35), rgba(255,255,255,0))",
        }}
      />
      <div className="relative z-10 text-white" style={{ height: glyphScale, width: glyphScale }}>
        {glyph}
      </div>
    </div>
  );
}
