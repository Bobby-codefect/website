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
        // La route attend maintenant :
        // nom, prenom, societe, email, telephone, message, captchaToken
        // Donc on fournit ici des champs vides pour vérifier que
        // la validation serveur refuse bien la requête.
        const request = new Request("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: "",
                prenom: "",
                societe: "",
                email: "",
                telephone: "",
                message: "",
                captchaToken: "",
            }),
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(400);
        expect(data.message).toBe("Tous les champs sont obligatoires.");

        // Le captcha n'est pas testé car la validation des champs
        // échoue avant.
        expect(verifyCaptcha).not.toHaveBeenCalled();

        // Aucun email ne doit être envoyé.
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
                nom: "Dupont",
                prenom: "Jean",
                societe: "Codefect",
                email: "jean@test.com",
                telephone: "06 12 34 56 78",
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
                nom: "Dupont",
                prenom: "Jean",
                societe: "Codefect",
                email: "jean@test.com",
                telephone: "06 12 34 56 78",
                message: "Bonjour, je souhaite vous contacter.",
                captchaToken: "fake-token",
            }),
        });

        const response = await POST(request);
        const data = await response.json();

        // La route doit renvoyer un succès.
        expect(response.status).toBe(200);
        expect(data.message).toBe(
            "Votre message a bien été envoyé. Nous vous répondrons dès que possible."
        );

        // On vérifie que le captcha a bien été vérifié.
        expect(verifyCaptcha).toHaveBeenCalledWith("fake-token");

        // On vérifie que l'envoi d'email a bien été demandé
        // avec les nouvelles données attendues par la fonction.
        expect(sendContactEmail).toHaveBeenCalledWith({
            nom: "Dupont",
            prenom: "Jean",
            societe: "Codefect",
            email: "jean@test.com",
            telephone: "06 12 34 56 78",
            message: "Bonjour, je souhaite vous contacter.",
        });
    });

    it("retourne 400 si l'email est invalide", async () => {
        // On construit une requête avec un email invalide.
        // Les autres champs obligatoires sont bien remplis,
        // sinon on testerait autre chose que l'email.
        const request = new Request("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: "Dupont",
                prenom: "Jean",
                societe: "Codefect",
                email: "test",
                telephone: "06 12 34 56 78",
                message: "Bonjour, je souhaite vous contacter.",
                captchaToken: "fake-token",
            }),
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(400);
        expect(data.message).toBe("Veuillez saisir une adresse email valide.");

        // Comme la validation échoue avant le captcha,
        // le captcha ne doit pas être vérifié.
        expect(verifyCaptcha).not.toHaveBeenCalled();

        // Aucun email ne doit être envoyé.
        expect(sendContactEmail).not.toHaveBeenCalled();
    });

    it("retourne 400 si le téléphone est invalide", async () => {
        // Nouveau cas utile maintenant que le téléphone est obligatoire :
        // on vérifie que la validation serveur bloque un numéro invalide.
        const request = new Request("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: "Dupont",
                prenom: "Jean",
                societe: "Codefect",
                email: "jean@test.com",
                telephone: "12",
                message: "Bonjour, je souhaite vous contacter.",
                captchaToken: "fake-token",
            }),
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(400);
        expect(data.message).toBe("Veuillez saisir un numéro de téléphone valide.");

        // La validation échoue avant le captcha.
        expect(verifyCaptcha).not.toHaveBeenCalled();
        expect(sendContactEmail).not.toHaveBeenCalled();
    });
});