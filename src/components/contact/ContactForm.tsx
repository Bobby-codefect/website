"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types/contact";
import { validateContactForm } from "@/lib/contact/contact-validation";
import dynamic from "next/dynamic";

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
            className="space-y-8 rounded-2xl border border-[#1e6585] bg-[#1b364f] p-8 shadow-sm"
        >
            <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-1">
                    <label
                        htmlFor="nom"
                        className="mb-2 block text-sm font-medium text-[#d7f3ff]"
                    >
                        Nom
                    </label>
                    <input
                        id="nom"
                        name="nom"
                        type="text"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#1e6585] bg-[#17202a] px-4 py-3 text-white outline-none transition placeholder:text-[#7e8b99] focus:border-[#e29e21]"
                        placeholder="Votre nom"
                    />
                </div>

                <div className="md:col-span-1">
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[#d7f3ff]"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#1e6585] bg-[#17202a] px-4 py-3 text-white outline-none transition placeholder:text-[#7e8b99] focus:border-[#e29e21]"
                        placeholder="votre@email.com"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#d7f3ff]"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#1e6585] bg-[#17202a] px-4 py-3 text-white outline-none transition placeholder:text-[#7e8b99] focus:border-[#e29e21]"
                    placeholder="Décrivez votre besoin"
                />
            </div>

            {messageErreur && (
                <p className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-200">
                    {messageErreur}
                </p>
            )}

            {messageSucces && (
                <p className="rounded-xl border border-green-400/40 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-200">
                    {messageSucces}
                </p>
            )}

            <div className="space-y-3">
                <p className="text-sm font-medium text-[#d7f3ff]">
                    Vérification anti-spam
                </p>

                <div className="rounded-xl border border-[#1e6585] bg-[#17202a] p-4">
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
                </div>

                {!captchaValide && (
                    <p className="text-sm text-[#b8c2cf]">
                        Veuillez valider la vérification anti-spam avant l’envoi.
                    </p>
                )}
            </div>

            <div>
                <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="inline-flex rounded-md bg-[#be8620] px-6 py-3 font-semibold text-[#17202a] transition hover:bg-[#e29e21] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isLoading ? "Envoi en cours..." : "Envoyer"}
                </button>
            </div>
        </form>
    );
}