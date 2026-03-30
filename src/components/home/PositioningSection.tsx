// src/components/home/PositioningSection.tsx
import { homeContent } from "@/data/site-content";

export default function PositioningSection() {
    const { titre, texte, points } = homeContent.positionnement;

    return (
        <section className="bg-[#f4f6f8] text-[#17202a]">
            <div className="mx-auto max-w-7xl px-6 pb-20">
                <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
                    <div className="rounded-3xl border border-[#b8c2cf] bg-white p-8 shadow-sm md:p-10">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                            Accompagnement
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            {titre}
                        </h2>

                        <div className="mb-8 h-1.5 w-24 rounded-full bg-[#e29e21]" />

                        <p className="text-lg leading-8 text-[#1b364f]">{texte}</p>
                    </div>

                    <div className="rounded-3xl border border-[#b8c2cf] bg-white p-8 shadow-sm md:p-10">
                        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                            Points clés
                        </p>

                        <ul className="space-y-5">
                            {points.map((point, index) => (
                                <li key={point} className="flex items-start gap-4">
                                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1e6585] bg-[#17202a] text-xs font-bold text-[#e29e21]">
                                        {index + 1}
                                    </div>

                                    <p className="leading-7 text-[#1b364f]">{point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}