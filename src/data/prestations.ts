export type Prestations = {
    id: number;
    titre: string;
    description: string;
};

export const prestations: Prestation[] = [
    {
        id: 1,
        titre: "Développement web sur mesure",
        description: "Création de sites et d’applications web adaptés aux besoins métiers des clients."
    },
    {
        id: 2,
        titre: "Maintenance applicative",
        description: "Correction, amélioration et suivi technique des applications existantes."
    },
    {
        id: 3,
        titre: "Audit technique",
        description: "Analyse de l’existant pour identifier les points d’amélioration techniques et fonctionnels."
    },
    {
        id: 4,
        titre: "Accompagnement projet",
        description: "Aide au cadrage, au suivi et à la mise en place de solutions numériques adaptées."
    },
    {
        id: 5,
        titre: "Développement d’applications métier",
        description: "Conception d’outils sur mesure pour répondre aux besoins spécifiques des entreprises."
    },
    {
        id: 6,
        titre: "Refonte de site web",
        description: "Modernisation d’interfaces existantes pour améliorer l’image, l’ergonomie et les performances."
    },
    {
        id: 7,
        titre: "Intégration front-end",
        description: "Transformation de maquettes en interfaces web modernes, responsives et accessibles."
    },
    {
        id: 8,
        titre: "Développement back-end",
        description: "Mise en place de traitements, d’API et de logiques métiers côté serveur."
    }
];