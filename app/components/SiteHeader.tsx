const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#programme", label: "Programme" },
  { href: "#vision", label: "Vision" },
  { href: "#contenu", label: "Contenu" },
  { href: "#inscription", label: "Inscription" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/90 shadow-[0_4px_30px_rgba(17,74,141,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <a
          href="#accueil"
          className="min-w-0 shrink font-heading text-lg font-bold tracking-tight text-[#0f2744] sm:text-xl lg:w-[220px] lg:text-2xl"
        >
          Goma Stakepool
        </a>

        <nav
          className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-slate-600 lg:flex lg:gap-8"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex w-auto min-w-0 items-center justify-end gap-2 lg:w-[220px] lg:gap-3">
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#0f2744] shadow-sm [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 z-30 mt-2 min-w-[220px] rounded-2xl border border-slate-100 bg-white py-2 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-5 py-2.5 text-sm hover:bg-sky-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
          <a
            href="#inscription"
            className="shrink-0 rounded-full bg-[#0f2744] px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-[#163a5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-7 sm:text-sm"
          >
            S&apos;inscrire
          </a>
        </div>
      </div>
    </header>
  );
}
