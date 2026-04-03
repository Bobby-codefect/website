"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const liensNavigation = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--color-accent-blue)] bg-[var(--color-bg-dark)]/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="flex items-center"
                    aria-label="Retour à l'accueil"
                >
                    <Image
                        src="/logo-codefect-header.png"
                        alt="Logo Codefect"
                        width={260}
                        height={64}
                        className="h-auto w-[225px] md:w-[280px]"
                        priority
                    />
                </Link>

                <nav aria-label="Navigation principale" className="hidden md:block">
                    <ul className="flex items-center gap-10">
                        {liensNavigation.map((lien) => {
                            const isActive = pathname === lien.href;

                            return (
                                <li key={lien.href}>
                                    <Link
                                        href={lien.href}
                                        className={`text-lg font-medium transition ${
                                            isActive
                                                ? "text-white underline underline-offset-8 decoration-[var(--color-accent-gold-strong)]"
                                                : "text-[var(--color-header-text)] hover:text-white"
                                        }`}
                                    >
                                        {lien.label}
                                    </Link>
                                </li>
                            );
                        })}
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