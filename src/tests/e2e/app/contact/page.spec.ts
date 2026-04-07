import { test, expect } from "@playwright/test";

test.describe("Page Contact", () => {
    test("affiche correctement le formulaire de contact", async ({ page }) => {
        // On ouvre la page Contact.
        await page.goto("/contact");

        // On vérifie que le titre principal est visible.
        await expect(
            page.getByRole("heading", {
                level: 1,
                name: /Échangeons autour de vos besoins numériques/i,
            })
        ).toBeVisible();

        // On vérifie qu'un extrait du texte d'introduction est bien affiché.
        await expect(
            page.getByText(/Vous avez un besoin, une question ou un projet/i)
        ).toBeVisible();

        // On vérifie que les champs principaux du formulaire sont présents.
        // Ici, on force une correspondance exacte pour éviter que "Nom"
        // corresponde aussi à "Prénom".
        await expect(
            page.getByRole("textbox", { name: "Nom", exact: true })
        ).toBeVisible();

        await expect(
            page.getByRole("textbox", { name: "Prénom", exact: true })
        ).toBeVisible();

        await expect(
            page.getByRole("textbox", { name: "Société", exact: true })
        ).toBeVisible();

        await expect(
            page.getByRole("textbox", { name: "Mail", exact: true })
        ).toBeVisible();

        await expect(
            page.getByRole("textbox", { name: "Tél", exact: true })
        ).toBeVisible();

        await expect(
            page.getByRole("textbox", { name: "Message", exact: true })
        ).toBeVisible();

        // On vérifie que la zone de vérification anti-spam est visible.
        await expect(
            page.getByText("Vérification anti-spam", { exact: true })
        ).toBeVisible();

        // On vérifie que le bouton Envoyer est affiché.
        await expect(
            page.getByRole("button", { name: /Envoyer/i })
        ).toBeVisible();
    });

    test("permet de remplir les champs du formulaire", async ({ page }) => {
        // On ouvre la page Contact.
        await page.goto("/contact");

        // On remplit le champ Nom.
        await page
            .getByRole("textbox", { name: "Nom", exact: true })
            .fill("Dupont");

        // On remplit le champ Prénom.
        await page
            .getByRole("textbox", { name: "Prénom", exact: true })
            .fill("Jean");

        // On remplit le champ Société.
        await page
            .getByRole("textbox", { name: "Société", exact: true })
            .fill("Codefect");

        // On remplit le champ Mail.
        await page
            .getByRole("textbox", { name: "Mail", exact: true })
            .fill("jean@test.com");

        // On remplit le champ Tél.
        await page
            .getByRole("textbox", { name: "Tél", exact: true })
            .fill("06 12 34 56 78");

        // On remplit le champ Message.
        await page
            .getByRole("textbox", { name: "Message", exact: true })
            .fill("Bonjour, je souhaite vous contacter pour échanger sur mon projet.");

        // On vérifie que chaque champ contient bien la valeur saisie.
        await expect(
            page.getByRole("textbox", { name: "Nom", exact: true })
        ).toHaveValue("Dupont");

        await expect(
            page.getByRole("textbox", { name: "Prénom", exact: true })
        ).toHaveValue("Jean");

        await expect(
            page.getByRole("textbox", { name: "Société", exact: true })
        ).toHaveValue("Codefect");

        await expect(
            page.getByRole("textbox", { name: "Mail", exact: true })
        ).toHaveValue("jean@test.com");

        await expect(
            page.getByRole("textbox", { name: "Tél", exact: true })
        ).toHaveValue("06 12 34 56 78");

        await expect(
            page.getByRole("textbox", { name: "Message", exact: true })
        ).toHaveValue(
            "Bonjour, je souhaite vous contacter pour échanger sur mon projet."
        );
    });
});