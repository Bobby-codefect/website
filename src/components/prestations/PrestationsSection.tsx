import PrestationCard from "@/components/prestations/PrestationCard";
import { prestations } from "@/data/prestations";

export default function PrestationsSection() {
    return (
        <section className="bg-[#f4f6f8] text-[#17202a]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-14 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                        Prestations
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                        Des services structurés pour répondre à vos besoins numériques.
                    </h1>

                    <div className="mb-8 h-1.5 w-24 rounded-full bg-[#e29e21]" />

                    <p className="text-lg leading-8 text-[#1b364f]">
                        Codefect accompagne les TPE et PME avec des prestations organisées
                        autour de l’infrastructure, de la cybersécurité, du conseil, du
                        sur-mesure et de la transparence de suivi.
                    </p>
                </div>

                <div className="grid gap-8 xl:grid-cols-2">
                    {prestations.map((categorie) => (
                        <PrestationCard key={categorie.id} categorie={categorie} />
                    ))}
                </div>

                <div className="mt-20 rounded-3xl border border-[#b8c2cf] bg-white p-8 shadow-sm md:p-10">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                        Besoin spécifique
                    </p>

                    <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                        Vous avez un besoin particulier lié à votre activité ?
                    </h2>

                    <div className="mb-8 h-1.5 w-24 rounded-full bg-[#e29e21]" />

                    <p className="mb-8 max-w-3xl text-lg leading-8 text-[#1b364f]">
                        Chaque entreprise a son contexte, ses priorités et ses contraintes.
                        Codefect vous accompagne avec une approche adaptée à votre
                        environnement et à vos objectifs.
                    </p>

                    <a
                        href="/contact"
                        className="inline-block rounded-md bg-[#be8620] px-6 py-3 font-semibold text-[#17202a] transition hover:bg-[#e29e21]"
                    >
                        Nous contacter
                    </a>
                </div>
            </div>
        </section>
    );
}