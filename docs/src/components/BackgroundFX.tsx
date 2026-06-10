export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-10%] h-[800px] w-[1100px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
      <div className="absolute left-1/2 top-[20%] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary-glow/15 blur-[120px]" />
    </div>
  );
}
