import { homeContent } from "@/data/site-content";

export default function WhySection() {
    const { titre, texte } = homeContent.pourquoi;

    return (
        <section className="bg-[#17202a] text-white">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e29e21]">
                        Notre démarche
                    </p>

                    <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                        {titre}
                    </h2>

                    <p className="text-lg leading-8 text-[#b8c2cf]">{texte}</p>
                </div>
            </div>
        </section>
    );
}