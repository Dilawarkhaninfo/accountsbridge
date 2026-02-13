import { HeroSection } from "@/components/home/HeroSection";
import { IndustryGapSection } from "@/components/home/IndustryGapSection";
import { WhyMidTierMatters } from "@/components/home/WhyMidTierMatters";
import { WhoWeWorkWithSection } from "@/components/home/WhoWeWorkWithSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ATODisputeSection } from "@/components/home/ATODisputeSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { BusinessExpertCTA } from "@/components/home/BusinessExpertCTA";
import { TrustSection } from "@/components/home/TrustSection";
import type { Metadata } from "next";
import { MapSection } from "@/components/home/MapSection";

export const metadata: Metadata = {
  title: "Business Accountants Melbourne | Tax & Advisory for $1M+ Companies | Accounts Bridge",
  description: "Mid-tier accounting firm for Australian businesses earning $1M–$5M+. Get CFO-level advisory with local responsiveness. Book a consultation.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessExpertCTA />
      <IndustryGapSection />
      <WhyMidTierMatters />
      <WhoWeWorkWithSection />
      <TechStackSection />
      <ServicesGrid />
      <ATODisputeSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <TrustSection />
      <FAQSection />
      <MapSection />
      <FinalCTASection />

    </>
  );
}
