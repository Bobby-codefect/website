import PrestationCard from "@/components/prestations/PrestationCard";
import { prestations } from "@/data/prestations";

export default function PrestationsSection() {
    return (
        <section className="min-h-screen bg-[#17202a] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <header className="mb-14 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e29e21]">
                        Prestations
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                        Des services numériques structurés autour de vos besoins réels.
                    </h1>

                    <p className="text-lg leading-8 text-[#b8c2cf]">
                        Codefect accompagne les TPE et PME avec des prestations organisées
                        autour de l’infrastructure, de la cybersécurité, du conseil, du
                        sur-mesure et de la transparence de suivi.
                    </p>
                </header>

                <div className="grid gap-6 xl:grid-cols-2">
                    {prestations.map((categorie) => (
                        <PrestationCard key={categorie.id} categorie={categorie} />
                    ))}
                </div>

                <div className="mt-16 rounded-2xl border border-[#1e6585] bg-[#1b364f] p-8">
                    <h2 className="mb-4 text-3xl font-bold">
                        Vous avez un besoin spécifique ?
                    </h2>

                    <p className="mb-6 max-w-3xl leading-8 text-[#b8c2cf]">
                        Chaque entreprise a ses contraintes, ses priorités et son niveau de
                        maturité numérique. Codefect vous accompagne avec une approche
                        adaptée à votre contexte et à vos objectifs.
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