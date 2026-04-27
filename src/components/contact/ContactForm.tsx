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
        prenom: "",
        societe: "",
        email: "",
        telephone: "",
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

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
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
                prenom: "",
                societe: "",
                email: "",
                telephone: "",
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
            className="rounded-2xl border border-(--color-border-soft) bg-(--color-card-bg) p-8 shadow-sm md:p-10"
        >
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="nom"
                        className="mb-2 block text-base font-semibold text-(--color-text-soft)"
                    >
                        Nom *
                    </label>
                    <input
                        id="nom"
                        name="nom"
                        type="text"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-(--color-border-soft) bg-(--color-input-bg) px-4 py-3 text-(--color-text-dark) outline-none transition placeholder:text-[#7e8b99] focus:border-(--color-accent-blue)"
                        placeholder="Votre nom"
                    />
                </div>

                <div>
                    <label
                        htmlFor="prenom"
                        className="mb-2 block text-base font-semibold text-(--color-text-soft)"
                    >
                        Prénom *
                    </label>
                    <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-(--color-border-soft) bg-(--color-input-bg) px-4 py-3 text-(--color-text-dark) outline-none transition placeholder:text-[#7e8b99] focus:border-(--color-accent-blue)"
                        placeholder="Votre prénom"
                    />
                </div>

                <div>
                    <label
                        htmlFor="societe"
                        className="mb-2 block text-base font-semibold text-(--color-text-soft)"
                    >
                        Société *
                    </label>
                    <input
                        id="societe"
                        name="societe"
                        type="text"
                        value={formData.societe}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-(--color-border-soft) bg-(--color-input-bg) px-4 py-3 text-(--color-text-dark) outline-none transition placeholder:text-[#7e8b99] focus:border-(--color-accent-blue)"
                        placeholder="Votre société"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-base font-semibold text-(--color-text-soft)"
                    >
                        Mail *
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-(--color-border-soft) bg-(--color-input-bg) px-4 py-3 text-(--color-text-dark) outline-none transition placeholder:text-[#7e8b99] focus:border-(--color-accent-blue)"
                        placeholder="votre@email.com"
                    />
                </div>

                <div className="md:col-span-2">
                    <label
                        htmlFor="telephone"
                        className="mb-2 block text-base font-semibold text-(--color-text-soft)"
                    >
                        Téléphone *
                    </label>
                    <input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-(--color-border-soft) bg-(--color-input-bg) px-4 py-3 text-(--color-text-dark) outline-none transition placeholder:text-[#7e8b99] focus:border-(--color-accent-blue)"
                        placeholder="Votre numéro de téléphone"
                    />
                </div>
            </div>

            <div className="mt-6">
                <label
                    htmlFor="message"
                    className="mb-2 block text-base font-semibold text-(--color-text-soft)"
                >
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-(--color-border-soft) bg-(--color-input-bg) px-4 py-3 text-(--color-text-dark) outline-none transition placeholder:text-[#7e8b99] focus:border-(--color-accent-blue)"
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

            <div className="mt-8">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text---color-accent-blue)">
                    Vérification anti-spam
                </p>

                <div className="max-w-full">
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
                    <p className="mt-4 text-sm text-(--color-text-soft)">
                        Veuillez valider la vérification anti-spam avant l’envoi.
                    </p>
                )}
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-7 text-(--color-text-soft)">
                Les informations recueillies via ce formulaire sont traitées par
                Codefect afin de répondre à votre demande de contact. Les champs
                nom, prénom, société, e-mail, téléphone et message sont
                obligatoires. Vous disposez de droits sur vos données et pouvez
                les exercer à l’adresse suivante : [E-mail RGPD]. Pour en savoir
                plus, consultez notre politique de confidentialité.
            </p>

            <div className="mt-6">
                <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="inline-block rounded-md bg-(--color-accent-gold) px-6 py-3 font-semibold text-(--color-bg-dark) transition hover:bg-(--color-accent-gold-strong) disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isLoading ? "Envoi en cours..." : "Envoyer"}
                </button>
            </div>
        </form>
    );
}