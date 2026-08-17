export function Wallpaper() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#f4f2ee] dark:bg-[#1c1b19]">
      <div
        className="absolute inset-0 opacity-60 dark:opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0.9), transparent 65%)",
        }}
      />
    </div>
  );
}
