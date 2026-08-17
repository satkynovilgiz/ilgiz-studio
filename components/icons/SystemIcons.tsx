import { Radar } from "lucide-react";
import { SystemIcon } from "./SystemIcon";

export function ContactIcon() {
  return (
    <SystemIcon
      glyph={<Radar className="h-full w-full" strokeWidth={2} />}
      from="#cdb0ff"
      to="#8a4fe0"
    />
  );
}
