import type { CategoriePrestation } from "@/data/prestations";

type PrestationCardProps = {
    categorie: CategoriePrestation;
};

export default function PrestationCard({ categorie }: PrestationCardProps) {
    return (
        <article className="rounded-3xl border border-[#b8c2cf] bg-white p-8 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#17202a]">
                    {categorie.titre}
                </h2>

                <div className="mt-4 h-1.5 w-20 rounded-full bg-[#e29e21]" />
            </div>

            <div className="space-y-10">
                {categorie.blocs.map((bloc) => (
                    <div key={bloc.titre}>
                        <h3 className="mb-4 text-lg font-semibold text-[#1b364f]">
                            {bloc.titre}
                        </h3>

                        {bloc.points.length > 0 && (
                            <ul className="space-y-3">
                                {bloc.points.map((point) => (
                                    <li key={point} className="flex items-start gap-3">
                                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#e29e21]" />
                                        <span className="leading-7 text-[#1b364f]">{point}</span>
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