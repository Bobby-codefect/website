export default function CybersecuritePage() {
    const cybersecuriteTopics = [
        {
            title: "Audit et Conseil",
            description:
                "Contenu à compléter sur les audits, l’analyse des risques et l’accompagnement stratégique en cybersécurité.",
        },
        {
            title: "Rédaction de process et documents",
            description:
                "Contenu à compléter sur la formalisation des procédures, politiques et documents liés à la sécurité.",
        },
        {
            title: "Services de cybersécurité",
            description:
                "Contenu à compléter sur les prestations opérationnelles de protection et de sécurisation du système d’information.",
        },
        {
            title: "Monitoring de la sécurité",
            description:
                "Contenu à compléter sur la surveillance de la sécurité, la détection d’anomalies et le suivi des incidents.",
        },
        {
            title: "Sécurité par l'architecture du SI",
            description:
                "Contenu à compléter sur la sécurisation du système d’information par sa conception, sa structure et ses composants techniques.",
        },
        {
            title: "Sécurité par les process",
            description:
                "Contenu à compléter sur les méthodes organisationnelles, les règles internes et les processus de gestion de la sécurité.",
        },
    ];

    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-14 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                        Services
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                        Cybersécurité
                    </h1>

                    <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                    <p className="text-lg leading-8 text-[var(--color-text-soft)]">
                        Codefect accompagne les entreprises sur les enjeux de
                        cybersécurité en combinant audit, organisation, architecture
                        et services opérationnels adaptés à leur contexte.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {cybersecuriteTopics.map((topic) => (
                        <article
                            key={topic.title}
                            className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-surface-light)] p-8 shadow-sm"
                        >
                            <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">
                                {topic.title}
                            </h2>

                            <div className="mt-4 mb-6 h-1.5 w-20 rounded-full bg-[var(--color-accent-gold-strong)]" />

                            <p className="leading-7 text-[var(--color-text-soft)]">
                                {topic.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}