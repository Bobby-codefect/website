export default function MentionsLegalesPage() {
    return (
        <section className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
            <div className="mx-auto max-w-5xl px-6 py-20">
                <div className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-surface-light)] p-8 shadow-sm md:p-10">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-blue)]">
                        Informations légales
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                        Mentions légales
                    </h1>

                    <div className="mb-10 h-1.5 w-24 rounded-full bg-[var(--color-accent-gold-strong)]" />

                    <div className="space-y-10 text-[var(--color-text-soft)]">
                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                                Éditeur du site
                            </h2>

                            <div className="space-y-2 leading-7">
                                <p>Codefect</p>
                                <p>Forme juridique : [À compléter]</p>
                                <p>Siège social : [À compléter]</p>
                                <p>SIREN / SIRET : [À compléter]</p>
                                <p>RCS : [À compléter]</p>
                                <p>TVA intracommunautaire : [À compléter si applicable]</p>
                                <p>E-mail : [À compléter]</p>
                                <p>Téléphone : [À compléter]</p>
                                <p>Directeur de la publication : [À compléter]</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                                Hébergeur
                            </h2>

                            <div className="space-y-2 leading-7">
                                <p>[Nom de l’hébergeur]</p>
                                <p>[Adresse de l’hébergeur]</p>
                                <p>[Téléphone de l’hébergeur]</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}