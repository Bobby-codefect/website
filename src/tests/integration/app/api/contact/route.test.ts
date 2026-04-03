import { describe, expect, it, vi, beforeEach } from "vitest";
import { POST } from "@/app/api/contact/route";
import { verifyCaptcha } from "@/lib/contact/verify-captcha";
import { sendContactEmail } from "@/lib/contact/send-email";

// On simule les dépendances externes de la route API.
// Ici, on ne veut pas appeler le vrai service Turnstile
// ni le vrai service Brevo pendant le test.
vi.mock("@/lib/contact/verify-captcha", () => ({
    verifyCaptcha: vi.fn(),
}));

vi.mock("@/lib/contact/send-email", () => ({
    sendContactEmail: vi.fn(),
}));

describe("POST /api/contact", () => {
    beforeEach(() => {
        // On remet les mocks à zéro avant chaque test
        // pour éviter qu'un test n'influence le suivant.
        vi.clearAllMocks();
    });

    it("retourne 400 si les champs obligatoires sont absents", async () => {
        // On construit une fausse requête HTTP POST avec un body JSON invalide.
        const request = new Request("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: "",
                email: "",
                message: "",
                captchaToken: "",
            }),
        });

        // On appelle directement la fonction POST de la route.
        const response = await POST(request);

        // On lit le contenu JSON renvoyé par la route.
        const data = await response.json();

        // On vérifie que la route renvoie bien une erreur 400.
        expect(response.status).toBe(400);

        // On vérifie que le message d'erreur est le bon.
        expect(data.message).toBe("Tous les champs sont obligatoires.");

        // On vérifie que le captcha n'est même pas testé
        // car la validation des champs échoue avant.
        expect(verifyCaptcha).not.toHaveBeenCalled();

        // On vérifie aussi qu'aucun email n'est envoyé.
        expect(sendContactEmail).not.toHaveBeenCalled();
    });

    it("retourne 400 si le captcha est invalide", async () => {
        // On dit au mock verifyCaptcha de répondre false.
        vi.mocked(verifyCaptcha).mockResolvedValue(false);

        const request = new Request("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: "Jean",
                email: "jean@test.com",
                message: "Bonjour, je souhaite vous contacter.",
                captchaToken: "fake-token",
            }),
        });

        const response = await POST(request);
        const data = await response.json();

        // La route doit refuser la requête car le captcha échoue.
        expect(response.status).toBe(400);
        expect(data.message).toBe("La vérification anti-spam a échoué.");

        // On vérifie que le captcha a bien été testé avec le token reçu.
        expect(verifyCaptcha).toHaveBeenCalledWith("fake-token");

        // Comme le captcha échoue, l'envoi d'email ne doit pas se produire.
        expect(sendContactEmail).not.toHaveBeenCalled();
    });

    it("retourne 200 si le formulaire est valide et le captcha correct", async () => {
        // On simule un captcha valide.
        vi.mocked(verifyCaptcha).mockResolvedValue(true);

        // On simule un envoi Brevo réussi.
        vi.mocked(sendContactEmail).mockResolvedValue({
            messageId: "fake-message-id",
        });

        const request = new Request("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: "Jean",
                email: "jean@test.com",
                message: "Bonjour, je souhaite vous contacter.",
                captchaToken: "fake-token",
            }),
        });

        const response = await POST(request);
        const data = await response.json();

        // La route doit renvoyer un succès.
        expect(response.status).toBe(200);
        expect(data.message).toBe("Votre message a bien été envoyé. Nous vous répondrons dès que possible.");

        // On vérifie que le captcha a bien été vérifié.
        expect(verifyCaptcha).toHaveBeenCalledWith("fake-token");

        // On vérifie que l'envoi d'email a bien été demandé
        // avec les bonnes données nettoyées.
        expect(sendContactEmail).toHaveBeenCalledWith({
            nom: "Jean",
            email: "jean@test.com",
            message: "Bonjour, je souhaite vous contacter.",
        });
    });

    it("retourne 400 si l'email est invalide", async () => {
        // On construit une requête avec un email invalide.
        const request = new Request("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: "Jean",
                email: "test",
                message: "Bonjour, je souhaite vous contacter.",
                captchaToken: "fake-token",
            }),
        });

        // On appelle la route API.
        const response = await POST(request);

        // On lit la réponse JSON.
        const data = await response.json();

        // La route doit refuser la requête.
        expect(response.status).toBe(400);

        // On vérifie le message d'erreur attendu.
        expect(data.message).toBe("Veuillez saisir une adresse email valide.");

        // Comme la validation échoue avant le captcha,
        // le captcha ne doit pas être vérifié.
        expect(verifyCaptcha).not.toHaveBeenCalled();

        // Aucun email ne doit être envoyé.
        expect(sendContactEmail).not.toHaveBeenCalled();
    });
});