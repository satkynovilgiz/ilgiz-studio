function makeImageIcon(src: string, alt: string, padding = "0", scale = 1) {
  function UploadedImageIcon() {
    return (
      <div
        className="flex h-full w-full items-center justify-center overflow-hidden"
        style={{ padding }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain"
          style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
          draggable={false}
        />
      </div>
    );
  }
  return UploadedImageIcon;
}

export const FinderImageIcon = makeImageIcon("/Finder_Icon_macOS_Tahoe.png", "Finder");
export const PhotosImageIcon = makeImageIcon("/photo.webp", "Photos");
export const NotesImageIcon = makeImageIcon(
  "/notes_macos_bigsur_icon_189901.webp",
  "Notes",
  "0",
  1.25
);
export const SafariImageIcon = makeImageIcon("/safari.webp", "Safari");
export const CalendarImageIcon = makeImageIcon(
  "/calendar-2021-04-29.webp",
  "Calendar",
  "0",
  1.25
);
export const GitHubImageIcon = makeImageIcon("/githublogo.webp", "GitHub");
export const TrashImageIcon = makeImageIcon("/trash.png", "Trash");

export function SpotifyImageIcon() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[22%] bg-white p-[3%] ring-2 ring-black/10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Spotify.png"
        alt="Spotify"
        className="h-full w-full object-contain"
        draggable={false}
      />
    </div>
  );
}
export const SettingsImageIcon = makeImageIcon("/Setting.png", "Settings", "0", 1.25);
export const VSCodeImageIcon = makeImageIcon("/Visual_Studio_Code_1.35_icon.png", "VS Code", "10%");
export const TelegramImageIcon = makeImageIcon(
  "/telegram_macos_bigsur_icon_189662.webp",
  "Telegram",
  "0",
  1.25
);
export const InstagramImageIcon = makeImageIcon("/Instagram_icon.png", "Instagram");
