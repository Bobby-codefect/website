import { homeContent } from "@/data/site-content";
import HeroWave from "@/components/home/HeroWave";

export default function HeroSection() {
    const { badge, titre, description, boutonPrincipal, boutonSecondaire } =
        homeContent.hero;

    return (
        <>
            <section className="bg-[#17202a] text-white">
                <div className="mx-auto flex min-h-[58vh] max-w-7xl items-center px-6 py-12">
                    <div className="max-w-3xl animate-[heroFadeUp_0.9s_ease-out_both]">
                        <p className="mb-4 inline-flex rounded-full border border-[#1e6585] bg-[#1b364f] px-4 py-2 text-sm font-medium text-[#d7f3ff]">
                            {badge}
                        </p>

                        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                            {titre}
                        </h1>

                        <p className="mb-8 max-w-2xl text-lg leading-8 text-[#b8c2cf]">
                            {description}
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <a
                                href="/contact"
                                className="rounded-md bg-[#be8620] px-6 py-3 text-center font-semibold text-[#17202a] transition hover:bg-[#e29e21]"
                            >
                                {boutonPrincipal}
                            </a>

                            <a
                                href="/prestations"
                                className="rounded-md border border-[#b8c2cf] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#1b364f]"
                            >
                                {boutonSecondaire}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="-mt-8 md:-mt-12">
                <HeroWave />
            </div>

        </>
    );
}