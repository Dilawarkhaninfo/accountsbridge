"use client";

import { motion } from "framer-motion";
import {
    LineChart,
    Building2,
    PieChart,
    Calculator,
    FileText,
    ShieldCheck,
    ArrowRight,
    Briefcase,
    Globe2
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Business Advice",
        description: "Strategic business plans, budgeting, cash flow projections, and obtaining finance.",
        icon: LineChart,
        link: "/services/business",
    },
    {
        title: "Financial Structuring",
        description: "Structure business financials considering risks and potentials to forecast appropriate returns.",
        icon: Building2,
        link: "/services/advisory",
    },
    {
        title: "Company Valuation",
        description: "Effective share valuation to provide a strong plan and structure for prospectuses.",
        icon: PieChart,
        link: "/services/advisory",
    },
    {
        title: "Accounting Services",
        description: "Bookkeeping, payroll, internal audit, grants, cost accounting, and more.",
        icon: Calculator,
        link: "/services/business",
    },
    {
        title: "Taxation Services",
        description: "Income tax planning, GST, direct & indirect taxes, international taxes, and charities.",
        icon: FileText,
        link: "/services/compliance",
    },
    {
        title: "Audits & Settlements",
        description: "Assisting with audits and dispute settlements to ensure cleared accounts.",
        icon: ShieldCheck,
        link: "/services/compliance",
    },
    {
        title: "Global Consulting",
        description: "International business strategy and cross-border financial compliance.",
        icon: Globe2,
        link: "/services/advisory",
    },
    {
        title: "Corporate Strategy",
        description: "Long-term planning and corporate governance to drive sustainable growth.",
        icon: Briefcase,
        link: "/services/advisory",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    },
};

export function ServicesGrid() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* Section Header */}
                <div className="text-left mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                        Services that make the difference
                    </h2>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative border-r border-b border-slate-200 bg-white hover:bg-slate-50/50 transition-colors duration-300 p-8 flex flex-col h-full min-h-[320px]"
                        >
                            {/* Vertical Accent Line (Left of content) */}
                            <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                            {/* Icon */}
                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon className="w-6 h-6" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-6 group-hover:text-slate-600">
                                    {service.description}
                                </p>
                            </div>

                            {/* Footer Link */}
                            <div className="mt-auto pt-4">
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors"
                                >
                                    Explore
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center md:text-left">
                    <Button
                        asChild
                        className="rounded-full px-8 py-6 text-base font-bold bg-primary hover:bg-[#096A35] text-white shadow-lg hover:shadow-xl transition-all"
                    >
                        <Link href="/services">
                            All Services <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
