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
        // render() sert à afficher le composant dans l'environnement de test.
        render(<ContactForm />);

        // On vérifie que les champs principaux et le bouton sont présents.
        expect(screen.getByLabelText("Nom")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Message")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Envoyer" })
        ).toBeInTheDocument();
    });

    it("affiche une erreur si le formulaire est envoyé vide", async () => {
        // On affiche le composant.
        render(<ContactForm />);

        // On simule la validation du captcha pour permettre l'envoi.
        fireEvent.click(
            screen.getByRole("button", { name: "Valider le captcha simulé" })
        );

        // On clique sur Envoyer sans remplir les champs.
        fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));

        // On vérifie que le message d'erreur attendu apparaît.
        expect(
            await screen.findByText("Tous les champs sont obligatoires.")
        ).toBeInTheDocument();
    });

    it("affiche une erreur si l'email saisi est invalide", async () => {
        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText("Nom"), {
            target: { value: "Paul" },
        });

        fireEvent.change(screen.getByLabelText("Email"), {
            target: { value: "test" },
        });

        fireEvent.change(screen.getByLabelText("Message"), {
            target: { value: "Bonjour, je souhaite vous contacter." },
        });

        fireEvent.click(
            screen.getByRole("button", { name: "Valider le captcha simulé" })
        );

        expect(
            screen.getByRole("button", { name: "Envoyer" })
        ).not.toBeDisabled();

        fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));

        screen.debug();

        expect(
            await screen.findByText("Veuillez saisir une adresse email valide.")
        ).toBeInTheDocument();
    });

    it("affiche une erreur si le message est trop court", async () => {
        // On affiche le composant dans l'environnement de test.
        render(<ContactForm />);

        // On remplit le champ Nom avec une valeur valide.
        fireEvent.change(screen.getByLabelText("Nom"), {
            target: { value: "Paul" },
        });

        // On remplit le champ Email avec une adresse valide.
        fireEvent.change(screen.getByLabelText("Email"), {
            target: { value: "Paul@test.com" },
        });

        // On remplit le champ Message avec un texte trop court.
        fireEvent.change(screen.getByLabelText("Message"), {
            target: { value: "Bonjour" },
        });

        // On simule la validation du captcha.
        fireEvent.click(
            screen.getByRole("button", { name: "Valider le captcha simulé" })
        );

        // On vérifie que le bouton Envoyer est bien activé.
        expect(
            screen.getByRole("button", { name: "Envoyer" })
        ).not.toBeDisabled();

        // On clique sur Envoyer.
        fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));

        // On vérifie que le message d'erreur attendu apparaît.
        expect(
            await screen.findByText(/Le message doit contenir au moins 10 caractères/i)
        ).toBeInTheDocument();
    });

    it("affiche un message de succès quand le formulaire est valide", async () => {
        // On simule la réponse de l'API /api/contact.
        const fetchMock = vi.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            json: async () => ({
                message: "Votre message a bien été envoyé.",
            }),
        } as Response);

        // On affiche le composant dans l'environnement de test.
        render(<ContactForm />);

        // On remplit le champ Nom avec une valeur valide.
        fireEvent.change(screen.getByLabelText("Nom"), {
            target: { value: "Paul" },
        });

        // On remplit le champ Email avec une adresse valide.
        fireEvent.change(screen.getByLabelText("Email"), {
            target: { value: "Paul@test.com" },
        });

        // On remplit le champ Message avec un texte valide.
        fireEvent.change(screen.getByLabelText("Message"), {
            target: { value: "Bonjour, je souhaite vous contacter." },
        });

        // On simule la validation du captcha.
        fireEvent.click(
            screen.getByRole("button", { name: "Valider le captcha simulé" })
        );

        // On vérifie que le bouton est bien activé.
        expect(
            screen.getByRole("button", { name: "Envoyer" })
        ).not.toBeDisabled();

        // On clique sur Envoyer.
        fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));

        // On vérifie que le message de succès apparaît.
        expect(
            await screen.findByText("Votre message a bien été envoyé.")
        ).toBeInTheDocument();

        // On vérifie que l'appel API a bien été effectué.
        expect(fetchMock).toHaveBeenCalledWith("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: "Paul",
                email: "Paul@test.com",
                message: "Bonjour, je souhaite vous contacter.",
                captchaToken: "fake-token",
            }),
        });

        // On vérifie que les champs ont été réinitialisés après succès.
        expect(screen.getByLabelText("Nom")).toHaveValue("");
        expect(screen.getByLabelText("Email")).toHaveValue("");
        expect(screen.getByLabelText("Message")).toHaveValue("");

        // On nettoie le mock pour éviter d'impacter les autres tests.
        fetchMock.mockRestore();
    });

});