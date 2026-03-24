import ContactForm from "@/components/contact/ContactForm";

export default function ContactSection() {
    return (
        <section className="mx-auto max-w-3xl px-4 py-10">
            <h1 className="mb-4 text-3xl font-bold">Contact</h1>
            <p className="mb-8 text-gray-600">
                Vous avez un besoin, une question ou un projet ? Contactez Codefect via
                le formulaire ci-dessous.
            </p>

            <ContactForm />
        </section>
    );
}