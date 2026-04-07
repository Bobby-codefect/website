import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types/contact";
import { validateContactForm } from "@/lib/contact/contact-validation";
import { verifyCaptcha } from "@/lib/contact/verify-captcha";
import { sendContactEmail } from "@/lib/contact/send-email";

export async function POST(request: Request) {
    try {
        const body: ContactFormData = await request.json();

        const validationError = validateContactForm(body);

        if (validationError) {
            return NextResponse.json(
                { message: validationError },
                { status: 400 }
            );
        }

        const isCaptchaValid = await verifyCaptcha(body.captchaToken);

        if (!isCaptchaValid) {
            return NextResponse.json(
                { message: "La vérification anti-spam a échoué." },
                { status: 400 }
            );
        }

        await sendContactEmail({
            nom: body.nom.trim(),
            prenom: body.prenom.trim(),
            societe: body.societe.trim(),
            email: body.email.trim(),
            telephone: body.telephone.trim(),
            message: body.message.trim(),
        });

        return NextResponse.json(
            {
                message:
                    "Votre message a bien été envoyé. Nous vous répondrons dès que possible.",
            },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { message: "Erreur lors de l’envoi du message." },
            { status: 500 }
        );
    }
}