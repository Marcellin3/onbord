"use client";

type ApplyFormProps = {
  variant?: "dark" | "light";
};

export function ApplyForm({ variant = "dark" }: ApplyFormProps) {
  const isLight = variant === "light";

  const field =
    isLight
      ? "w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-[#0f2744] placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      : "w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50";

  const label = isLight ? "mb-2 block text-sm font-medium text-[#0f2744]" : "mb-1.5 block text-sm font-medium text-white/90";

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor="nom" className={label}>
          Nom
        </label>
        <input id="nom" name="nom" type="text" required autoComplete="name" className={field} placeholder="Votre nom complet" />
      </div>
      <div>
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
          placeholder="vous@exemple.com"
        />
      </div>
      <div>
        <label htmlFor="tel" className={label}>
          Téléphone
        </label>
        <input id="tel" name="telephone" type="tel" autoComplete="tel" className={field} placeholder="+243 …" />
      </div>
      <div>
        <label htmlFor="motivation" className={label}>
          Motivation
        </label>
        <textarea
          id="motivation"
          name="motivation"
          rows={4}
          required
          className={`${field} resize-y`}
          placeholder="Pourquoi souhaitez-vous rejoindre le programme ?"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[#0f2744] py-4 font-heading text-base font-semibold text-white shadow-lg transition hover:bg-[#163a5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Postuler maintenant
      </button>
    </form>
  );
}
