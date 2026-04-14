const customAutomationTopics = [
    {
        title: "Développement sur mesure",
        description:
            "Codefect conçoit des outils adaptés aux besoins ciblés de l’entreprise lorsque les solutions existantes ne permettent pas de répondre correctement aux usages attendus. L’objectif est de proposer une réponse concrète, pensée en fonction du contexte, des contraintes et des priorités métiers.",
    },
    {
        title: "Fonctionnalités spécifiques",
        description:
            "Codefect intervient lorsque certaines fonctionnalités nécessaires ne sont pas disponibles dans les outils déjà en place. Cette approche permet de compléter l’existant avec des développements adaptés, sans imposer de changement global inutile dans l’environnement de travail.",
    },
    {
        title: "Génération de rapports sur mesure",
        description:
            "Codefect accompagne la création de rapports personnalisés afin de répondre à des besoins précis de suivi, d’analyse ou de pilotage. Les restitutions sont construites selon les attentes réelles de l’entreprise, afin de rendre les données plus exploitables et plus utiles au quotidien.",
    },
    {
        title: "Automatisation des tâches récurrentes",
        description:
            "Codefect met en place des automatisations pour limiter les actions répétitives, réduire les erreurs manuelles et faire gagner du temps aux équipes. Cette démarche permet d’améliorer la fiabilité des traitements tout en allégeant la charge opérationnelle.",
    },
];

export default function SurMesureAutomatisationPage() {
    return (
        <>
            <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="max-w-4xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                            Services
                        </p>

                        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                            Sur-Mesure et Automatisation
                        </h1>

                        <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                        <p className="max-w-3xl text-lg leading-8 text-[var(--color-text-soft)]">
                            Codefect accompagne les entreprises dans la création de
                            solutions sur mesure et dans l’automatisation de leurs
                            processus afin de répondre à des besoins ciblés,
                            d’améliorer l’efficacité opérationnelle et de faire
                            évoluer les outils selon les usages réels.
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-[var(--color-text-dark)]">
                <div className="bg-[rgba(23,32,42,0.35)]">
                    <div className="mx-auto max-w-7xl px-6 py-20">
                        <div className="grid gap-8 md:grid-cols-2">
                            {customAutomationTopics.map((topic) => (
                                <article
                                    key={topic.title}
                                    className="rounded-3xl border border-[var(--color-border-soft)] bg-white p-8 shadow-sm"
                                >
                                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-blue)]">
                                        Domaine
                                    </p>

                                    <h2 className="mb-4 text-2xl font-bold leading-tight text-[var(--color-text-dark)]">
                                        {topic.title}
                                    </h2>

                                    <div className="mb-6 h-1.5 w-20 rounded-full bg-[var(--color-accent-gold-strong)]" />

                                    <p className="leading-8 text-[var(--color-text-soft)]">
                                        {topic.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-gold-strong)]">
                            Approche
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            Des solutions construites autour des besoins réels.
                        </h2>

                        <p className="leading-8 text-[var(--color-text-soft)]">
                            Codefect accompagne ses clients dans la mise en place
                            d’outils ciblés, évolutifs et adaptés à leur activité,
                            afin de répondre plus précisément aux besoins non couverts
                            par les solutions standard et d’automatiser les tâches à
                            faible valeur ajoutée.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}