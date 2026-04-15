import { homeContent } from "@/data/site-content";

export default function ValuesSection() {
    const { titre, items } = homeContent.valeurs;

    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 pb-20">
                <div className="mb-12 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                        Valeurs
                    </p>

                    <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                        {titre}
                    </h2>

                    <div className="h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item, index) => (
                        <article
                            key={item}
                            className="rounded-3xl border border-[var(--color-border-soft)] bg-white p-6 shadow-sm"
                        >
                            <div className="mb-5 flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-accent-blue)] bg-[var(--color-bg-dark)] text-sm font-bold text-[var(--color-accent-gold-strong)]">
                                    {index + 1}
                                </div>

                                <div className="h-px flex-1 bg-[var(--color-border-soft)]" />
                            </div>

                            <p className="leading-7 text-[var(--color-text-soft)]">
                                {item}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}