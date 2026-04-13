const infrastructureTopics = [
    {
        title: "Architecture et urbanisation",
        description:
            "Contenu à compléter sur la structuration de l’infrastructure, l’organisation des environnements et la cohérence globale du système d’information.",
    },
    {
        title: "Serveurs et environnements",
        description:
            "Contenu à compléter sur la mise en place, la gestion et l’évolution des serveurs ainsi que des environnements techniques.",
    },
    {
        title: "Réseaux et connectivité",
        description:
            "Contenu à compléter sur l’interconnexion des systèmes, la qualité des échanges réseau et la continuité de service.",
    },
    {
        title: "Supervision et disponibilité",
        description:
            "Contenu à compléter sur la surveillance de l’infrastructure, la détection d’incidents et le maintien en conditions opérationnelles.",
    },
    {
        title: "Performance et capacité",
        description:
            "Contenu à compléter sur l’optimisation des ressources, l’anticipation de la charge et l’adaptation aux besoins de l’activité.",
    },
    {
        title: "Continuité et résilience",
        description:
            "Contenu à compléter sur la robustesse de l’infrastructure, la reprise d’activité et la réduction des points de défaillance.",
    },
];

export default function InfrastructureV2Page() {
    return (
        <>
            <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="max-w-4xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                            Services
                        </p>

                        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                            Infrastructure
                        </h1>

                        <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                        <p className="max-w-3xl text-lg leading-8 text-[var(--color-text-soft)]">
                            Codefect accompagne les entreprises dans la conception,
                            l’organisation et l’évolution de leur infrastructure afin
                            de garantir un socle technique fiable, performant et
                            adapté à leurs enjeux.
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-[var(--color-text-dark)]">
                <div className="bg-[rgba(23,32,42,0.35)]">
                    <div className="mx-auto max-w-7xl px-6 py-20">
                        <div className="grid gap-8 md:grid-cols-2">
                            {infrastructureTopics.map((topic) => (
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
                            Une infrastructure conçue pour soutenir durablement l’activité.
                        </h2>

                        <p className="leading-8 text-[var(--color-text-soft)]">
                            Codefect accompagne ses clients dans la mise en place
                            d’une infrastructure cohérente, évolutive et résiliente,
                            pensée pour répondre aux besoins techniques, métiers et
                            organisationnels.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}