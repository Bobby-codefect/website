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

    const nomSecurise = escapeHtml(nom);
    const emailSecurise = escapeHtml(email);
    const messageSecurise = escapeHtml(message).replace(/\n/g, "<br />");

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="fr">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Nouveau message de contact</title>
            </head>
            <body style="margin:0; padding:0; background-color:#eaf7fc; font-family:Arial, Helvetica, sans-serif; color:#17202a;">
                <table
                    role="presentation"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    style="background-color:#ffffff; margin:0; padding:32px 16px;"
                >
                    <tr>
                        <td align="center">
                            <table
                                role="presentation"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                style="max-width:680px; width:100%; background-color:#eef3f7; border:1px solid #b8c2cf; border-radius:16px; overflow:hidden;"
                            >
                                <tr>
                                    <td style="background-color:#173250; padding:24px 32px;">
                                        <h1 style="margin:0; font-size:28px; line-height:1.3; color:#ffffff;">
                                            Nouveau message de contact
                                        </h1>
                                        <p style="margin:8px 0 0; font-size:14px; line-height:1.6; color:#b8c2cf;">
                                            Formulaire du site Codefect
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:32px;">
                                        <p style="margin:0 0 24px; font-size:16px; line-height:1.7; color:#1b364f;">
                                            Vous avez reçu une nouvelle demande depuis le formulaire de contact.
                                        </p>

                                        <div style="margin-bottom:20px; padding:20px; background-color:#ffffff; border:1px solid #b8c2cf; border-radius:12px;">
                                            <p style="margin:0 0 8px; font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#1e6585;">
                                                Nom
                                            </p>
                                            <p style="margin:0; font-size:16px; line-height:1.6; color:#17202a;">
                                                ${nomSecurise}
                                            </p>
                                        </div>

                                        <div style="margin-bottom:20px; padding:20px; background-color:#ffffff; border:1px solid #b8c2cf; border-radius:12px;">
                                            <p style="margin:0 0 8px; font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#1e6585;">
                                                Email
                                            </p>
                                            <p style="margin:0; font-size:16px; line-height:1.6; color:#17202a;">
                                                ${emailSecurise}
                                            </p>
                                        </div>

                                        <div style="margin-bottom:24px; padding:20px; background-color:#ffffff; border:1px solid #b8c2cf; border-radius:12px;">
                                            <p style="margin:0 0 8px; font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#1e6585;">
                                                Message
                                            </p>
                                            <p style="margin:0; font-size:16px; line-height:1.8; color:#17202a;">
                                                ${messageSecurise}
                                            </p>
                                        </div>

                                        <div style="height:6px; width:96px; background-color:#e29e21; border-radius:999px; margin-bottom:20px;"></div>

                                        <p style="margin:0; font-size:14px; line-height:1.6; color:#1b364f;">
                                            Ce message a été envoyé automatiquement depuis le site Codefect.
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="background-color:#173250; padding:20px 32px; border-top:1px solid #1e6585;">
                                        <p style="margin:0; font-size:13px; line-height:1.6; color:#b8c2cf;">
                                            Codefect — Formulaire de contact
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    `;

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
            htmlContent,
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