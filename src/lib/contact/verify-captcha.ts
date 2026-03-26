type TurnstileVerifyResponse = {
    success: boolean;
    "error-codes"?: string[];
};

export async function verifyCaptcha(token: string) {
    const secret = process.env.TURNSTILE_SECRET_KEY;

    if (!secret) {
        throw new Error("La clé secrète Turnstile est manquante.");
    }

    const formData = new FormData();
    formData.append("secret", secret);
    formData.append("response", token);

    const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            body: formData,
        }
    );

    const data = (await response.json()) as TurnstileVerifyResponse;

    return data.success;
}