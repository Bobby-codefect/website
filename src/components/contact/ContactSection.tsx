import ContactForm from "@/components/contact/ContactForm";

export default function ContactSection() {
    return (
        <section className="min-h-screen bg-[#17202a] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <header className="mb-14 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e29e21]">
                        Contact
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                        Échangeons autour de vos besoins numériques.
                    </h1>

                    <p className="text-lg leading-8 text-[#b8c2cf]">
                        Vous avez un besoin, une question ou un projet ? Contactez Codefect
                        pour échanger sur votre contexte, vos contraintes et les solutions
                        les plus adaptées à votre activité.
                    </p>
                </header>

                <div className="max-w-4xl">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}