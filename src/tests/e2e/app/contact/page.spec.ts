import { test, expect } from "@playwright/test";

test.describe("Page Contact", () => {
    test("affiche correctement le formulaire de contact", async ({ page }) => {
        await page.goto("/contact");

        await expect(
            page.getByRole("heading", {
                level: 1,
                name: /Échangeons autour de vos besoins numériques/i,
            })
        ).toBeVisible();

        await expect(
            page.getByText(/Vous avez un besoin, une question ou un projet/i)
        ).toBeVisible();

        await expect(page.getByLabel(/^Nom/i)).toBeVisible();
        await expect(page.getByLabel(/^Prénom/i)).toBeVisible();
        await expect(page.getByLabel(/^Société/i)).toBeVisible();
        await expect(page.getByLabel(/^Email/i)).toBeVisible();
        await expect(page.getByLabel(/^Téléphone/i)).toBeVisible();
        await expect(page.getByLabel(/^Message/i)).toBeVisible();

        await expect(
            page.getByText("Vérification anti-spam", { exact: true })
        ).toBeVisible();

        await expect(
            page.getByRole("button", { name: /Envoyer/i })
        ).toBeVisible();
    });

    test("permet de remplir les champs du formulaire", async ({ page }) => {
        await page.goto("/contact");

        await page.getByLabel(/^Nom/i).fill("Dupont");
        await page.getByLabel(/^Prénom/i).fill("Jean");
        await page.getByLabel(/^Société/i).fill("Codefect");
        await page.getByLabel(/^Email/i).fill("jean@test.com");
        await page.getByLabel(/^Téléphone/i).fill("06 12 34 56 78");
        await page
            .getByLabel(/^Message/i)
            .fill("Bonjour, je souhaite vous contacter pour échanger sur mon projet.");

        await expect(page.getByLabel(/^Nom/i)).toHaveValue("Dupont");
        await expect(page.getByLabel(/^Prénom/i)).toHaveValue("Jean");
        await expect(page.getByLabel(/^Société/i)).toHaveValue("Codefect");
        await expect(page.getByLabel(/^Email/i)).toHaveValue("jean@test.com");
        await expect(page.getByLabel(/^Téléphone/i)).toHaveValue("06 12 34 56 78");
        await expect(page.getByLabel(/^Message/i)).toHaveValue(
            "Bonjour, je souhaite vous contacter pour échanger sur mon projet."
        );
    });
});