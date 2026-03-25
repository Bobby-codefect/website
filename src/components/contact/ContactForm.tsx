"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types/contact";
import { validateContactForm } from "@/lib/contact/contact-validation";

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        nom: "",
        email: "",
        message: "",
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

            setMessageSucces(data.message || "Message envoyé avec succès.");
            setFormData({
                nom: "",
                email: "",
                message: "",
            });
        } catch {
            setMessageErreur("Impossible de contacter le serveur.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg border p-6 shadow-sm"
        >
            <div>
                <label htmlFor="nom" className="mb-2 block text-sm font-medium">
                    Nom
                </label>
                <input
                    id="nom"
                    name="nom"
                    type="text"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="Votre nom"
                />
            </div>

            <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="votre@email.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="Décrivez votre besoin"
                />
            </div>

            {messageErreur && (
                <p className="text-sm font-medium text-red-600">{messageErreur}</p>
            )}

            {messageSucces && (
                <p className="text-sm font-medium text-green-600">{messageSucces}</p>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="rounded-md border px-4 py-2 font-medium disabled:opacity-50"
            >
                {isLoading ? "Envoi en cours..." : "Envoyer"}
            </button>
        </form>
    );
}