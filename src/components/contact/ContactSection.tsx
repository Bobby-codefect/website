import ContactForm from "@/components/contact/ContactForm";

export default function ContactSection() {
    return (
        <section className="bg-[#f4f6f8] text-[#17202a]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-14 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                        Contact
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                        Échangeons autour de vos besoins numériques.
                    </h1>

                    <div className="mb-8 h-1.5 w-24 rounded-full bg-[#e29e21]" />

                    <p className="text-lg leading-8 text-[#1b364f]">
                        Vous avez un besoin, une question ou un projet ? Contactez Codefect
                        pour échanger sur votre contexte, vos contraintes et les solutions
                        les plus adaptées à votre activité.
                    </p>
                </div>

                <div className="max-w-5xl">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}