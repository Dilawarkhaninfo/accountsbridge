import { MissionVision } from "@/components/about/MissionVision";
import { TrustSection } from "@/components/home/TrustSection"; // Reusing Values section
import { CTASection } from "@/components/home/CTASection";

export default function AboutPage() {
    return (
        <>
            <section className="relative py-24 bg-muted/30">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                        About Accounts Bridge
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                        With over 50 years of combined experience, we are more than just accountants.
                        We are your strategic partners in navigating the financial landscape.
                    </p>
                </div>
            </section>

            <MissionVision />

            <TrustSection />

            <CTASection />
        </>
    );
}
