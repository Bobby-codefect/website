import type { ContactFormData } from "@/types/contact";

const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 1000;

export function isEmailValid(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactForm(data: ContactFormData) {
    const nom = data.nom.trim();
    const email = data.email.trim();
    const message = data.message.trim();

    if (!nom || !email || !message) {
        return "Tous les champs sont obligatoires.";
    }

    if (!isEmailValid(email)) {
        return "Veuillez saisir une adresse email valide.";
    }

    if (message.length < MESSAGE_MIN_LENGTH) {
        return "Le message doit contenir au moins 10 caractères.";
    }

    if (message.length > MESSAGE_MAX_LENGTH) {
        return "Le message ne doit pas dépasser 1000 caractères.";
    }

    if (!data.captchaToken.trim()) {
        return "Veuillez valider le captcha.";
    }

    return null;
}