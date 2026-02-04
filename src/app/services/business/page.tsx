import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle2 } from "lucide-react";

export default function BusinessAdvisoryPage() {
    const features = [
        "Strategic Business Planning",
        "Cash Flow Management & Forecasting",
        "Budgeting & Variance Analysis",
        "Business Structuring for Growth",
        "Succession Planning",
        "Risk Management Strategies"
    ];

    return (
        <>
            <ServiceDetailHero
                title="Business Advisory & Planning"
                subtitle="Turn your business goals into reality with actionable strategic planning and financial insights."
            />

            <section className="py-24 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">
                                Navigate Complexity with Confidence
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Running a business involves more than just selling a product or service.
                                It requires a roadmap. Our advisory services provide you with the clarify
                                and direction needed to scale effectively.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                We work alongside you to identify opportunities, mitigate risks, and
                                optimize your operations for maximum profitability.
                            </p>

                            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
                                <h3 className="font-semibold text-xl mb-4 text-primary">Key Services</h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="relative h-[500px] bg-muted rounded-2xl overflow-hidden">
                            {/* Decorative placeholder for Business Advisory Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-muted to-background flex items-center justify-center">
                                <span className="text-muted-foreground font-medium">Business Advisory Illustration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
