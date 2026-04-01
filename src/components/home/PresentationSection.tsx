import { homeContent } from "@/data/site-content";

export default function PresentationSection() {
    const { titre, texte } = homeContent.presentation;

    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div className="relative">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                            Présentation
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            {titre}
                        </h2>

                        <div className="h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />
                    </div>

                    <div className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-surface-light)] p-8 shadow-sm">
                        <p className="text-lg leading-8 text-[var(--color-text-soft)]">
                            {texte}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}