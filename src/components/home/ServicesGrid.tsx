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

// Hexagon SVG Component
const HexagonBorder = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        className={cn("w-full h-full", className)}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M50 3 L93.3 28 V78 L50 103 L6.7 78 V28 Z" />
    </svg>
);

export function ServicesGrid() {
    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                        services we offer
                    </h2>
                    {/* Yellow Underline Accent */}
                    <div className="w-16 h-1.5 bg-secondary rounded-full" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {services.map((service, index) => (
                        <div key={index} className="flex gap-6 group">
                            {/* Hexagon Icon */}
                            <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                                <HexagonBorder className="absolute inset-0 text-primary group-hover:text-primary transition-colors duration-300" />
                                <service.icon className="w-7 h-7 text-primary relative z-10" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div className="space-y-3 pt-1">
                                <h3 className="text-xl font-bold text-primary">
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
