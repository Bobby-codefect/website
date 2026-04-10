const cybersecurityTopics = [
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

export default function CybersecuriteV3Page() {
    return (
        <section className="bg-[#d3e3ec] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-16 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                        Services
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                        Cybersécurité
                    </h1>

                    <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                    <p className="max-w-3xl text-lg leading-8 text-[var(--color-text-soft)]">
                        Codefect accompagne les entreprises sur les enjeux de
                        cybersécurité en combinant audit, organisation, architecture
                        et services opérationnels adaptés à leur contexte.
                    </p>
                </div>

                <div className="space-y-8">
                    {cybersecurityTopics.map((topic, index) => {
                        const isAltBackground = index % 2 !== 0;

                        return (
                            <article
                                key={topic.title}
                                className={`rounded-3xl border p-8 shadow-sm md:p-10 ${
                                    isAltBackground
                                        ? "border-[var(--color-accent-blue)]/20 bg-[var(--color-white)]"
                                        : "border-[var(--color-border-soft)] bg-[var(--color-surface-light)]"
                                }`}
                            >
                                <div className="grid gap-8 md:grid-cols-[100px_1fr] md:items-start">
                                    <div className="flex items-center gap-4 md:block">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-accent-blue)] bg-[var(--color-bg-dark)] text-lg font-bold text-[var(--color-accent-gold-strong)]">
                                            {String(index + 1).padStart(2, "0")}
                                        </div>

                                        <div className="h-px flex-1 bg-[var(--color-border-soft)] md:mt-5 md:h-16 md:w-px" />
                                    </div>

                                    <div>
                                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-blue)]">
                                            Domaine
                                        </p>

                                        <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                                            {topic.title}
                                        </h2>

                                        <div className="mb-6 h-1.5 w-20 rounded-full bg-[var(--color-accent-gold-strong)]" />

                                        <p className="max-w-3xl leading-8 text-[var(--color-text-soft)]">
                                            {topic.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}