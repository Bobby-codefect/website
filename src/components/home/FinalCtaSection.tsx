import Link from "next/link";
import { homeContent } from "@/data/site-content";

export default function FinalCtaSection() {
    const { titre, texte, boutonPrincipal, boutonSecondaire } =
        homeContent.ctaFinal;

    return (
        <section className="bg-[#17202a] text-white">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="rounded-3xl border border-[#1e6585] bg-[#1b364f] p-8 md:p-12">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e29e21]">
                            Passons à l’action
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            {titre}
                        </h2>

                        <p className="mb-8 text-lg leading-8 text-[#b8c2cf]">{texte}</p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="rounded-md bg-[#be8620] px-6 py-3 text-center font-semibold text-[#17202a] transition hover:bg-[#e29e21]"
                            >
                                {boutonPrincipal}
                            </Link>

                            <Link
                                href="/prestations"
                                className="rounded-md border border-[#b8c2cf] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#17202a]"
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