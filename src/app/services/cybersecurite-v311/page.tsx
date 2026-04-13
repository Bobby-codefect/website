const cybersecurityTopics = [
    {
        title: "Audit et Conseil",
        description:
            "Codefect accompagne les entreprises dans l’évaluation de leur niveau de sécurité et dans l’identification des risques liés à leur système d’information. L’objectif est de disposer d’une vision claire de l’existant, de prioriser les actions à mener et de construire une stratégie de cybersécurité cohérente avec les besoins réels de l’organisation..",
    },
    {
        title: "Rédaction de process et documents",
        description:
            "Codefect intervient dans la formalisation des procédures et des documents nécessaires à une bonne gestion de la sécurité. Cette démarche permet de structurer les pratiques internes, de clarifier les responsabilités et de mettre en place un cadre documentaire adapté au fonctionnement de l’entreprise.",
    },
    {
        title: "Services de cybersécurité",
        description:
            "Codefect propose des services opérationnels destinés à renforcer la sécurité du système d’information. Ces prestations visent à protéger les environnements, à réduire les vulnérabilités et à mettre en œuvre des solutions adaptées au contexte technique et organisationnel de chaque client.",
    },
    {
        title: "Monitoring de la sécurité",
        description:
            "Codefect accompagne la mise en place d’un suivi de la sécurité afin de mieux détecter les comportements anormaux, identifier les signaux faibles et améliorer la réactivité face aux incidents. Le monitoring permet d’inscrire la cybersécurité dans une logique de vigilance continue.",
    },
    {
        title: "Sécurité par l'architecture du SI",
        description:
            "Codefect intègre la cybersécurité dans la conception et l’organisation du système d’information. L’objectif est de construire une architecture plus robuste, plus lisible et plus maîtrisée, afin de limiter les risques dès la base et de favoriser une évolution sécurisée des environnements.",
    },
    {
        title: "Sécurité par les process",
        description:
            "Codefect considère que la sécurité ne repose pas uniquement sur les outils, mais aussi sur les méthodes de travail et les règles internes. L’accompagnement porte donc également sur les processus de gestion, les pratiques organisationnelles et la mise en place de fonctionnements plus sécurisés au quotidien.",
    },
];

export default function CybersecuriteV31Page() {
    return (
        <>
            <section
                className="bg-cover bg-center bg-no-repeat text-white md:bg-fixed"
                style={{
                    backgroundImage: "url('/images/background-cybersecurite.png')",
                }}
            >
                <div className="bg-[rgba(23,32,42,0.42)]">  {/* Overlay sombre du bg */}
                    <div className="mx-auto max-w-7xl px-6 py-20">
                        <div className="max-w-4xl">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d7f3ff]">
                                Services
                            </p>

                            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                                Cybersécurité
                            </h1>

                            <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                            <div className="max-w-3xl rounded-2xl border border-[rgba(255,255,255,0.18)] bg-[rgba(248,251,253,0.14)] px-6 py-5 backdrop-blur-sm">
                                <p className="text-lg leading-8 text-[#f2f6fb]">
                                    Codefect accompagne les entreprises sur les enjeux de
                                    cybersécurité en combinant audit, organisation,
                                    architecture et services opérationnels adaptés à leur
                                    contexte.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[rgba(220,231,238,0.2)]">  {/* Fond plus clair sous les cards */}
                        <div className="mx-auto max-w-7xl px-6 py-20">
                            <div className="grid gap-8 md:grid-cols-2">
                                {cybersecurityTopics.map((topic) => (
                                    <article
                                        key={topic.title}
                                        className="rounded-3xl border border-[var(--color-border-soft)] bg-[rgba(248,251,253,0.92)] p-8 shadow-sm backdrop-blur-sm"
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
                </div>
            </section>

            <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-gold-strong)]">
                            Approche
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            Une cybersécurité pensée pour durer.
                        </h2>

                        <p className="leading-8 text-[var(--color-text-soft)]">
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