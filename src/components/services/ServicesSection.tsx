import ServiceFeatureSection from "@/components/services/ServiceFeatureSection";
import { services } from "@/data/services";

const servicesIllustrations = [
    {
        id: 1,
        imageSrc: "/images/services/infrastructure.png",
        imageAlt: "Illustration infrastructure",
        imageLeft: false,
        description:
            "Codefect accompagne les entreprises dans l’organisation, le déploiement et le suivi de leur environnement technique.",
    },
    {
        id: 2,
        imageSrc: "/images/services/cybersecurite.png",
        imageAlt: "Illustration cybersécurité",
        imageLeft: true,
        description:
            "La cybersécurité s’intègre dès la conception afin de mieux protéger les accès, les données et les usages.",
    },
    {
        id: 3,
        imageSrc: "/images/services/conseil-audit.png",
        imageAlt: "Illustration conseil et audit",
        imageLeft: false,
        description:
            "Codefect aide à analyser l’existant, identifier les axes d’amélioration et accompagner les décisions techniques.",
    },
    {
        id: 4,
        imageSrc: "/images/services/sur-mesure.png",
        imageAlt: "Illustration sur-mesure",
        imageLeft: true,
        description:
            "Des développements ciblés peuvent être mis en place pour répondre à des besoins métier spécifiques.",
    },
    {
        id: 5,
        imageSrc: "/images/services/transparence.png",
        imageAlt: "Illustration transparence",
        imageLeft: false,
        description:
            "Un suivi clair permet de mieux visualiser l’activité, les tickets et l’avancement des actions en cours.",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-14 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                        Services
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                        Des services structurés pour répondre à vos besoins numériques.
                    </h1>

                    <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                    <p className="text-lg leading-8 text-[var(--color-text-soft)]">
                        Codefect accompagne les TPE et PME avec des services organisés
                        autour de l’infrastructure, de la cybersécurité, du conseil, du
                        sur-mesure et de la transparence de suivi.
                    </p>
                </div>
            </div>

            <div>
                {services.map((categorie) => {
                    const illustration = servicesIllustrations.find(
                        (item) => item.id === categorie.id
                    );

                    if (!illustration) {
                        return null;
                    }

                    return (
                        <ServiceFeatureSection
                            key={categorie.id}
                            categorie={categorie}
                            imageSrc={illustration.imageSrc}
                            imageAlt={illustration.imageAlt}
                            imageLeft={illustration.imageLeft}
                            description={illustration.description}
                        />
                    );
                })}
            </div>

            <div className="mx-auto max-w-7xl px-6 pb-20 pt-8">
                <div className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] p-8 shadow-sm md:p-10">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                        Besoin spécifique
                    </p>

                    <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                        Vous avez un besoin particulier lié à votre activité ?
                    </h2>

                    <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                    <p className="mb-8 max-w-3xl text-lg leading-8 text-[var(--color-text-soft)]">
                        Chaque entreprise a son contexte, ses priorités et ses contraintes.
                        Codefect vous accompagne avec une approche adaptée à votre
                        environnement et à vos objectifs.
                    </p>

                    <a
                        href="/contact"
                        className="inline-block rounded-md bg-[var(--color-accent-gold)] px-6 py-3 font-semibold text-[var(--color-bg-dark)] transition hover:bg-[var(--color-accent-gold-strong)]"
                    >
                        Nous contacter
                    </a>
                </div>
            </div>
        </section>
    );
}