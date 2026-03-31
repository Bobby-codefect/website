import { homeContent } from "@/data/site-content";

export default function PositioningSection() {
    const { titre, texte, points } = homeContent.positionnement;

    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 pb-20">
                <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
                    <div className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-white)] p-8 shadow-sm md:p-10">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                            Accompagnement
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            {titre}
                        </h2>

                        <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                        <p className="text-lg leading-8 text-[var(--color-text-soft)]">{texte}</p>
                    </div>

                    <div className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-white)] p-8 shadow-sm md:p-10">
                        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                            Points clés
                        </p>

                        <ul className="space-y-5">
                            {points.map((point, index) => (
                                <li key={point} className="flex items-start gap-4">
                                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent-blue)] bg-[var(--color-bg-dark)]
                                    text-xs font-bold text-[var(--color-accent-gold-strong)]">
                                        {index + 1}
                                    </div>

                                    <p className="leading-7 text-[var(--color-text-soft)]">{point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}