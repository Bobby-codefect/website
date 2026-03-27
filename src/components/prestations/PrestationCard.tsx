import type { CategoriePrestation } from "@/data/prestations";

type PrestationCardProps = {
    categorie: CategoriePrestation;
};

export default function PrestationCard({ categorie }: PrestationCardProps) {
    return (
        <article className="h-full rounded-2xl border border-[#1e6585] bg-[#1b364f] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#e29e21]">
            <h2 className="mb-6 text-2xl font-bold text-white">{categorie.titre}</h2>

            <div className="space-y-6">
                {categorie.blocs.map((bloc) => (
                    <div key={bloc.titre}>
                        <h3 className="mb-3 text-lg font-semibold text-[#d7f3ff]">
                            {bloc.titre}
                        </h3>

                        {bloc.points.length > 0 && (
                            <ul className="space-y-2 text-[#b8c2cf]">
                                {bloc.points.map((point) => (
                                    <li key={point} className="flex gap-3 leading-7">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-[#e29e21]" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </article>
    );
}