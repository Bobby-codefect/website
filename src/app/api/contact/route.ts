import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types/contact";
import { validateContactForm } from "@/lib/contact/contact-validation";

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

        return NextResponse.json(
            { message: "Demande reçue avec succès." },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { message: "Erreur lors du traitement de la demande." },
            { status: 500 }
        );
    }
}