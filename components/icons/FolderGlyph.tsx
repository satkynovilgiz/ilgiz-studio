export function FolderGlyph() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/folder.png"
      alt="Folder"
      className="h-full w-full object-contain drop-shadow-sm"
      draggable={false}
    />
  );
}
