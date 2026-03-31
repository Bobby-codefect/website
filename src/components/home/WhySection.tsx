import { homeContent } from "@/data/site-content";

export default function WhySection() {
    const { titre, texte } = homeContent.pourquoi;

    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 pb-20">
                <div className="rounded-3xl border border-[var(--color-border-soft] bg-[var(--color-white)] p-8 shadow-sm md:p-10">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                        Pourquoi
                    </p>

                    <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                        {titre}
                    </h2>

                    <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold)]" />

                    <p className="max-w-5xl text-lg leading-8 text-[var(--color-text-soft)]">{texte}</p>
                </div>
            </div>
        </section>
    );
}