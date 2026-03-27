export type BlocPrestation = {
    titre: string;
    points: string[];
};

export type CategoriePrestation = {
    id: number;
    titre: string;
    blocs: BlocPrestation[];
};

export const prestations: CategoriePrestation[] = [
    {
        id: 1,
        titre: "Infrastructure",
        blocs: [
            {
                titre: "Solutions infrastructure",
                points: [],
            },
            {
                titre: "Solutions supports",
                points: [
                    "Gestion des identités",
                    "Gestion des mails",
                    "Gestion des documents",
                    "Solutions VoIP",
                ],
            },
            {
                titre: "Solutions management",
                points: [
                    "Gestion des tâches",
                    "Modélisation des processus métiers",
                ],
            },
            {
                titre: "Infogérance",
                points: [
                    "Monitoring 24/7 des systèmes",
                    "Ticketing",
                    "Accès à une base de connaissance",
                ],
            },
            {
                titre: "Outils",
                points: [
                    "Étude de processus",
                    "Étude des besoins",
                    "Sélection de méthodes pour répondre aux besoins",
                    "Sélection de l’outil en fonction de la méthode",
                ],
            },
        ],
    },
    {
        id: 2,
        titre: "Cybersécurité",
        blocs: [
            {
                titre: "Cybersécurité by design",
                points: [
                    "Sécurisation de l’infrastructure par matériels",
                    "Sécurisation des postes de travail",
                    "Sécurisation des données",
                    "Sécurisation des accès",
                ],
            },
            {
                titre: "Gestion de crise",
                points: [
                    "Processus de gestion de crise",
                ],
            },
            {
                titre: "Documentation",
                points: [
                    "Documentation PSSI",
                    "Documentation incident",
                    "PRA / PCA",
                ],
            },
        ],
    },
    {
        id: 3,
        titre: "Conseil et Audit",
        blocs: [
            {
                titre: "Audits",
                points: [
                    "Audit de maturité de l’infrastructure",
                    "Audit de maturité cybersécurité",
                    "Audit de processus de gestion de projet",
                ],
            },
            {
                titre: "Conseil",
                points: [
                    "Conseil en optimisation",
                    "Optimisation des processus",
                ],
            },
        ],
    },
    {
        id: 4,
        titre: "Sur-Mesure",
        blocs: [
            {
                titre: "Développement d’outils ciblés",
                points: [
                    "Développement d’outils sur mesure pour des besoins ciblés",
                    "Fonctionnalités non présentes dans des outils existants",
                    "Génération de rapports sur mesure",
                    "Automatisation de tâches récurrentes",
                ],
            },
        ],
    },
    {
        id: 5,
        titre: "Transparence",
        blocs: [
            {
                titre: "Suivi et visibilité",
                points: [
                    "Vue sur le monitoring de l’infrastructure et des réseaux",
                    "Vue sur la gestion des tickets",
                    "Vue sur l’avancement des tâches en cours",
                ],
            },
        ],
    },
];