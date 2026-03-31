import Link from "next/link";
import FooterWave from "@/components/layout/FooterWave";

const liensNavigation = [
    { href: "/", label: "Accueil" },
    { href: "/prestations", label: "Prestations" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <>
            <FooterWave />

            <footer className="bg-[#17202a] text-white">
                <div className="mx-auto max-w-7xl px-6 py-8">
                    <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Codefect</h2>

                            <p className="max-w-2xl leading-7 text-[#b8c2cf]">
                                Codefect accompagne les TPE et PME dans l’optimisation, la
                                sécurisation et l’évolution de leurs outils numériques avec une
                                approche adaptée à leurs besoins réels.
                            </p>
                        </div>

                        <div>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e29e21]">
                                Navigation
                            </p>

                            <ul className="space-y-3">
                                {liensNavigation.map((lien) => (
                                    <li key={lien.href}>
                                        <Link
                                            href={lien.href}
                                            className="text-[#b8c2cf] transition hover:text-white"
                                        >
                                            {lien.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-[#1e6585] pt-6">
                        <p className="text-sm text-[#b8c2cf]">
                            © 2026 Codefect. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}