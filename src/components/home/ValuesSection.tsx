import { homeContent } from "@/data/site-content";

export default function ValuesSection() {
    const { titre, items } = homeContent.valeurs;

    return (
        <section className="bg-[#d7f3ff] text-[#17202a]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                        Nos valeurs
                    </p>

                    <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                        {titre}
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                        <article
                            key={item}
                            className="rounded-2xl border border-[#b8c2cf] bg-white p-6 shadow-sm"
                        >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#17202a] text-lg font-bold text-[#e29e21]">
                                •
                            </div>

                            <p className="leading-7 text-[#1b364f]">{item}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}