import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types/contact";
import { validateContactForm } from "@/lib/contact/contact-validation";
import { verifyCaptcha } from "@/lib/contact/verify-captcha";
import { sendContactEmail } from "@/lib/contact/send-email";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";

export async function POST(request: Request) {
    try {
        /**
         * 1. Récupération de l'adresse IP du client.
         */
        const clientIp = getClientIp(request);

        /**
         * 2. Vérification de la limite de requêtes.
         * Si trop de tentatives sont détectées, la requête est bloquée.
         */
        const rateLimitResult = checkRateLimit(clientIp);

        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                {
                    message:
                        "Trop de tentatives ont été effectuées. Merci de réessayer plus tard.",
                },
                {
                    status: 429,
                    headers: {
                        "Retry-After": String(
                            Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)
                        ),
                    },
                }
            );
        }

        /**
         * 3. Lecture des données envoyées par le formulaire.
         */
        const body: ContactFormData = await request.json();

        /**
         * 4. Validation des champs du formulaire.
         */
        const validationError = validateContactForm(body);

        if (validationError) {
            return NextResponse.json(
                { message: validationError },
                { status: 400 }
            );
        }

        /**
         * 5. Vérification du captcha pour filtrer les soumissions automatiques.
         */
        const isCaptchaValid = await verifyCaptcha(body.captchaToken);

        if (!isCaptchaValid) {
            return NextResponse.json(
                { message: "La vérification anti-spam a échoué." },
                { status: 400 }
            );
        }

        /**
         * 6. Envoi de l'email avec nettoyage des espaces inutiles.
         */
        await sendContactEmail({
            nom: body.nom.trim(),
            prenom: body.prenom.trim(),
            societe: body.societe.trim(),
            email: body.email.trim(),
            telephone: body.telephone.trim(),
            message: body.message.trim(),
        });

        /**
         * 7. Réponse de succès.
         */
        return NextResponse.json(
            {
                message:
                    "Votre message a bien été envoyé. Nous vous répondrons dès que possible.",
            },
            { status: 200 }
        );
    } catch {
        /**
         * 8. Gestion des erreurs serveur.
         */
        return NextResponse.json(
            { message: "Erreur lors de l’envoi du message." },
            { status: 500 }
        );
    }
}