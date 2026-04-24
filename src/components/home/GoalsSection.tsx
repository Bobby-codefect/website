import { homeContent } from "@/data/site-content";

export default function GoalsSection() {
    const { titre, texte, items } = homeContent.objectifs;

    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 pb-24">

                <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
                    <div>
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                            Objectifs
                        </p>
                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                            {titre}
                        </h2>
                        <div className="mt-6 h-[3px] w-14 rounded-full bg-[var(--color-accent-gold-strong)]" />
                    </div>

                    <div className="lg:pb-2">
                        <p className="text-lg leading-8 text-[var(--color-text-soft)]">
                            {texte}
                        </p>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {items.map((item, index) => (
                        <article
                            key={item}
                            className="group relative overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] p-6 shadow-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-accent-blue)]/30"
                        >
                            <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 rounded-full bg-gradient-to-b from-[var(--color-accent-gold-strong)] to-[var(--color-accent-blue)] transition-transform duration-400 group-hover:scale-y-100" />

                            <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[var(--color-accent-blue)] opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]" />

                            <div className="mb-5 flex items-center gap-4">
                                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent-blue)]/50 bg-[var(--color-bg-dark)] transition-all duration-300 group-hover:border-[var(--color-accent-gold-strong)] group-hover:shadow-[0_0_12px_rgba(190,134,32,0.2)]">
                                    <span className="text-xs font-bold text-[var(--color-accent-gold-strong)]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-border-soft)] to-transparent transition-all duration-500 group-hover:from-[var(--color-accent-blue)]/30" />
                            </div>

                            <p className="text-base leading-7 text-[var(--color-text-soft)] transition-colors duration-300 group-hover:text-[var(--color-text-dark)]">
                                {item}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}