import type { ContactFormData } from "@/types/contact";

const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 1000;

export function isEmailValid(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isPhoneValid(telephone: string) {
    const cleanedPhone = telephone.replace(/\D/g, "");
    return cleanedPhone.length >= 8 && cleanedPhone.length <= 15;
}

export function validateContactForm(data: ContactFormData) {
    const nom = data.nom.trim();
    const prenom = data.prenom.trim();
    const societe = data.societe.trim();
    const email = data.email.trim();
    const telephone = data.telephone.trim();
    const message = data.message.trim();
    const captchaToken = data.captchaToken.trim();

    if (!nom || !prenom || !societe || !email || !telephone || !message) {
        return "Tous les champs sont obligatoires.";
    }

    if (!isEmailValid(email)) {
        return "Veuillez saisir une adresse email valide.";
    }

    if (!isPhoneValid(telephone)) {
        return "Veuillez saisir un numéro de téléphone valide.";
    }

    if (message.length < MESSAGE_MIN_LENGTH) {
        return "Le message doit contenir au moins 10 caractères.";
    }

    if (message.length > MESSAGE_MAX_LENGTH) {
        return "Le message ne doit pas dépasser 1000 caractères.";
    }

    if (!captchaToken) {
        return "Veuillez valider le captcha.";
    }

    return null;
}