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
        await expect(page.getByLabel("Nom")).toBeVisible();
        await expect(page.getByLabel("Email")).toBeVisible();
        await expect(page.getByLabel("Message")).toBeVisible();

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
        await page.getByLabel("Nom").fill("Jean");

        // On remplit le champ Email.
        await page.getByLabel("Email").fill("Jean@test.com");

        // On remplit le champ Message.
        await page
            .getByLabel("Message")
            .fill("Bonjour, je souhaite vous contacter pour échanger sur mon projet.");

        // On vérifie que chaque champ contient bien la valeur saisie.
        await expect(page.getByLabel("Nom")).toHaveValue("Jean");
        await expect(page.getByLabel("Email")).toHaveValue("Jean@test.com");
        await expect(page.getByLabel("Message")).toHaveValue(
            "Bonjour, je souhaite vous contacter pour échanger sur mon projet."
        );
    });
});