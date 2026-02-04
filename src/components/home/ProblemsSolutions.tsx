"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
    {
        category: "Services",
        title: "Business-Focused Expertise",
        description: "Specialized accounting for SMEs with dedicated managers and growth-oriented advisory strategies.",
        image: "/images/card-strategy.png",
        link: "/services/business",
    },
    {
        category: "Compliance",
        title: "Compliance Without Stress",
        description: "Expert handling of ATO disputes, tax planning, and audit support to ensure you stay secure.",
        image: "/images/card-compliance.png",
        link: "/services/tax",
    },
    {
        category: "Growth",
        title: "Clear Growth Path",
        description: "Strategic cash flow forecasting, financial structuring, and business guidance for sustainable expansion.",
        image: "/images/card-growth.png",
        link: "/services/advisory",
    },
    {
        category: "Insights",
        title: "Future-Ready Vision",
        description: "Navigating tomorrow's financial landscape with cutting-edge technology and proactive insights.",
        image: "/images/card-future.png",
        link: "/services/technology",
    },
];

export function ProblemsSolutions() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* Header (Optional, kept minimal to match reference style) */}
                <div className="mb-12">
                    {/* If the reference has no header, we can remove this or keep it subtle */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                    {solutions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                            className="group relative flex flex-col h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay gradient on image (optional) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            </div>

                            {/* Content Container - Primary Brand Color */}
                            <div className="flex flex-col flex-grow bg-primary p-8 text-white transition-colors duration-300 group-hover:bg-[#096A35] relative">
                                {/* Left Accent Line (KPMG Style) */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                                <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-3">
                                    {item.category}
                                </span>

                                <h3 className="text-xl font-bold leading-tight mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-green-50 leading-relaxed mb-8 line-clamp-4 flex-grow">
                                    {item.description}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href={item.link}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-secondary transition-colors group/link"
                                    >
                                        Read more
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
