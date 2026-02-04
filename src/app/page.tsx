import { HeroSection } from "@/components/home/HeroSection";
import { VisionMissionSection } from "@/components/home/VisionMissionSection";
import { BusinessExpertCTA } from "@/components/home/BusinessExpertCTA";
import { ProblemsSolutions } from "@/components/home/ProblemsSolutions";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustSection } from "@/components/home/TrustSection";
import { TargetAudience } from "@/components/home/TargetAudience";
import { CTASection } from "@/components/home/CTASection";
import { MakeTheDifferenceSection } from "@/components/home/MakeTheDifferenceSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { RequestCallbackSection } from "@/components/home/RequestCallbackSection";
import { MapSection } from "@/components/home/MapSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessExpertCTA />

      <VisionMissionSection />
      <MakeTheDifferenceSection />
      <ServicesSection />
      <ProblemsSolutions />
      <ServicesGrid />
      <TrustSection />
      <TestimonialsSection />
      <TargetAudience />
      <RequestCallbackSection />
      <MapSection />
      <CTASection />
    </>
  );
}
