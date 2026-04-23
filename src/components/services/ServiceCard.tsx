"use client";

import { useMemo, useState } from "react";
import type { CategorieService } from "@/data/services";

type ServiceCardProps = {
    categorie: CategorieService;
};

export default function ServiceCard({ categorie }: ServiceCardProps) {
    const [estOuverte, setEstOuverte] = useState(false);

    /**
     * Nombre total de points dans la card.
     * Sert à savoir s'il faut afficher le bouton.
     */
    const nombreTotalDePoints = useMemo(() => {
        return categorie.blocs.reduce((total, bloc) => total + bloc.points.length, 0);
    }, [categorie.blocs]);

    /**
     * Le bouton n'apparaît que s'il y a plus de 2 points au total.
     */
    const afficherBouton = nombreTotalDePoints > 2;

    return (
        <article className="mb-6 break-inside-avoid rounded-3xl border border-(--color-border-soft) bg-(--color-card-bg) p-6 shadow-sm">
            <div className="mb-5">
                <h2 className="text-xl font-bold text-(--color-text-dark)">
                    {categorie.titre}
                </h2>

                <div className="mt-3 h-1.5 w-16 rounded-full bg-(--color-accent-gold-strong)" />
            </div>

            <div className="space-y-6">
                {categorie.blocs.map((bloc) => {
                    const pointsVisibles = estOuverte ? bloc.points : bloc.points.slice(0, 1);

                    return (
                        <div key={bloc.titre}>
                            <h3 className="mb-3 text-base font-semibold text-(--color-text-soft)">
                                {bloc.titre}
                            </h3>

                            {pointsVisibles.length > 0 && (
                                <ul className="space-y-2">
                                    {pointsVisibles.map((point) => (
                                        <li key={point} className="flex items-start gap-3">
                                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-(--color-accent-gold-strong)" />
                                            <span className="text-base leading-6 text-(--color-text-soft)">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>

            {afficherBouton && (
                <div className="mt-6">
                    <button
                        type="button"
                        onClick={() => setEstOuverte((precedent) => !precedent)}
                        aria-expanded={estOuverte}
                        className="rounded-full border border-(--color-border-soft) px-4 py-2 text-sm font-medium text-(--color-text-dark) transition hover:bg-(--color-surface-light)"
                    >
                        {estOuverte ? "Réduire" : "En savoir plus"}
                    </button>
                </div>
            )}
        </article>
    );
}