import Link from "next/link";
import FooterWave from "@/components/layout/FooterWave";

const liensNavigation = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <>
            <FooterWave />

            <footer className="relative z-10 bg-[var(--color-bg-dark)] text-white lg:-mt-28 xl:-mt-48">
                <div className="mx-auto max-w-7xl px-6 pt-12 pb-16 lg:pt-16 xl:pt-10">
                    <div className="grid gap-7 md:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Codefect</h2>

                            <p className="max-w-2xl leading-7 text-(--color-footer-text)">
                                Codefect accompagne les TPE et PME dans l’optimisation, la
                                sécurisation et l’évolution de leurs outils numériques avec une
                                approche adaptée à leurs besoins réels.
                            </p>
                        </div>

                        <div>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-accent-gold-strong)">
                                Navigation
                            </p>

                            <ul className="space-y-3">
                                {liensNavigation.map((lien) => (
                                    <li key={lien.href}>
                                        <Link
                                            href={lien.href}
                                            className="text-(--color-footer-text) transition hover:text-white"
                                        >
                                            {lien.label}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        href="/mentions-legales"
                                        className="text-(--color-footer-text) transition hover:text-white"
                                    >
                                        Mentions légales
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/politique-confidentialite"
                                        className="text-(--color-footer-text) transition hover:text-white"
                                    >
                                        Politique de confidentialité
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-(--color-accent-blue) pt-6">
                        <p className="text-sm text-(--color-footer-text)">
                            © 2026 Codefect. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}