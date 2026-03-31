"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { ContactFormData } from "@/types/contact";
import { validateContactForm } from "@/lib/contact/contact-validation";

const TurnstileWidget = dynamic(
    () => import("@/components/contact/TurnstileWidget"),
    { ssr: false }
);

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        nom: "",
        email: "",
        message: "",
        captchaToken: "",
    });

    const [messageSucces, setMessageSucces] = useState("");
    const [messageErreur, setMessageErreur] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        setMessageErreur("");
        setMessageSucces("");
    }

    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();

        setMessageSucces("");
        setMessageErreur("");

        const validationError = validateContactForm(formData);

        if (validationError) {
            setMessageErreur(validationError);
            return;
        }

        try {
            setIsLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setMessageErreur(data.message || "Une erreur est survenue.");
                return;
            }

            setMessageSucces(data.message || "Votre message a bien été envoyé.");
            setFormData({
                nom: "",
                email: "",
                message: "",
                captchaToken: "",
            });
        } catch {
            setMessageErreur("Impossible de contacter le serveur.");
        } finally {
            setIsLoading(false);
        }
    };

    const captchaValide = formData.captchaToken.trim() !== "";
    const isSubmitDisabled = isLoading || !captchaValide;

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-[#b8c2cf] bg-white p-8 shadow-sm md:p-10"
        >
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="nom"
                        className="mb-2 block text-sm font-medium text-[#1b364f]"
                    >
                        Nom
                    </label>
                    <input
                        id="nom"
                        name="nom"
                        type="text"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#b8c2cf] bg-white px-4 py-3 text-[#17202a] outline-none transition placeholder:text-[#7e8b99] focus:border-[#1e6585]"
                        placeholder="Votre nom"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[#1b364f]"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#b8c2cf] bg-white px-4 py-3 text-[#17202a] outline-none transition placeholder:text-[#7e8b99] focus:border-[#1e6585]"
                        placeholder="votre@email.com"
                    />
                </div>
            </div>

            <div className="mt-6">
                <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#1b364f]"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#b8c2cf] bg-white px-4 py-3 text-[#17202a] outline-none transition placeholder:text-[#7e8b99] focus:border-[#1e6585]"
                    placeholder="Décrivez votre besoin"
                />
            </div>

            {messageErreur && (
                <p className="mt-6 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {messageErreur}
                </p>
            )}

            {messageSucces && (
                <p className="mt-6 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    {messageSucces}
                </p>
            )}

            <div className="mt-8 rounded-2xl border border-[#b8c2cf] bg-[#f4f6f8] p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e6585]">
                    Vérification anti-spam
                </p>

                <TurnstileWidget
                    onSuccess={(token) =>
                        setFormData((previousData) => ({
                            ...previousData,
                            captchaToken: token,
                        }))
                    }
                    onExpire={() =>
                        setFormData((previousData) => ({
                            ...previousData,
                            captchaToken: "",
                        }))
                    }
                />

                {!captchaValide && (
                    <p className="mt-4 text-sm text-[#1b364f]">
                        Veuillez valider la vérification anti-spam avant l’envoi.
                    </p>
                )}
            </div>

            <div className="mt-8">
                <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="inline-block rounded-md bg-[#be8620] px-6 py-3 font-semibold text-[#17202a] transition hover:bg-[#e29e21] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isLoading ? "Envoi en cours..." : "Envoyer"}
                </button>
            </div>
        </form>
    );
}