import { homeContent } from "@/data/site-content";
import HeroWave from "@/components/home/HeroWave";

export default function HeroSection() {
    const { badge, titre, description, boutonPrincipal, boutonSecondaire } =
        homeContent.hero;

    return (
        <>
            <section className="bg-[var(--color-bg-dark)] text-white">
                <div className="mx-auto flex min-h-[58vh] max-w-7xl items-center px-6 py-12">
                    <div className="max-w-3xl animate-[heroFadeUp_0.9s_ease-out_both]">
                        <p className="mb-4 inline-flex rounded-full border border-[var(--color-accent-blue)] bg-[var(--color-surface-dark)] px-4 py-2 text-sm font-medium text-[#d7f3ff]">
                            {badge}
                        </p>

                        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                            {titre}
                        </h1>

                        <p className="mb-8 max-w-2xl text-lg leading-8 text-var(--color-border-soft)]">
                            {description}
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <a
                                href="/contact"
                                className="rounded-md bg-[var(--color-accent-gold-strong)] px-6 py-3 text-center font-semibold text-[var(--color-bg-dark)] transition hover:bg-[var(--color-accent-gold)]"
                            >
                                {boutonPrincipal}
                            </a>

                            <a
                                href="/services"
                                className="rounded-md border border-[var(--color-border-soft)] px-6 py-3 text-center font-semibold text-white transition hover:bg-[var(--color-surface-dark)]"
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