import { homeContent } from "@/data/site-content";

export default function WhySection() {
    const { titre, texte } = homeContent.pourquoi;

    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 pb-24">
                <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] shadow-sm transition-all duration-500 hover:shadow-lg hover:border-[var(--color-accent-blue)]/30">
                    <div className="h-[3px] w-full bg-gradient-to-r from-[var(--color-accent-gold-strong)] via-[var(--color-accent-blue)] to-transparent" />

                    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-accent-blue)] opacity-[0.035] transition-transform duration-700 group-hover:scale-125" />

                    <div className="grid lg:grid-cols-[300px_1fr]">
                        <div className="flex flex-col justify-between border-b border-[var(--color-border-soft)] bg-[var(--color-bg-dark)] p-8 lg:border-b-0 lg:border-r lg:border-[var(--color-border-soft)]">
                            <div>
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                                    Pourquoi
                                </p>
                                <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
                                    {titre}
                                </h2>
                                <div className="mt-5 h-[3px] w-10 rounded-full bg-[var(--color-accent-gold-strong)]" />
                            </div>

                            <div className="mt-10 hidden space-y-2.5 lg:block">
                                {[70, 90, 50, 80, 60].map((w, i) => (
                                    <div
                                        key={i}
                                        className="h-[5px] rounded-full bg-[var(--color-accent-blue)] opacity-20 transition-all duration-700 group-hover:opacity-40"
                                        style={{ width: `${w}%`, transitionDelay: `${i * 60}ms` }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="mb-6 select-none text-6xl font-black leading-none text-[var(--color-accent-gold-strong)] opacity-20 transition-opacity duration-300 group-hover:opacity-35">
                                &quot;
                            </div>
                            <p className="max-w-3xl text-lg leading-8 text-[var(--color-text-soft)]">
                                {texte}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}