import { homeContent } from "@/data/site-content";

export default function GoalsSection() {
    const { titre, texte, items } = homeContent.objectifs;

    return (
        <section className="bg-[#d7f3ff] text-[#17202a]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-12 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                        Objectifs
                    </p>

                    <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                        {titre}
                    </h2>

                    <p className="text-lg leading-8 text-[#1b364f]">{texte}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {items.map((item) => (
                        <article
                            key={item}
                            className="rounded-2xl border border-[#b8c2cf] bg-white p-6 shadow-sm"
                        >
                            <div className="mb-4 h-1.5 w-16 rounded-full bg-[#e29e21]" />
                            <p className="leading-7 text-[#1b364f]">{item}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}