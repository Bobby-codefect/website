import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types/contact";

function isEmailValid(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
    try {
        const body: ContactFormData = await request.json();

        const { nom, email, message } = body;

        if (!nom || !email || !message) {
            return NextResponse.json(
                { message: "Tous les champs sont obligatoires." },
                { status: 400 }
            );
        }

        if (!isEmailValid(email)) {
            return NextResponse.json(
                { message: "Veuillez saisir une adresse email valide." },
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