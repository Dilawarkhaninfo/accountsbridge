import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServicesGrid } from "@/components/home/ServicesGrid";

export default function ServicesPage() {
    return (
        <>
            <ServiceDetailHero
                title="Comprehensive Financial Solutions"
                subtitle="Expert services designed to help you navigate financial complexities and achieve sustainable growth."
            />

            <div className="py-12">
                <ServicesGrid />
            </div>

        </>
    );
}
