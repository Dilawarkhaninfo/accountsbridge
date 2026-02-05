"use client";

import React from "react";
import { CheckCircle2, Briefcase, Users2, Trophy, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Cases completed", value: "321", icon: Briefcase },
    { label: "Consultants", value: "27", icon: Users2 },
    { label: "Awards winning", value: "125", icon: Trophy },
    { label: "Satisfied customers", value: "100%", icon: Heart },
];

export function TrustSection() {
    return (
        <section className="relative w-full h-[600px] overflow-hidden">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/images/trust-bg.jpg')" }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/70" />

            {/* Content Container */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center">

                {/* Heading Group */}
                <div className="flex flex-col items-center gap-6 mb-16">
                    <CheckCircle2 className="w-16 h-16 md:w-20 md:h-20 text-secondary" strokeWidth={2} />
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                        <span className="text-secondary block text-nowrap">Doing the right thing,</span>
                        <span className="text-white block text-nowrap">at the right time.</span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-3 group">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-2 group-hover:bg-secondary/20 group-hover:border-secondary transition-colors duration-300">
                                <stat.icon className="w-6 h-6 text-secondary" strokeWidth={2} />
                            </div>
                            <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                                {stat.value}
                            </span>
                            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
