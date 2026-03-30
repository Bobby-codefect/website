import { homeContent } from "@/data/site-content";

export default function PositioningSection() {
    const { titre, texte, points } = homeContent.positionnement;

    return (
        <section className="bg-[#17202a] text-white">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e29e21]">
                            Accompagnement
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            {titre}
                        </h2>

                        <p className="text-lg leading-8 text-[#b8c2cf]">{texte}</p>
                    </div>

                    <div className="rounded-2xl border border-[#1e6585] bg-[#1b364f] p-8">
                        <ul className="space-y-4">
                            {points.map((point) => (
                                <li key={point} className="flex gap-4 leading-7 text-[#d7f3ff]">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-[#e29e21]" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}