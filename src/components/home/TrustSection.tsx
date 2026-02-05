"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Cases completed", value: "321" },
    { label: "Consultants", value: "27" },
    { label: "Awards winning", value: "125" },
    { label: "Satisfied customers", value: "100%" },
];

export function TrustSection() {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/images/trust-bg.jpg')" }}
            />

            {/* Dark Overlay - Darkened for White/Yellow text visibility */}
            <div className="absolute inset-0 bg-slate-900/70" />

            {/* Content Container */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Content */}
                    <div className="space-y-12">
                        {/* Heading Group */}
                        <div className="flex items-start gap-5">
                            <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-secondary shrink-0 mt-1" strokeWidth={2} />
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                                <span className="text-secondary block text-nowrap">Doing the right thing,</span>
                                <span className="text-white block text-nowrap">at the right time.</span>
                            </h2>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pl-0 md:pl-20">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col space-y-2">
                                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm font-medium text-white/90 tracking-wide">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Spacer */}
                    <div className="hidden md:block" />
                </div>
            </div>
        </section>
    );
}
