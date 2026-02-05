"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Images
import VisionWhy from "../../../public/images/vision-why.jpg";
import VisionVision from "../../../public/images/vision-vision.jpg";
import VisionMission from "../../../public/images/vision-mission.jpg";

const cards = [
    {
        title: "Why Accounts Bridge?",
        description: "We offer wide range of services revolving around taxation, management accounting, book-keeping, and financial advisory. That helps your business grow better.",
        link: "/about-us",
        image: VisionWhy,
    },
    {
        title: "Our Vision",
        description: "To be trusted business partners of Businesses and help them reaching their full potential of growth by engaging with professional & industry leading consultants.",
        link: "/about-us/vision",
        image: VisionVision,
    },
    {
        title: "Our Mission",
        description: "Translating our knowledge and expertise into growth and profitability for our clients by helping them to manage tax liabilities and providing timely decision support.",
        link: "/about-us/mission",
        image: VisionMission,
    },
];

export function VisionMissionSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-8xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image Section */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-grow bg-primary p-8 text-white relative">
                                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-secondary transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8 line-clamp-4 flex-grow">
                                    {card.description}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href={card.link}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-white transition-colors uppercase tracking-wider"
                                    >
                                        READ MORE
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
