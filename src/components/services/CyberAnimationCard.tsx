type CyberAnimationCardProps = {
    title: string;
    description: string;
};

export default function CyberAnimationCard({
                                               title,
                                               description,
                                           }: CyberAnimationCardProps) {
    return (
        <article className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-card-bg)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-blue)]">
                Domaine
            </p>

            <h3 className="mb-4 text-2xl font-bold leading-tight text-[var(--color-text-dark)]">
                {title}
            </h3>

            <div className="mb-6 h-1.5 w-20 rounded-full bg-[var(--color-accent-gold-strong)]" />

            <p className="text-lg leading-8 text-[var(--color-text-soft)]">
                {description}
            </p>
        </article>
    );
}