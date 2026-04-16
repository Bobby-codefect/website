import type { CategorieService } from "@/data/services";

type ServiceCardProps = {
    categorie: CategorieService;
};

export default function ServiceCard({ categorie }: ServiceCardProps) {
    return (
        <article className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] p-8 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">
                    {categorie.titre}
                </h2>

                <div className="mt-4 h-1.5 w-20 rounded-full bg-[var(--color-accent-gold-strong)]" />
            </div>

            <div className="space-y-10">
                {categorie.blocs.map((bloc) => (
                    <div key={bloc.titre}>
                        <h3 className="mb-4 text-lg font-semibold text-[var(--color-text-soft)]">
                            {bloc.titre}
                        </h3>

                        {bloc.points.length > 0 && (
                            <ul className="space-y-3">
                                {bloc.points.map((point) => (
                                    <li key={point} className="flex items-start gap-3">
                                        <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent-gold-strong)]" />
                                        <span className="leading-7 text-[var(--color-text-soft)]">
                                            {point}
                                        </span>
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