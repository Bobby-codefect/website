import Link from "next/link";
import { homeContent } from "@/data/site-content";

export default function FinalCtaSection() {
    const { titre, texte, boutonPrincipal, boutonSecondaire } =
        homeContent.ctaFinal;

    return (
        <section className="bg-[#f4f6f8] text-[#17202a]">
            <div className="mx-auto max-w-7xl px-6 pb-20">
                <div className="rounded-3xl border border-[#b8c2cf] bg-white p-8 shadow-sm md:p-12">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                            Passons à l’action
                        </p>

                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            {titre}
                        </h2>

                        <div className="mb-8 h-1.5 w-24 rounded-full bg-[#e29e21]" />

                        <p className="mb-8 text-lg leading-8 text-[#1b364f]">{texte}</p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="rounded-md bg-[#be8620] px-6 py-3 text-center font-semibold text-[#17202a] transition hover:bg-[#e29e21]"
                            >
                                {boutonPrincipal}
                            </Link>

                            <Link
                                href="/prestations"
                                className="rounded-md border border-[#1b364f] px-6 py-3 text-center font-semibold text-[#17202a] transition hover:bg-[#f4f6f8]"
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