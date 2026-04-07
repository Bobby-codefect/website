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

        // On vérifie que tous les champs maintenant attendus par le formulaire
        // sont bien visibles à l'écran.
        expect(screen.getByLabelText("Nom")).toBeInTheDocument();
        expect(screen.getByLabelText("Prénom")).toBeInTheDocument();
        expect(screen.getByLabelText("Société")).toBeInTheDocument();
        expect(screen.getByLabelText("Mail")).toBeInTheDocument();
        expect(screen.getByLabelText("Tél")).toBeInTheDocument();
        expect(screen.getByLabelText("Message")).toBeInTheDocument();

        // On vérifie aussi la présence du bouton principal.
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

        // Ici, on remplit tous les autres champs obligatoires correctement,
        // pour isoler uniquement le problème d'email.
        fireEvent.change(screen.getByLabelText("Nom"), {
            target: { value: "Dupont" },
        });

        fireEvent.change(screen.getByLabelText("Prénom"), {
            target: { value: "Paul" },
        });

        fireEvent.change(screen.getByLabelText("Société"), {
            target: { value: "Codefect" },
        });

        fireEvent.change(screen.getByLabelText("Mail"), {
            target: { value: "test" },
        });

        fireEvent.change(screen.getByLabelText("Tél"), {
            target: { value: "06 12 34 56 78" },
        });

        fireEvent.change(screen.getByLabelText("Message"), {
            target: { value: "Bonjour, je souhaite vous contacter." },
        });

        fireEvent.click(
            screen.getByRole("button", { name: "Valider le captcha simulé" })
        );

        // Si le captcha est validé, le bouton ne doit plus être désactivé.
        expect(
            screen.getByRole("button", { name: "Envoyer" })
        ).not.toBeDisabled();

        fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));

        expect(
            await screen.findByText("Veuillez saisir une adresse email valide.")
        ).toBeInTheDocument();
    });

    it("affiche une erreur si le message est trop court", async () => {
        // On affiche le composant dans l'environnement de test.
        render(<ContactForm />);

        // On remplit tous les champs obligatoires avec des valeurs valides,
        // sauf le message qui sera volontairement trop court.
        fireEvent.change(screen.getByLabelText("Nom"), {
            target: { value: "Dupont" },
        });

        fireEvent.change(screen.getByLabelText("Prénom"), {
            target: { value: "Paul" },
        });

        fireEvent.change(screen.getByLabelText("Société"), {
            target: { value: "Codefect" },
        });

        fireEvent.change(screen.getByLabelText("Mail"), {
            target: { value: "Paul@test.com" },
        });

        fireEvent.change(screen.getByLabelText("Tél"), {
            target: { value: "06 12 34 56 78" },
        });

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

    it("affiche une erreur si le téléphone est invalide", async () => {
        // Ce test est nouveau et logique maintenant :
        // le téléphone est obligatoire et validé côté formulaire.
        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText("Nom"), {
            target: { value: "Dupont" },
        });

        fireEvent.change(screen.getByLabelText("Prénom"), {
            target: { value: "Paul" },
        });

        fireEvent.change(screen.getByLabelText("Société"), {
            target: { value: "Codefect" },
        });

        fireEvent.change(screen.getByLabelText("Mail"), {
            target: { value: "Paul@test.com" },
        });

        fireEvent.change(screen.getByLabelText("Tél"), {
            target: { value: "12" },
        });

        fireEvent.change(screen.getByLabelText("Message"), {
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
        // On simule la réponse de l'API /api/contact.
        const fetchMock = vi.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            json: async () => ({
                message: "Votre message a bien été envoyé. Nous vous répondrons dès que possible.",
            }),
        } as Response);

        // On affiche le composant dans l'environnement de test.
        render(<ContactForm />);

        // On remplit tous les champs obligatoires avec des valeurs valides.
        fireEvent.change(screen.getByLabelText("Nom"), {
            target: { value: "Dupont" },
        });

        fireEvent.change(screen.getByLabelText("Prénom"), {
            target: { value: "Paul" },
        });

        fireEvent.change(screen.getByLabelText("Société"), {
            target: { value: "Codefect" },
        });

        fireEvent.change(screen.getByLabelText("Mail"), {
            target: { value: "Paul@test.com" },
        });

        fireEvent.change(screen.getByLabelText("Tél"), {
            target: { value: "06 12 34 56 78" },
        });

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
            await screen.findByText(
                "Votre message a bien été envoyé. Nous vous répondrons dès que possible."
            )
        ).toBeInTheDocument();

        // On vérifie que l'appel API a bien été effectué
        // avec toutes les nouvelles données attendues.
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

        // On vérifie que les champs ont été réinitialisés après succès.
        expect(screen.getByLabelText("Nom")).toHaveValue("");
        expect(screen.getByLabelText("Prénom")).toHaveValue("");
        expect(screen.getByLabelText("Société")).toHaveValue("");
        expect(screen.getByLabelText("Mail")).toHaveValue("");
        expect(screen.getByLabelText("Tél")).toHaveValue("");
        expect(screen.getByLabelText("Message")).toHaveValue("");

        // On nettoie le mock pour éviter d'impacter les autres tests.
        fetchMock.mockRestore();
    });
});