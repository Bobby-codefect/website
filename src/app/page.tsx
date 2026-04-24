import HeroWave from "@/components/home/HeroWave";
import PresentationSection from "@/components/home/PresentationSection";
import WhySection from "@/components/home/WhySection";
import ValuesSection from "@/components/home/ValuesSection";
import PositioningSection from "@/components/home/PositioningSection";
import GoalsSection from "@/components/home/GoalsSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
    return (
        <>
            <HeroWave />
            <PresentationSection />
            <WhySection />
            <ValuesSection />
            <PositioningSection />
            <GoalsSection />
            <FinalCtaSection />
        </>
    );
}