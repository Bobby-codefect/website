"use client";

import { useState } from "react";

type ContactFormData = {
    nom: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        nom: "",
        email: "",
        message: "",
    });

    const [messageSucces, setMessageSucces] = useState("");
    const [messageErreur, setMessageErreur] = useState("");

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    }

    function handleSubmit(event: React.SubmitEvent) {
        event.preventDefault();

        setMessageSucces("");
        setMessageErreur("");

        if (!formData.nom || !formData.email || !formData.message) {
            setMessageErreur("Tous les champs sont obligatoires.");
            return;
        }

        setMessageSucces("Le formulaire est prêt à être envoyé.");
        console.log("Données du formulaire :", formData);
    }

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
                className="rounded-md border px-4 py-2 font-medium"
            >
                Envoyer
            </button>
        </form>
    );
}