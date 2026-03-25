import type { ContactFormData } from "@/types/contact";

export function isEmailValid(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactForm(data: ContactFormData) {
    if (!data.nom || !data.email || !data.message) {
        return "Tous les champs sont obligatoires.";
    }

    if (!isEmailValid(data.email)) {
        return "Veuillez saisir une adresse email valide.";
    }

    return null;
}