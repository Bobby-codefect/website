"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navigationLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
];

const serviceLinks = [
    { href: "/services/infrastructure", label: "Infrastructure" },
    { href: "/services/cybersecurite", label: "Cybersécurité" },
    { href: "/services/sur-mesure-automatisation", label: "Sur-Mesure et Automatisation" },
    { href: "/services/informatique-responsable", label: "Informatique responsable" },
];

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    function toggleMobileMenu() {
        setIsMobileMenuOpen((prev) => !prev);
    }

    function closeMobileMenu() {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
    }

    function toggleMobileServicesMenu() {
        setIsMobileServicesOpen((prev) => !prev);
    }

    function isServicesActive() {
        return (
            pathname === "/services" ||
            pathname.startsWith("/services/infrastructure") ||
            pathname.startsWith("/services/cybersecurite")
        );
    }

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--color-accent-blue)] bg-[var(--color-bg-dark)]/95 backdrop-blur">
            
            {/* Wrapper principal */}
            <div className="flex items-center justify-between py-4">

                {/* LOGO collé à gauche */}
                <div className="pl-3">
                    <Link href="/" onClick={closeMobileMenu}>
                        <Image
                            src="/logo-codefect-header.png"
                            alt="Logo Codefect"
                            width={260}
                            height={64}
                            className="h-auto w-[150px] md:w-[205px]"
                            priority
                        />
                    </Link>
                </div>

                {/* NAV + CTA poussés à droite */}
                <div className="flex items-center justify-end pr-6">
                    
                    {/* Desktop nav */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-10">
                            {navigationLinks.map((link) => {
                                const isActive =
                                    link.href === "/services"
                                        ? isServicesActive()
                                        : pathname === link.href;

                                if (link.href === "/services") {
                                    return (
                                        <li key={link.href} className="group relative">
                                            <Link
                                                href={link.href}
                                                className={`flex items-center gap-2 text-lg font-medium transition ${
                                                    isActive
                                                        ? "text-white"
                                                        : "text-[var(--color-header-text)] hover:text-white"
                                                }`}
                                            >
                                                {link.label}
                                                <ChevronDown className="h-4 w-4" />
                                            </Link>

                                            <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-light)] p-3 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                                                <ul className="space-y-2">
                                                    {serviceLinks.map((serviceLink) => {
                                                        const isSubActive =
                                                            pathname === serviceLink.href;

                                                        return (
                                                            <li key={serviceLink.href}>
                                                                <Link
                                                                    href={serviceLink.href}
                                                                    className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                                                                        isSubActive
                                                                            ? "bg-[var(--color-bg-dark)] text-white"
                                                                            : "text-[var(--color-text-soft)] hover:bg-[var(--color-accent-blue)] hover:text-white"
                                                                    }`}
                                                                >
                                                                    {serviceLink.label}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </li>
                                    );
                                }

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

                    {/* CTA */}
                    <div className="hidden md:block ml-8">
                        <Link
                            href="/contact"
                            className="rounded-md bg-[var(--color-accent-gold-strong)] px-5 py-2.5 font-semibold text-[var(--color-bg-dark)] transition hover:bg-[var(--color-accent-gold)]"
                        >
                            Nous contacter
                        </Link>
                    </div>

                    {/* Burger */}
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="ml-4 rounded-md border border-[var(--color-accent-blue)] p-2 text-white transition hover:bg-[var(--color-surface-dark)] md:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="border-t border-[var(--color-accent-blue)] bg-[var(--color-bg-dark)] md:hidden">
                    <nav className="mx-auto max-w-7xl px-6 py-6">
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" onClick={closeMobileMenu}>
                                    Accueil
                                </Link>
                            </li>

                            <li>
                                <div className="flex items-center justify-between">
                                    <Link href="/services" onClick={closeMobileMenu}>
                                        Services
                                    </Link>

                                    <button onClick={toggleMobileServicesMenu}>
                                        <ChevronDown />
                                    </button>
                                </div>

                                {isMobileServicesOpen && (
                                    <ul className="mt-3 space-y-3 pl-4">
                                        {serviceLinks.map((serviceLink) => (
                                            <li key={serviceLink.href}>
                                                <Link
                                                    href={serviceLink.href}
                                                    onClick={closeMobileMenu}
                                                >
                                                    {serviceLink.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            <li>
                                <Link href="/contact" onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                                className="inline-block rounded-md bg-[var(--color-accent-gold-strong)] px-5 py-2.5 font-semibold text-[var(--color-bg-dark)]"
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