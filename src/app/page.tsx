import { HeroSection } from "@/components/home/HeroSection";
import { VisionMissionSection } from "@/components/home/VisionMissionSection";
import { BusinessExpertCTA } from "@/components/home/BusinessExpertCTA";
import { ProblemsSolutions } from "@/components/home/ProblemsSolutions";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustSection } from "@/components/home/TrustSection";
import { TargetAudience } from "@/components/home/TargetAudience";
import { CTASection } from "@/components/home/CTASection";
import { MakeTheDifferenceSection } from "@/components/home/MakeTheDifferenceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessExpertCTA />

      <VisionMissionSection />
      <MakeTheDifferenceSection />

      <ProblemsSolutions />
      <ServicesGrid />
      <TrustSection />
      <TargetAudience />
      <CTASection />
    </>
  );
}
