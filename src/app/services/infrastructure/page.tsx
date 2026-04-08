export default function InfrastructurePage() {
    const infrastructureTopics = [
        {
            title: "Serveurs",
            description:
                "Contenu à compléter sur les solutions serveurs et leur administration.",
        },
        {
            title: "Réseaux",
            description:
                "Contenu à compléter sur les infrastructures réseau et leur sécurisation.",
        },
        {
            title: "Téléphonie",
            description:
                "Contenu à compléter sur les solutions de téléphonie et de communication.",
        },
        {
            title: "Printing",
            description:
                "Contenu à compléter sur les solutions d’impression et leur gestion.",
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
                        Infrastructure
                    </h1>

                    <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                    <p className="text-lg leading-8 text-[var(--color-text-soft)]">
                        Codefect accompagne les entreprises sur les enjeux
                        d’infrastructure avec une approche adaptée à leurs besoins
                        techniques, organisationnels et opérationnels.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {infrastructureTopics.map((topic) => (
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