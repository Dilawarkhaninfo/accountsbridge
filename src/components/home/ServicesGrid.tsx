"use client";

import React from "react";
import { Plane, TrendingUp, ShoppingCart, Landmark, Lightbulb, Truck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Business Advice",
        description: "Provide extensive services of strategic business plans, budgeting, cash flow projections, obtaining local and offshore finance & more.",
        icon: Plane,
        link: "/services/business",
    },
    {
        title: "Financial Structuring",
        description: "Structure business financials considering risks and potentials involved in the process to forecast the appropriate returns.",
        icon: TrendingUp,
        link: "/services/advisory",
    },
    {
        title: "Company Shares Valuation",
        description: "Make company’s share valuation simple and effective to provide a great plan and structure for the relevant prospectuses.",
        icon: ShoppingCart,
        link: "/services/advisory",
    },
    {
        title: "Accounting Services",
        description: "One stop solution for Bookkeeping, Payroll, Internal Audit, Exploring Grants, Cost Accounting and more to stabilize your accounts.",
        icon: Landmark,
        link: "/services/business",
    },
    {
        title: "Taxation Services",
        description: "Covers all kinds of taxes from Income tax planning, GST, direct & indirect taxes, Internationals Taxes, charities and more.",
        icon: Lightbulb,
        link: "/services/compliance",
    },
    {
        title: "Audits & Settlements",
        description: "Assisting businesses with audits & audit dispute settlements to ensure cleared accounts to avoid any restrictions or allegations.",
        icon: Truck,
        link: "/services/compliance",
    },
];

// Hexagon SVG Component (Adjusted for perfect non-clipped rendering)
const HexagonBorder = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        className={cn("w-full h-full drop-shadow-sm", className)}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ overflow: 'visible' }}
    >
        {/* Adjusted to sit perfectly inside 100x100 box with padding for stroke */}
        <path d="M50 2 L93 26 V74 L50 98 L7 74 V26 Z" />
    </svg>
);

export function ServicesGrid() {
    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="max-w-8xl relative z-10 mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                        services we offer
                    </h2>
                    {/* Yellow Underline Accent */}
                    <div className="w-16 h-1.5 bg-secondary rounded-full" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative flex gap-6 p-8 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 z-0 hover:z-10"
                        >
                            {/* Icon Section */}
                            <div className="relative shrink-0 flex flex-col items-center">
                                {/* Top Dashed Line */}
                                <div className="absolute -top-8 w-0.5 h-8 border-l-2 border-dashed border-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out origin-bottom scale-y-0 group-hover:scale-y-100" />

                                <div className="relative w-16 h-16 flex items-center justify-center">
                                    <HexagonBorder className="absolute inset-0 text-primary transition-transform duration-500 group-hover:scale-110" />
                                    <service.icon className="w-7 h-7 text-primary relative z-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                                </div>

                                {/* Bottom Dashed Line */}
                                <div className="absolute -bottom-8 w-0.5 h-8 border-l-2 border-dashed border-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out origin-top scale-y-0 group-hover:scale-y-100" />
                            </div>

                            {/* Content */}
                            <div className="space-y-3 pt-1">
                                <h3 className="text-xl font-bold text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
