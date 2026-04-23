import Image from "next/image";
import type { CategorieService } from "@/data/services";

type ServiceFeatureSectionProps = {
    categorie: CategorieService;
    imageSrc: string;
    imageAlt: string;
    imageLeft?: boolean;
    description?: string;
};

export default function ServiceFeatureSection({
                                                  categorie,
                                                  imageSrc,
                                                  imageAlt,
                                                  imageLeft = false,
                                                  description,
                                              }: ServiceFeatureSectionProps) {
    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div
                className={`mx-auto grid max-w-7xl items-center gap-6 px-6 py-16 md:gap-8 md:py-20 ${
                    imageLeft ? "lg:grid-cols-[1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1fr]"
                }`}
            >
                <div className={imageLeft ? "lg:order-2" : ""}>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                        Services
                    </p>

                    <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                        {categorie.titre}
                    </h2>

                    <div className="mb-8 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                    {description ? (
                        <p className="mb-8 max-w-3xl text-lg leading-8 text-[var(--color-text-soft)]">
                            {description}
                        </p>
                    ) : null}

                    <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                        {categorie.blocs.map((bloc) => (
                            <div key={bloc.titre} className="flex items-start gap-3">
                                <span className="mt-1 text-xl leading-none text-green-500">
                                    ✓
                                </span>

                                <h3 className="text-lg leading-8 text-[var(--color-text-soft)]">
                                    {bloc.titre}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`flex justify-center ${imageLeft ? "lg:justify-start" : "lg:justify-end"}`}>
                    <div className="flex h-[220px] w-[320px] items-center justify-center">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={320}
                            height={220}
                            className="h-auto max-h-[220px] w-auto max-w-[320px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}