<h1>PrestationCard</h1>

type PrestationCardProps = {
    titre: string;
    description: string;
};

export default function PrestationCard({
                                           titre,
                                           description,
                                       }: PrestationCardProps) {
    return (
        <article className="rounded-lg border p-4 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold">{titre}</h2>
            <p className="text-sm text-gray-600">{description}</p>
        </article>
    );
}