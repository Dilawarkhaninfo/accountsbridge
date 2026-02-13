"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What Size Business Do You Typically Work With?",
        answer: "We focus on companies generating $1 million to $5 million+ in annual revenue. Our service model is built specifically for businesses at this growth stage."
    },
    {
        question: "Do You Handle Individual Tax Returns?",
        answer: "We can, but it's not our focus. If you're primarily looking for a personal return, we'll recommend a firm better suited to that work. Our expertise is in business advisory for scaling companies."
    },
    {
        question: "What's Your Pricing Model?",
        answer: "We provide fixed annual quotes based on scope and complexity, no hourly billing, no surprise invoices. Your initial consultation includes a detailed proposal so you know exactly what you're investing in."
    },
    {
        question: "Can You Work With Our Existing Software?",
        answer: "Absolutely. We're certified partners with Xero, QuickBooks, and MYOB, and we've worked with businesses using other platforms or no software at all. We adapt to your systems, not the other way around."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#F8F9FA] py-20 lg:py-28 relative overflow-hidden">

            {/* Background glows — consistent with WhoWeWorkWith / ServicesGrid */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none -mr-40 -mt-20 z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -ml-20 -mb-20 z-0" />

            {/* Subtle dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary/60 font-bold tracking-[0.25em] uppercase text-xs">
                        Common Queries
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "bg-white rounded-2xl overflow-hidden border transition-all duration-300",
                                openIndex === index
                                    ? "border-primary/20 shadow-lg ring-1 ring-primary/5"
                                    : "border-slate-100 shadow-sm hover:border-primary/15 hover:shadow-md"
                            )}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            >
                                <span className={cn(
                                    "text-base md:text-lg font-bold transition-colors duration-300 pr-8",
                                    openIndex === index ? "text-primary" : "text-slate-900"
                                )}>
                                    {faq.question}
                                </span>

                                {/* Toggle icon — secondary bg when open, slate when closed */}
                                <div className={cn(
                                    "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                                    openIndex === index
                                        ? "bg-secondary text-slate-900 rotate-180"
                                        : "bg-slate-100 text-slate-400"
                                )}>
                                    <ChevronDown className="w-4 h-4 stroke-[2.5px]" />
                                </div>
                            </button>

                            {/* Animated answer */}
                            <div
                                className={cn(
                                    "grid transition-[grid-template-rows] duration-300 ease-out",
                                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                )}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-500 font-medium leading-relaxed border-t border-slate-100">
                                        <div className="pt-5">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}