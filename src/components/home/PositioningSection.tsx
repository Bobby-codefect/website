import { homeContent } from "@/data/site-content";

export default function PositioningSection() {
    const { titre, texte, points } = homeContent.positionnement;

    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 pb-24">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">

                    <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-accent-blue)]/30 md:p-10">
                        <div className="absolute left-0 top-0 h-0 w-[3px] rounded-full bg-gradient-to-b from-[var(--color-accent-gold-strong)] to-[var(--color-accent-blue)] transition-all duration-500 group-hover:h-full" />

                        <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[var(--color-accent-blue)] opacity-[0.04] transition-transform duration-700 group-hover:scale-150" />

                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                            Accompagnement
                        </p>
                        <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-4xl">
                            {titre}
                        </h2>
                        <div className="mb-8 h-[3px] w-12 rounded-full bg-[var(--color-accent-gold-strong)]" />
                        <p className="text-lg leading-8 text-[var(--color-text-soft)]">
                            {texte}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-bg-dark)] p-8 shadow-sm md:p-10">
                        <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                            Points clés
                        </p>

                        <ul className="space-y-0">
                            {points.map((point, index) => (
                                <li
                                    key={point}
                                    className="group/item flex items-start gap-5 rounded-xl p-4 transition-colors duration-300 hover:bg-white/[0.04] cursor-default"
                                >
                                    <div className="flex shrink-0 flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-accent-blue)]/50 bg-[var(--color-bg-dark)] transition-all duration-300 group-hover/item:border-[var(--color-accent-gold-strong)] group-hover/item:shadow-[0_0_10px_var(--color-accent-gold-strong)]/20">
                                            <span className="text-xs font-bold text-[var(--color-accent-gold-strong)]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        {index < points.length - 1 && (
                                            <div className="my-2 h-6 w-px bg-gradient-to-b from-[var(--color-accent-blue)]/30 to-transparent" />
                                        )}
                                    </div>

                                    <p className="pt-1 text-base leading-7 text-[var(--color-text-soft)] transition-colors duration-300 group-hover/item:text-white">
                                        {point}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}