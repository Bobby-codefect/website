"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function toggleMobileMenu() {
        setIsMobileMenuOpen((previousState) => !previousState);
    }

    function closeMobileMenu() {
        setIsMobileMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--color-accent-blue)] bg-[var(--color-bg-dark)]/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="flex items-center"
                    aria-label="Retour à l'accueil"
                    onClick={closeMobileMenu}
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
                        {navigationLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`text-lg font-medium transition ${
                                            isActive
                                                ? "text-white"
                                                : "text-[var(--color-header-text)] hover:text-white"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="rounded-md bg-[var(--color-accent-gold)] px-5 py-2.5 font-semibold text-[var(--color-bg-dark)] transition hover:bg-[var(--color-accent-gold-strong)]"
                    >
                        Nous contacter
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={toggleMobileMenu}
                    className="rounded-md border border-[var(--color-accent-blue)] p-2 text-white transition hover:bg-[var(--color-surface-dark)] md:hidden"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="border-t border-[var(--color-accent-blue)] bg-[var(--color-bg-dark)] md:hidden"
                >
                    <nav
                        aria-label="Navigation mobile"
                        className="mx-auto max-w-7xl px-6 py-6"
                    >
                        <ul className="space-y-4">
                            {navigationLinks.map((link) => {
                                const isActive = pathname === link.href;

                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={closeMobileMenu}
                                            className={`block text-lg font-medium transition ${
                                                isActive
                                                    ? "text-white"
                                                    : "text-[var(--color-header-text)] hover:text-white"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                                className="rounded-md border border-[var(--color-accent-blue)] p-2.5 text-white transition hover:bg-[var(--color-surface-dark)] md:hidden"
                            >
                                Nous contacter
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}