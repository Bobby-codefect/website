const customAutomationTopics = [
    {
        title: "Développement sur mesure",
        description:
            "Contenu à compléter sur la conception et le développement de solutions adaptées aux besoins spécifiques de l’entreprise.",
    },
    {
        title: "Automatisation des processus",
        description:
            "Contenu à compléter sur l’automatisation des tâches récurrentes, l’optimisation des flux et la réduction des actions manuelles.",
    },
    {
        title: "Intégration d’outils et de services",
        description:
            "Contenu à compléter sur l’interconnexion des applications, des services et des outils métiers afin de fluidifier les usages.",
    },
    {
        title: "Adaptation aux besoins métiers",
        description:
            "Contenu à compléter sur la prise en compte des contraintes opérationnelles, des usages internes et des objectifs de l’entreprise.",
    },
    {
        title: "Évolution et amélioration continue",
        description:
            "Contenu à compléter sur les ajustements progressifs, les évolutions fonctionnelles et l’accompagnement dans la durée.",
    },
    {
        title: "Fiabilité et gain d’efficacité",
        description:
            "Contenu à compléter sur la sécurisation des traitements, la réduction des erreurs et l’amélioration de la performance opérationnelle.",
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
                            processus afin de gagner en efficacité, en fiabilité et
                            en cohérence opérationnelle.
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
                            Des solutions pensées pour s’adapter réellement à l’activité.
                        </h2>

                        <p className="leading-8 text-[var(--color-text-soft)]">
                            Codefect accompagne ses clients dans la mise en place
                            de solutions sur mesure et d’automatisations adaptées à
                            leurs usages, à leurs contraintes et à leurs objectifs,
                            afin de structurer durablement leur fonctionnement.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}