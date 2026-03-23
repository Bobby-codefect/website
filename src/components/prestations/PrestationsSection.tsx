import PrestationCard from "@/components/prestations/PrestationCard";
import { prestations } from "@/data/prestations";

export default function PrestationsSection() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="mb-6 text-3xl font-bold">Nos prestations</h1>

            <div className="grid gap-4 md:grid-cols-2">
                {prestations.map((prestation) => (
                    <PrestationCard
                        key={prestation.id}
                        titre={prestation.titre}
                        description={prestation.description}
                    />
                ))}
            </div>
        </section>
    );
}