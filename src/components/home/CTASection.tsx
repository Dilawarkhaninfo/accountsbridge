import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 w-full bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
                    Ready to Grow Your Business?
                </h2>
                <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    Partner with Accounts Bridge today and experience the difference of strategic financial advisory.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="text-foreground font-bold px-8 py-6 rounded-full" asChild>
                        <Link href="/contact-us">
                            Book a Consultation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 rounded-full" asChild>
                        <Link href="/services">
                            Explore Our Services
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
