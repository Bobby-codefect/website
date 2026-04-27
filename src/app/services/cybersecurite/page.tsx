import CyberAnimationCard from "@/components/services/CyberAnimationCard";

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

export default function CybersecuriteV31Page() {
    return (
        <>
            <section className="bg-(--color-bg-light) text(--color-text-dark)">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="max-w-4xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-accent-blue)">
                            Services
                        </p>

                        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                            Cybersécurité
                        </h1>

                        <div className="mb-8 h-1.5 w-24 rounded-full bg-(--color-accent-gold-strong)" />

                        <p className="max-w-3xl text-lg leading-8 text-(--color-text-soft)">
                            Codefect accompagne les entreprises sur les enjeux de
                            cybersécurité en combinant audit, organisation,
                            architecture et services opérationnels adaptés à leur
                            contexte.
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-[var(--color-text-dark)]">
                <div className="bg-[rgba(23,32,42,0.35)]">
                    <div className="mx-auto max-w-7xl px-6 py-20">
                        <div className="grid gap-8 md:grid-cols-2">
                            {cybersecurityTopics.map((topic) => (
                                <article
                                    key={topic.title}
                                    className="rounded-3xl border border-(--color-border-soft) bg-(--color-card-bg) p-8 shadow-sm"
                                >
                                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-(--color-accent-blue)">
                                        Domaine
                                    </p>

                                    <h2 className="mb-4 text-2xl font-bold leading-tight text-(--color-text-dark)">
                                        {topic.title}
                                    </h2>

                                    <div className="mb-6 h-1.5 w-20 rounded-full bg-(--color-accent-gold-strong)" />

                                    <p className="text-lg leading-8 text-(--color-text-soft)">
                                        {topic.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-(--color-bg-light) text-(--color-text-dark)">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="mb-12 max-w-4xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-accent-blue)">
                            Protection
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            Une sécurité qui s&apos;active quand vous en avez besoin
                        </h2>

                        <div className="mb-8 h-1.5 w-24 rounded-full bg-(--color-accent-gold-strong)" />

                        <p className="text-lg leading-8 text-(--color-text-soft)">
                            Explorez nos domaines de cybersécurité en cliquant sur les cartes
                            ci-dessous. Chaque domaine représente une facette essentielle de
                            la protection de votre infrastructure.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <CyberAnimationCard
                            title="Audit & Conseil"
                            description="Analyse approfondie de votre infrastructure, identification des risques et recommandations stratégiques pour renforcer votre posture de sécurité."
                        />
                        <CyberAnimationCard
                            title="Processus & Documentation"
                            description="Formalisation des procédures de sécurité, création de politiques adaptées et documentation des bonnes pratiques."
                        />
                        <CyberAnimationCard
                            title="Services Opérationnels"
                            description="Prestations concrètes de protection, sécurisation des accès, gestion des authentifications et défense contre les menaces."
                        />
                    </div>
                </div>
            </section>

            <section className="bg-(--color-bg-light) text-(--color-text-dark)">
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-accent-gold-strong)">
                            Approche
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            Une cybersécurité pensée pour durer.
                        </h2>

                        <p className="leading-8 text-(--color-text-soft)">
                            Codefect accompagne ses clients dans la construction
                            d’une sécurité cohérente, progressive et adaptée à leur
                            environnement technique, organisationnel et humain.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}