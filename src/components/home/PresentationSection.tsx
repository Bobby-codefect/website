import { homeContent } from "@/data/site-content";

export default function PresentationSection() {
    const { titre, texte } = homeContent.presentation;

    return (
        <section className="bg-(--color-bg-light) text-(--color-text-dark) lg:-mt-40 xl:-mt-56">
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-20 lg:pt-6">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">

                    <div className="relative pl-5">
                        <div className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-(--color-accent-gold-strong) to-(--color-accent-blue)" />

                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-(--color-accent-blue)">
                            Présentation
                        </p>
                        <h2 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight md:text-5xl">
                            {titre}
                        </h2>
                        <div className="mb-10 h-[3px] w-14 rounded-full bg-(--color-accent-gold-strong)" />

                        <div className="hidden lg:grid grid-cols-6 gap-[10px] w-fit">
                            {Array.from({ length: 18 }).map((_, i) => (
                                <div key={i} className="h-[5px] w-[5px] rounded-full bg-(--color-accent-blue) opacity-20" />
                            ))}
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="pointer-events-none absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 border-(--color-accent-gold-strong) rounded-tl-lg transition-all duration-500 group-hover:h-12 group-hover:w-12" />
                        <div className="pointer-events-none absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-(--color-accent-blue) rounded-br-lg transition-all duration-500 group-hover:h-12 group-hover:w-12" />

                        <div className="overflow-hidden rounded-2xl border border-(--color-border-soft) bg-(--color-card-bg) shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-[var(--color-accent-blue)]/30">
                            <div className="h-[3px] w-0 bg-gradient-to-r from-(--color-accent-gold-strong) to-(--color-accent-blue) transition-all duration-700 group-hover:w-full" />

                            <div className="p-8 md:p-10">
                                <div className="mb-7 flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--color-bg-dark) transition-transform duration-300 group-hover:scale-110">
                                        <svg className="h-5 w-5 text-(--color-accent-gold-strong)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-(--color-border-soft) to-transparent" />
                                </div>
                                <p className="text-lg leading-8 text-(--color-text-soft)">
                                    {texte}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}