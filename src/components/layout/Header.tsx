import Image from "next/image";
import Link from "next/link";

const liensNavigation = [
    { href: "/", label: "Accueil" },
    { href: "/prestations", label: "Prestations" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[#1e6585] bg-[#17202a]/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
                        priority
                        className="w-[210px] h-auto md:w-[260px]"
                    />
                </Link>

                <nav aria-label="Navigation principale" className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {liensNavigation.map((lien) => (
                            <li key={lien.href}>
                                <Link
                                    href={lien.href}
                                    className="font-medium text-[#b8c2cf] transition hover:text-white"
                                >
                                    {lien.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Link
                    href="/contact"
                    className="rounded-md bg-[#be8620] px-5 py-2.5 font-semibold text-[#17202a] transition hover:bg-[#e29e21]"
                >
                    Nous contacter
                </Link>
            </div>
        </header>
    );
}