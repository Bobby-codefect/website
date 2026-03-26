type SendContactEmailParams = {
    nom: string;
    email: string;
    message: string;
};

export async function sendContactEmail({
                                           nom,
                                           email,
                                           message,
                                       }: SendContactEmailParams) {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

    if (!apiKey || !senderEmail || !senderName || !receiverEmail) {
        throw new Error("La configuration Brevo est incomplète.");
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            accept: "application/json",
            "api-key": apiKey,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            sender: {
                name: senderName,
                email: senderEmail,
            },
            to: [
                {
                    email: receiverEmail,
                    name: "Codefect",
                },
            ],
            replyTo: {
                email,
                name: nom,
            },
            subject: "Nouveau message depuis le formulaire de contact",
            htmlContent: `
        <h2>Nouveau message reçu</h2>
        <p><strong>Nom :</strong> ${escapeHtml(nom)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
        }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(
            `Erreur Brevo (${response.status}) : ${errorBody || "réponse vide"}`
        );
    }

    return response.json();
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}