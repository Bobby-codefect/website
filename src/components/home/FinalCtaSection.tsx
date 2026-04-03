import Link from "next/link";
import { homeContent } from "@/data/site-content";

export default function FinalCtaSection() {
    const { titre, texte, boutonPrincipal, boutonSecondaire } =
        homeContent.ctaFinal;

    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 pb-20">
                <div className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-surface-light)] p-8 shadow-sm md:p-12">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                            Passons à l’action
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            {titre}
                        </h2>

                        <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                        <p className="mb-8 text-lg leading-8 text-[var(--color-text-soft)]">
                            {texte}
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="rounded-md bg-[var(--color-accent-gold)] px-6 py-3 text-center font-semibold text-[var(--color-bg-dark)] transition hover:bg-[var(--color-accent-gold-strong)]"
                            >
                                {boutonPrincipal}
                            </Link>

                            <Link
                                href="/services"
                                className="rounded-md border border-[var(--color-surface-dark)] px-6 py-3 text-center font-semibold text-[var(--color-text-dark)] transition hover:bg-[var(--color-bg-light)]"
                            >
                                {boutonSecondaire}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}