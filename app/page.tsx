import { MenuBar } from "@/components/desktop/MenuBar";
import { Dock } from "@/components/desktop/Dock";
import { DesktopHero } from "@/components/desktop/DesktopHero";
import { Wallpaper } from "@/components/desktop/Wallpaper";
import { MobileHome } from "@/components/mobile/MobileHome";
import { WindowsBackdrop } from "@/components/windows/WindowsBackdrop";
import { WindowsLayer } from "@/components/windows/WindowsLayer";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Wallpaper />
      <MenuBar />

      <div className="relative h-full w-full md:pt-9">
        <DesktopHero />
        <MobileHome />
      </div>

      <Dock />
      <WindowsBackdrop />
      <WindowsLayer />
    </main>
  );
}
