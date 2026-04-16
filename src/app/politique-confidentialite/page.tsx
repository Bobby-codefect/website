export default function PolitiqueConfidentialitePage() {
    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-5xl px-6 py-20">
                {/* <div className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-surface-light)] p-8 shadow-sm md:p-10"> */}
                <div className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] p-8 shadow-sm md:p-10">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                        Données personnelles
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                        Politique de confidentialité
                    </h1>

                    <div className="mb-10 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                    <div className="space-y-10 text-[var(--color-text-soft)]">
                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                                Responsable du traitement
                            </h2>
                            <p className="leading-7">
                                Les données personnelles collectées sur le site sont
                                traitées par Codefect.
                            </p>
                            <p className="leading-7">
                                Coordonnées : [Adresse postale] – [E-mail de contact RGPD]
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                                Données collectées
                            </h2>
                            <p className="leading-7">
                                Lorsque vous utilisez le formulaire de contact, les données
                                suivantes peuvent être collectées :
                            </p>
                            <ul className="mt-4 space-y-2 leading-7">
                                <li>Nom</li>
                                <li>Adresse e-mail</li>
                                <li>Contenu du message</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                                Finalité du traitement
                            </h2>
                            <p className="leading-7">
                                Ces données sont utilisées uniquement pour répondre à votre
                                demande envoyée via le formulaire de contact.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                                Base légale
                            </h2>
                            <p className="leading-7">
                                Le traitement est fondé sur [à choisir et garder partout de
                                façon cohérente : l’intérêt légitime de Codefect à répondre
                                aux demandes reçues / l’exécution de mesures précontractuelles
                                à votre demande].
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                                Caractère obligatoire des données
                            </h2>
                            <p className="leading-7">
                                Les champs nom, e-mail et message sont nécessaires au
                                traitement de votre demande.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                                Destinataires des données
                            </h2>
                            <p className="leading-7">
                                Les données sont destinées uniquement aux personnes habilitées
                                chez Codefect ainsi qu’aux sous-traitants techniques
                                intervenant pour le fonctionnement du formulaire de contact,
                                notamment [Brevo] pour l’envoi des e-mails et [Cloudflare
                                Turnstile] pour la protection contre le spam, si ces services
                                sont effectivement utilisés.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                                Durée de conservation
                            </h2>
                            <p className="leading-7">
                                Les données issues du formulaire de contact sont conservées
                                pendant [À compléter, par exemple : 12 mois à compter du
                                dernier échange].
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                                Vos droits
                            </h2>
                            <p className="leading-7">
                                Vous disposez d’un droit d’accès, de rectification,
                                d’effacement, de limitation et d’opposition au traitement de
                                vos données.
                            </p>
                            <p className="leading-7">
                                Vous pouvez exercer ces droits à l’adresse suivante :
                                [E-mail de contact RGPD].
                            </p>
                            <p className="leading-7">
                                Vous disposez également du droit d’introduire une réclamation
                                auprès de la CNIL.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}