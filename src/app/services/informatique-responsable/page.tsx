const responsibleITTopics = [
    {
        title: "Choix d’outils adaptés",
        description:
            "Codefect accompagne les entreprises dans le choix de solutions réellement adaptées à leurs besoins afin d’éviter les outils surdimensionnés, mal exploités ou inadaptés aux usages. Cette approche permet de limiter les coûts inutiles et de construire un environnement plus cohérent, plus durable et plus responsable.",
    },
    {
        title: "Optimisation des ressources",
        description:
            "Codefect intervient pour améliorer l’utilisation des ressources techniques et organisationnelles déjà en place. L’objectif est de réduire les surcoûts, de limiter les redondances et de favoriser des solutions plus sobres, mieux exploitées et plus efficaces dans la durée.",
    },
    {
        title: "Évolutivité maîtrisée",
        description:
            "Codefect privilégie des solutions capables d’évoluer avec l’activité sans nécessiter de refonte profonde à chaque changement. Cette logique permet de mieux accompagner la croissance de l’entreprise tout en réduisant les impacts liés au remplacement prématuré d’outils ou d’environnements entiers.",
    },
    {
        title: "Approche plus respectueuse",
        description:
            "Codefect intègre une réflexion sur l’impact des choix informatiques dans un secteur particulièrement énergivore. L’objectif est de proposer, lorsque cela est pertinent, des solutions plus respectueuses de l’environnement, sans compromettre la qualité de service, la sécurité ou les besoins métiers de l’entreprise.",
    },
];

export default function InformatiqueResponsablePage() {
    return (
        <>
            <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="max-w-4xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                            Services
                        </p>

                        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                            Informatique responsable
                        </h1>

                        <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                        <p className="max-w-3xl text-lg leading-8 text-[var(--color-text-soft)]">
                            Codefect accompagne les entreprises dans la mise en
                            place de solutions informatiques plus cohérentes,
                            mieux dimensionnées et plus durables, afin de réduire
                            les coûts inutiles et de favoriser une approche plus
                            responsable des outils numériques.
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-[var(--color-text-dark)]">
                <div className="bg-[rgba(23,32,42,0.35)]">
                    <div className="mx-auto max-w-7xl px-6 py-20">
                        <div className="grid gap-8 md:grid-cols-2">
                            {responsibleITTopics.map((topic) => (
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
                            Une informatique pensée pour durer et mieux répondre aux usages.
                        </h2>

                        <p className="leading-8 text-[var(--color-text-soft)]">
                            Codefect accompagne ses clients dans des choix
                            informatiques plus mesurés, plus adaptés et plus
                            évolutifs, afin de construire des environnements
                            techniques plus efficaces, plus cohérents et plus
                            respectueux dans le temps.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}