import { ApplyForm } from "./components/ApplyForm";
import { HeroVisual } from "./components/HeroVisual";
import { SiteHeader } from "./components/SiteHeader";

const missions = [
  {
    title: "Formation accessible",
    text: "Une formation de base sur le Web 3.0 ouverte à tous les jeunes de Goma.",
    icon: "📚",
    highlight: true,
  },
  {
    title: "Compréhension des systèmes",
    text: "Comprendre et utiliser les systèmes décentralisés avec des exemples concrets.",
    icon: "🔗",
    highlight: false,
  },
  {
    title: "Innovation locale",
    text: "Encourager projets et idées dans le numérique et la blockchain à l’échelle locale.",
    icon: "🚀",
    highlight: false,
  },
  {
    title: "Communauté",
    text: "Rejoindre un réseau de pairs et de mentors autour de Cardano et du Web3.",
    icon: "🤝",
    highlight: false,
  },
];

const modules = [
  {
    num: "01",
    label: "Module 1",
    title: "Introduction au Web 3.0",
    desc: "Comprendre l’évolution d’Internet vers un modèle décentralisé et les enjeux du Web3.",
  },
  {
    num: "02",
    label: "Module 2",
    title: "Technologies DLT",
    desc: "Les bases des registres distribués et des systèmes de consensus.",
  },
  {
    num: "03",
    label: "Module 3",
    title: "La Blockchain",
    desc: "Fonctionnement, sécurité et impact des chaînes de blocs dans le monde réel.",
  },
  {
    num: "04",
    label: "Module 4",
    title: "Réseau Cardano",
    desc: "Découverte d’un écosystème durable, orienté recherche et gouvernance participative.",
  },
  {
    num: "05",
    label: "Module 5",
    title: "Opportunités Web 3.0",
    desc: "Project Catalyst, financement communautaire et mise en œuvre de vos idées.",
  },
  {
    num: "06",
    label: "Module 6",
    title: "Tokenisation",
    desc: "Comprendre les tokens et les cas d’usage (ex. Token Mithrandir).",
  },
];

const impactStats = [
  { icon: "👨‍🎓", text: "+1000 jeunes formés à Goma depuis 2021" },
  { icon: "🌍", text: "Impact local à Goma" },
  { icon: "✨", text: "Projets Web3 incubés" },
];

const whyPoints = [
  {
    title: "Pédagogie claire",
    text: "Des modules progressifs, du concret et des ateliers pour expérimenter sans prérequis technique lourd.",
  },
  {
    title: "Ancrage Cardano & local",
    text: "Une équipe Goma Stakepool au service des jeunes de la région, avec un focus sur Cardano et l’écosystème réel.",
  },
];

function TimelineCard({ mod }: { mod: (typeof modules)[number] }) {
  return (
    <article className="relative w-full max-w-md overflow-hidden border border-slate-200 bg-slate-100/95 shadow-sm">
      <div className="flex items-stretch">
        <div className="flex min-h-[2.75rem] min-w-[3.25rem] items-center justify-center bg-primary px-2 font-heading text-xs font-bold text-white sm:min-w-[3.5rem] sm:text-sm">
          {mod.num}
        </div>
        <div className="min-w-0 flex-1 border-l border-white/20 bg-slate-100/50 p-4 sm:p-5">
          <h3 className="font-heading text-[0.7rem] font-bold uppercase leading-snug tracking-wide text-[#0f2744] sm:text-xs">
            {mod.label} : {mod.title}
          </h3>
          <div className="mt-2 h-0.5 w-10 bg-accent" aria-hidden />
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{mod.desc}</p>
        </div>
      </div>
    </article>
  );
}

