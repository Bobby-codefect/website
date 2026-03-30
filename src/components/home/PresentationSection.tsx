import { homeContent } from "@/data/site-content";

export default function PresentationSection() {
    const { titre, texte } = homeContent.presentation;

    return (
        <section className="bg-[#d7f3ff] text-[#17202a]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                            Accueil
                        </p>

                        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                            {titre}
                        </h2>
                    </div>

                    <div>
                        <p className="text-lg leading-8 text-[#1b364f]">{texte}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}