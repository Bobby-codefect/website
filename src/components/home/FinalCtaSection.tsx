import Link from "next/link";
import { homeContent } from "@/data/site-content";

export default function FinalCtaSection() {
    const { titre, texte, boutonPrincipal, boutonSecondaire } =
        homeContent.ctaFinal;

    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-7xl px-6 pb-24">
                <div className="group relative overflow-hidden rounded-2xl bg-[var(--color-bg-dark)] shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                    <div className="h-[3px] w-full bg-gradient-to-r from-[var(--color-accent-gold-strong)] via-[var(--color-accent-blue)] to-transparent" />

                    <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--color-accent-blue)] opacity-[0.05] transition-transform duration-700 group-hover:scale-125" />
                    <div className="pointer-events-none absolute -bottom-16 right-48 h-52 w-52 rounded-full bg-[var(--color-accent-gold-strong)] opacity-[0.04] transition-transform duration-700 group-hover:scale-110" />

                    <div className="relative grid gap-10 p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">

                        <div className="max-w-2xl">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent-blue)]">
                                Passons à l'action
                            </p>
                            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                                {titre}
                            </h2>
                            <div className="mb-8 h-[3px] w-12 rounded-full bg-[var(--color-accent-gold-strong)]" />
                            <p className="text-lg leading-8 text-[var(--color-text-soft)]">
                                {texte}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:min-w-[200px]">
                            <Link
                                href="/contact"
                                className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[var(--color-accent-gold-strong)] px-8 py-4 font-bold text-[var(--color-bg-dark)] transition-all duration-300 hover:bg-[var(--color-accent-gold)] hover:shadow-[0_8px_24px_rgba(190,134,32,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/10 transition-transform duration-500 group-hover/btn:translate-x-full" />
                                <span className="relative">{boutonPrincipal}</span>
                            </Link>

                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-8 py-4 font-semibold text-white/70 transition-all duration-300 hover:border-white/35 hover:text-white hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0"
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