import Link from "next/link";

const liensNavigation = [
    { href: "/", label: "Accueil" },
    { href: "/prestations", label: "Prestations" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--color-accent-blue)] bg-[var(--color-bg-dark)]/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <Link
                    href="/"
                    className="flex items-center"
                    aria-label="Retour à l'accueil"
                >
                    <img
                        src="/logo-codefect-header.png"
                        alt="Logo Codefect"
                        className="h-auto w-[210px] md:w-[260px]"
                    />
                </Link>

                <nav aria-label="Navigation principale" className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {liensNavigation.map((lien) => (
                            <li key={lien.href}>
                                <Link
                                    href={lien.href}
                                    className="font-medium text-[var(--color-border-soft)] transition hover:text-white"
                                >
                                    {lien.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Link
                    href="/contact"
                    className="rounded-md bg-[var(--color-accent-gold)] px-5 py-2.5 font-semibold text-[var(--color-bg-dark)] transition hover:bg-[var(--color-accent-gold-strong)]"
                >
                    Nous contacter
                </Link>
            </div>
        </header>
    );
}