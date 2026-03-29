export function HeroVisual() {
  return (
    <div className="relative mx-auto flex min-h-[320px] w-full max-w-lg items-center justify-center lg:min-h-[420px]">
      {/* Soft blob behind portrait */}
      <div
        className="blob-shape absolute -right-4 top-8 h-72 w-72 bg-gradient-to-br from-sky-200/80 to-violet-web3/20 blur-2xl"
        aria-hidden
      />
      <div
        className="blob-shape absolute -left-8 bottom-0 h-56 w-56 bg-gradient-to-tr from-primary/15 to-sky-mid/40 blur-xl"
        aria-hidden
      />

      {/* Main circle */}
      <div className="relative z-10 flex h-[280px] w-[280px] items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-white shadow-[0_25px_60px_-15px_rgba(17,74,141,0.25)] ring-8 ring-white sm:h-[320px] sm:w-[320px]">
        <div className="flex h-[88%] w-[88%] items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-slate-100 to-sky-50">
          <span className="text-8xl" aria-hidden>
            🎓
          </span>
        </div>
      </div>

      {/* Floating small avatars */}
      <div
        className="absolute left-0 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-sky-100 text-lg shadow-lg"
        aria-hidden
      >
        👤
      </div>
      <div
        className="absolute right-2 top-16 z-20 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-violet-100 text-base shadow-lg"
        aria-hidden
      >
        👤
      </div>
      <div
        className="absolute bottom-12 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-amber-50 text-sm shadow-md"
        aria-hidden
      >
        👤
      </div>

      {/* Stat cards */}
      <div className="absolute -right-2 top-24 z-20 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm">
        <p className="text-xs font-medium text-slate-500">Participants</p>
        <p className="font-heading text-xl font-bold text-primary">100+</p>
      </div>
      <div className="absolute bottom-8 right-0 z-20 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm">
        <p className="text-xs font-medium text-slate-500">Modules</p>
        <p className="font-heading text-xl font-bold text-violet-web3">6</p>
        <div className="mt-2 flex h-10 items-end justify-center gap-1">
          {[40, 65, 45, 80, 55].map((h, i) => (
            <span
              key={i}
              className="w-2 rounded-t bg-gradient-to-t from-primary to-sky-mid"
              style={{ height: `${h}%`, minHeight: "8px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
