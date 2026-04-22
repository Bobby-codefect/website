import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

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

                <div className="columns-1 gap-8 xl:columns-2">
                    {services.map((categorie) => (
                        <ServiceCard key={categorie.id} categorie={categorie} />
                    ))}
                </div>

                <div className="mt-20 rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] p-8 shadow-sm md:p-10">
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