import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ContactForm from "@/components/contact/ContactForm";

// On simule le composant Turnstile pour éviter de charger le vrai captcha
// pendant les tests unitaires.
// Ici, on fournit un faux bouton qui appelle onSuccess avec un faux token.
// Cela permet de débloquer le bouton "Envoyer" dans les tests.
vi.mock("@/components/contact/TurnstileWidget", () => ({
    default: function TurnstileWidget({
                                          onSuccess,
                                      }: {
        onSuccess: (token: string) => void;
    }) {
        return (
            <button type="button" onClick={() => onSuccess("fake-token")}>
                Valider le captcha simulé
            </button>
        );
    },
}));

describe("ContactForm", () => {
    it("affiche les champs principaux du formulaire", () => {
        render(<ContactForm />);

        expect(screen.getByLabelText(/^nom/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^prénom/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^société/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^téléphone/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^message/i)).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: "Envoyer" })
        ).toBeInTheDocument();
    });

    it("affiche une erreur si le formulaire est envoyé vide", async () => {
        render(<ContactForm />);

        fireEvent.click(
            screen.getByRole("button", { name: "Valider le captcha simulé" })
        );

        fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));

        expect(
            await screen.findByText("Tous les champs sont obligatoires.")
        ).toBeInTheDocument();
    });

    it("affiche une erreur si l'email saisi est invalide", async () => {
        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/^nom/i), {
            target: { value: "Dupont" },
        });

        fireEvent.change(screen.getByLabelText(/^prénom/i), {
            target: { value: "Paul" },
        });

        fireEvent.change(screen.getByLabelText(/^société/i), {
            target: { value: "Codefect" },
        });

        fireEvent.change(screen.getByLabelText(/^email/i), {
            target: { value: "test" },
        });

        fireEvent.change(screen.getByLabelText(/^téléphone/i), {
            target: { value: "06 12 34 56 78" },
        });

        fireEvent.change(screen.getByLabelText(/^message/i), {
            target: { value: "Bonjour, je souhaite vous contacter." },
        });

        fireEvent.click(
            screen.getByRole("button", { name: "Valider le captcha simulé" })
        );

        expect(
            screen.getByRole("button", { name: "Envoyer" })
        ).not.toBeDisabled();

        fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));

        expect(
            await screen.findByText("Veuillez saisir une adresse email valide.")
        ).toBeInTheDocument();
    });

    it("affiche une erreur si le message est trop court", async () => {
        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/^nom/i), {
            target: { value: "Dupont" },
        });

        fireEvent.change(screen.getByLabelText(/^prénom/i), {
            target: { value: "Paul" },
        });

        fireEvent.change(screen.getByLabelText(/^société/i), {
            target: { value: "Codefect" },
        });

        fireEvent.change(screen.getByLabelText(/^email/i), {
            target: { value: "Paul@test.com" },
        });

        fireEvent.change(screen.getByLabelText(/^téléphone/i), {
            target: { value: "06 12 34 56 78" },
        });

        fireEvent.change(screen.getByLabelText(/^message/i), {
            target: { value: "Bonjour" },
        });

        fireEvent.click(
            screen.getByRole("button", { name: "Valider le captcha simulé" })
        );

        expect(
            screen.getByRole("button", { name: "Envoyer" })
        ).not.toBeDisabled();

        fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));

        expect(
            await screen.findByText(/Le message doit contenir au moins 10 caractères/i)
        ).toBeInTheDocument();
    });

    it("affiche une erreur si le téléphone est invalide", async () => {
        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/^nom/i), {
            target: { value: "Dupont" },
        });

        fireEvent.change(screen.getByLabelText(/^prénom/i), {
            target: { value: "Paul" },
        });

        fireEvent.change(screen.getByLabelText(/^société/i), {
            target: { value: "Codefect" },
        });

        fireEvent.change(screen.getByLabelText(/^email/i), {
            target: { value: "Paul@test.com" },
        });

        fireEvent.change(screen.getByLabelText(/^téléphone/i), {
            target: { value: "12" },
        });

        fireEvent.change(screen.getByLabelText(/^message/i), {
            target: { value: "Bonjour, je souhaite vous contacter." },
        });

        fireEvent.click(
            screen.getByRole("button", { name: "Valider le captcha simulé" })
        );

        fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));

        expect(
            await screen.findByText("Veuillez saisir un numéro de téléphone valide.")
        ).toBeInTheDocument();
    });

    it("affiche un message de succès quand le formulaire est valide", async () => {
        const fetchMock = vi.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            json: async () => ({
                message:
                    "Votre message a bien été envoyé. Nous vous répondrons dès que possible.",
            }),
        } as Response);

        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/^nom/i), {
            target: { value: "Dupont" },
        });

        fireEvent.change(screen.getByLabelText(/^prénom/i), {
            target: { value: "Paul" },
        });

        fireEvent.change(screen.getByLabelText(/^société/i), {
            target: { value: "Codefect" },
        });

        fireEvent.change(screen.getByLabelText(/^email/i), {
            target: { value: "Paul@test.com" },
        });

        fireEvent.change(screen.getByLabelText(/^téléphone/i), {
            target: { value: "06 12 34 56 78" },
        });

        fireEvent.change(screen.getByLabelText(/^message/i), {
            target: { value: "Bonjour, je souhaite vous contacter." },
        });

        fireEvent.click(
            screen.getByRole("button", { name: "Valider le captcha simulé" })
        );

        expect(
            screen.getByRole("button", { name: "Envoyer" })
        ).not.toBeDisabled();

        fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));

        expect(
            await screen.findByText(
                "Votre message a bien été envoyé. Nous vous répondrons dès que possible."
            )
        ).toBeInTheDocument();

        expect(fetchMock).toHaveBeenCalledWith("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: "Dupont",
                prenom: "Paul",
                societe: "Codefect",
                email: "Paul@test.com",
                telephone: "06 12 34 56 78",
                message: "Bonjour, je souhaite vous contacter.",
                captchaToken: "fake-token",
            }),
        });

        expect(screen.getByLabelText(/^nom/i)).toHaveValue("");
        expect(screen.getByLabelText(/^prénom/i)).toHaveValue("");
        expect(screen.getByLabelText(/^société/i)).toHaveValue("");
        expect(screen.getByLabelText(/^email/i)).toHaveValue("");
        expect(screen.getByLabelText(/^téléphone/i)).toHaveValue("");
        expect(screen.getByLabelText(/^message/i)).toHaveValue("");

        fetchMock.mockRestore();
    });
});