function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative h-16 w-full overflow-hidden bg-transparent ${flip ? "rotate-180" : ""}`}>
      <svg
        className="absolute bottom-0 h-16 w-full text-white"
        preserveAspectRatio="none"
        viewBox="0 0 1440 48"
        fill="currentColor"
        aria-hidden
      >
        <path d="M0,48 L0,12 C240,48 480,0 720,12 C960,24 1200,48 1440,12 L1440,48 Z" />
      </svg>
    </div>
  );
}

function FooterWave() {
  return (
    <div className="relative -mt-px h-20 w-full overflow-hidden leading-none text-[#0a1628]">
      <svg
        className="relative block h-20 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden
      >
        <path d="M0,80 L0,35 Q360,5 720,30 T1440,25 L1440,80 Z" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* Hero — fond bleu très clair, style référence */}
        <section
          id="accueil"
          className="relative bg-gradient-to-b from-sky-50 via-[#f0f7ff] to-white pb-8 pt-10 sm:pb-12 sm:pt-14 lg:pb-16 lg:pt-20"
        >
          {/* Lignes / bulles décoratives */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.45]"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cpath fill='none' stroke='%23114A8D' stroke-opacity='0.12' stroke-width='1.2' d='M0,320 Q200,200 400,320 T800,280'/%3E%3Cpath fill='none' stroke='%236C4CF1' stroke-opacity='0.1' stroke-width='1' d='M0,400 Q300,480 600,360'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
          <div
            className="blob-shape pointer-events-none absolute -right-32 top-20 h-96 w-96 bg-gradient-to-bl from-sky-200/50 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="blob-shape pointer-events-none absolute -left-24 bottom-10 h-80 w-80 bg-gradient-to-tr from-violet-web3/10 to-transparent blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-sky-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm backdrop-blur-sm sm:text-sm">
                N°1 — initiation Web3 à Goma
              </span>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#0f2744] sm:text-5xl lg:text-[3.25rem]">
                Votre partenaire pour entrer dans le Web3
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Formation gratuite d&apos;initiation au Web 3.0 et à la Blockchain pour les jeunes de
                Goma. Une opportunité unique pour comprendre les technologies de demain et
                rejoindre l&apos;écosystème décentralisé.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#inscription"
                  className="inline-flex items-center justify-center rounded-full bg-[#0f2744] px-8 py-3.5 font-heading font-semibold text-white shadow-lg transition hover:bg-[#163a5c]"
                >
                  Rejoindre le programme
                </a>
                <a
                  href="#programme"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#0f2744]/20 bg-white px-8 py-3.5 font-heading font-semibold text-[#0f2744] shadow-sm transition hover:border-primary/40 hover:bg-sky-50"
                >
                  Découvrir le programme
                </a>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <WaveDivider />

        {/* Qu'est-ce que c'est */}
        <section
          id="programme"
          className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-[#0f2744] sm:text-4xl">
              Qu&apos;est-ce que c&apos;est ?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Une formation gratuite pour découvrir le Web 3.0 et la Blockchain. Vous apprenez,
              expérimentez et vous positionnez sur les nouvelles opportunités numériques.
            </p>
          </div>
        </section>

        {/* Nos services / missions — grille 2×2 */}
        <section id="missions" className="bg-slate-50/80 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-heading text-3xl font-bold text-[#0f2744] sm:text-4xl">
              Nos missions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
              Quatre piliers pour un onboarding utile, accessible et ancré dans la réalité locale.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {missions.map((m) => (
                <article
                  key={m.title}
                  className={`card-float rounded-[2rem] border border-slate-100/80 p-8 transition hover:-translate-y-0.5 ${
                    m.highlight
                      ? "bg-gradient-to-br from-sky-100 via-white to-sky-50 ring-1 ring-sky-200/60"
                      : "bg-white"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f2744]/5 text-2xl">
                    {m.icon}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#0f2744]">{m.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{m.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir — 2 colonnes + portraits */}
        <section id="vision" className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative mx-auto flex h-[300px] w-full max-w-md items-center justify-center lg:h-[360px]">
              <div className="absolute left-4 top-0 h-28 w-28 rounded-full border-4 border-white bg-gradient-to-br from-sky-200 to-sky-100 shadow-lg" />
              <div className="relative z-10 h-40 w-40 rounded-full border-4 border-white bg-gradient-to-br from-violet-200 to-sky-100 shadow-xl" />
              <div className="absolute bottom-2 right-8 h-32 w-32 rounded-full border-4 border-white bg-gradient-to-br from-amber-100 to-sky-50 shadow-lg" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-[#0f2744] sm:text-4xl">
                Pourquoi choisir ce programme ?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Notre vision : une nouvelle génération formée aux technologies de demain, capable
                d&apos;intégrer les écosystèmes décentralisés et de participer aux projets Web 3.0,
                localement et au-delà.
              </p>
              <ul className="mt-10 space-y-8">
                {whyPoints.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0f2744] text-lg text-white shadow-md">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#0f2744]">{item.title}</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Autres programmes — blob + 2 cartes */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div
            className="blob-shape pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[min(90vw,480px)] -translate-y-1/2 bg-gradient-to-br from-sky-200/70 to-sky-100/30 blur-2xl"
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-bold text-[#0f2744] sm:text-4xl">
                Parcours proposés
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Deux axes pour structurer votre montée en compétences : les fondamentaux Web3, puis
                l&apos;écosystème Cardano et les opportunités concrètes.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <article className="card-float flex min-h-[280px] flex-col rounded-[2rem] bg-gradient-to-b from-sky-200/90 to-sky-100 p-8 text-[#0f2744] shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                  🧭
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold">Fondamentaux Web3</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                  Web 3.0, DLT, blockchain : comprendre les bases avant de passer à la pratique.
                </p>
                <a
                  href="#contenu"
                  className="mt-6 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold shadow-md transition hover:bg-sky-50"
                >
                  Voir le détail
                </a>
              </article>
              <article className="card-float flex min-h-[280px] flex-col rounded-[2rem] border border-slate-100 bg-white p-8 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f2744] text-2xl text-white shadow-md">
                  💠
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-[#0f2744]">
                  Cardano & opportunités
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  Cardano, Catalyst, tokenisation : passer du savoir aux projets.
                </p>
                <a
                  href="#contenu"
                  className="mt-6 inline-flex w-fit items-center rounded-full border-2 border-[#0f2744]/15 px-5 py-2.5 text-sm font-semibold text-[#0f2744] transition hover:bg-sky-50"
                >
                  Voir le détail
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Modules — grille */}
        <section id="contenu" className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-2xl font-bold uppercase tracking-[0.12em] text-[#0f2744] sm:text-3xl">
              Ce que vous allez apprendre
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-600">
              Un parcours en six modules — du concept à la pratique — présenté sur une frise pour
              visualiser votre progression.
            </p>

            {/* Marqueur de départ (axe temporel) */}
            <div className="mt-12 flex justify-center">
              <div className="rounded-sm bg-primary px-6 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-md sm:text-sm">
                Programme — Onboarding Web3
              </div>
            </div>

            {/* Frise chronologique : mobile = ligne à gauche ; desktop = axe central + alternance */}
            <div className="relative mx-auto mt-10 max-w-5xl md:mt-14">
              <div
                className="absolute bottom-0 left-[11px] top-0 w-[3px] -translate-x-1/2 bg-slate-200 md:left-1/2 md:w-px md:-translate-x-1/2"
                aria-hidden
              />

              <ul className="relative space-y-0">
                {modules.map((mod, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <li key={mod.num} className="relative pb-10 last:pb-4 md:pb-14">
                      {/* Mobile : nœud sur l’axe (aligné avec la ligne du conteneur) + connecteur + carte */}
                      <div className="md:hidden">
                        <div className="absolute left-[11px] top-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-primary shadow-sm ring-2 ring-primary/20" />
                        <div className="ml-8 flex items-center gap-2 sm:ml-10">
                          <div
                            className="h-0.5 w-5 shrink-0 bg-gradient-to-r from-accent to-accent/60"
                            aria-hidden
                          />
                          <div className="min-w-0 flex-1">
                            <TimelineCard mod={mod} />
                          </div>
                        </div>
                      </div>

                      {/* Desktop : grille 3 cols — carte | nœud | carte */}
                      <div className="hidden md:grid md:grid-cols-[1fr_28px_1fr] md:items-center md:gap-0">
                        <div className="flex min-h-[4rem] items-center justify-end gap-0 pr-1">
                          {isLeft ? (
                            <>
                              <TimelineCard mod={mod} />
                              <div
                                className="hidden h-0.5 w-10 shrink-0 bg-gradient-to-r from-accent to-accent/50 sm:block"
                                aria-hidden
                              />
                            </>
                          ) : (
                            <span className="block max-w-md" />
                          )}
                        </div>
                        <div className="relative flex justify-center py-2">
                          <div className="h-4 w-4 shrink-0 rounded-full border-[3px] border-white bg-primary shadow-md ring-2 ring-primary/20" />
                        </div>
                        <div className="flex min-h-[4rem] items-center justify-start gap-0 pl-1">
                          {!isLeft ? (
                            <>
                              <div
                                className="hidden h-0.5 w-10 shrink-0 bg-gradient-to-l from-accent to-accent/50 sm:block"
                                aria-hidden
                              />
                              <TimelineCard mod={mod} />
                            </>
                          ) : (
                            <span className="block max-w-md" />
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-4 flex justify-center md:mt-2">
              <a
                href="#inscription"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent px-8 py-3 font-heading text-sm font-semibold text-primary transition hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                S&apos;inscrire maintenant
              </a>
            </div>
          </div>
        </section>

        {/* Témoignage — carte large */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-heading text-3xl font-bold text-[#0f2744] sm:text-4xl">
              Ce qu&apos;ils en disent
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
              Une communauté qui grandit à Goma autour du Web3 et de Cardano.
            </p>
            <div className="relative mt-12">
              <button
                type="button"
                className="absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:bg-[#0d3d75] lg:flex"
                aria-label="Précédent"
              >
                ‹
              </button>
              <article className="card-float relative mx-auto flex max-w-5xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-xl md:flex-row">
                <div className="flex min-h-[240px] items-center justify-center bg-gradient-to-br from-sky-100 to-sky-50 md:w-[42%]">
                  <div className="h-36 w-36 rounded-full bg-gradient-to-br from-slate-200 to-sky-200 shadow-inner ring-4 ring-white" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-8 sm:p-10 md:pl-12">
                  <span className="text-5xl font-serif leading-none text-primary/25" aria-hidden>
                    “
                  </span>
                  <p className="mt-2 text-lg leading-relaxed text-slate-700">
                    Ce programme m&apos;a permis de comprendre enfin ce qu&apos;est la blockchain et
                    comment Cardano peut servir nos projets locaux. Accessible, concret, motivant.
                  </p>
                  <p className="mt-6 font-heading font-bold text-[#0f2744]">Participant·e</p>
                  <p className="text-sm text-slate-500">Promotion Onboarding — Goma</p>
                </div>
              </article>
              <button
                type="button"
                className="absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:bg-[#0d3d75] lg:flex"
                aria-label="Suivant"
              >
                ›
              </button>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section id="impact" className="bg-gradient-to-b from-sky-50/50 to-white px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-2xl font-bold text-[#0f2744] sm:text-3xl">
              Impact
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {impactStats.map((s) => (
                <div
                  key={s.text}
                  className="card-float rounded-[1.75rem] border border-slate-100 bg-white p-8 text-center"
                >
                  <span className="text-4xl" aria-hidden>
                    {s.icon}
                  </span>
                  <p className="mt-4 font-heading font-semibold text-primary">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inscription — carte blanche sur fond doux */}
        <section id="inscription" className="relative px-4 pb-20 pt-8 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-xl rounded-[2rem] border border-sky-100 bg-white p-8 shadow-[0_25px_60px_-20px_rgba(17,74,141,0.15)] sm:p-12">
            <h2 className="text-center font-heading text-3xl font-bold text-[#0f2744] sm:text-4xl">
              Rejoignez le programme
            </h2>
            <p className="mt-3 text-center text-slate-600">
              Laissez vos coordonnées — nous vous recontactons rapidement.
            </p>
            <ApplyForm variant="light" />
          </div>
        </section>
      </main>

      <FooterWave />
      <footer className="bg-[#0a1628] px-4 pb-12 pt-2 text-slate-300 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <p className="font-heading text-xl font-bold text-white">Goma Stakepool</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Onboarding Program — former la prochaine génération Web3 à Goma.
            </p>
            <div className="mt-6 flex gap-3">
              {["𝕏", "in", "✈"].map((x, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 text-sm transition hover:border-sky-400 hover:text-white"
                  aria-label="Réseau social"
                >
                  {x}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Liens rapides
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {["#accueil|Accueil", "#programme|Programme", "#missions|Missions", "#contenu|Contenu", "#inscription|Inscription"].map(
                (pair) => {
                  const [href, label] = pair.split("|");
                  return (
                    <li key={href}>
                      <a href={href} className="hover:text-white">
                        {label}
                      </a>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Programme
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#contenu" className="hover:text-white">
                  Modules
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-white">
                  Vision
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white">
                  Impact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="mailto:contact@gomastakepool.example" className="hover:text-white">
                  contact@gomastakepool.example
                </a>
              </li>
              <li>
                <a href="tel:+243000000000" className="hover:text-white">
                  +243 …
                </a>
              </li>
              <li className="text-slate-500">Lun — Ven · 9h — 17h</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-6xl border-t border-slate-700/80 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Goma Stakepool. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}