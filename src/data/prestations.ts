export type Prestations = {
    id: number;
    titre: string;
    description: string;
};

export const prestations: Prestations[] = [
    {
        id: 1,
        titre: "Développement web sur mesure",
        description: "Création d'applications et de sites web adaptés aux besoins métiers des clients."
    },
    {
        id: 2,
        titre: "Maintenance applicative",
        description: "Correction, amélioration et suivi technique des applications existantes."
    },
    {
        id: 3,
        titre: "Audit technique",
        description: "Analyse de l'existant pour identifier les points d'amélioration techniques et fonctionnels."
    },
    {
        id: 4,
        titre: "Accompagnement projet",
        description: "Aide au cadrage, au suivi et à la mise en place de solutions numériques adaptées."
    }
];