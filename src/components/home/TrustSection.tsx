"use client";

import React from "react";
import { CheckCircle2, Briefcase, Users2, Trophy, Heart } from "lucide-react";

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

            {/* Primary green overlay — ties to brand instead of generic dark */}
            <div className="absolute inset-0 bg-primary/80" />

            {/* Subtle secondary glow top-right — consistent with other dark sections */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none z-[1]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none z-[1]" />

            {/* Content */}
            <div className="relative z-10 h-full max-w-8xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center">

                {/* Heading Group */}
                <div className="flex flex-col items-center gap-5 mb-16">
                    <CheckCircle2
                        className="w-16 h-16 md:w-20 md:h-20 text-secondary drop-shadow-lg"
                        strokeWidth={1.5}
                    />
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                        <span className="text-secondary block text-nowrap">
                            Doing the right thing,
                        </span>
                        <span className="text-[#F0F4E9] block text-nowrap">
                            at the right time.
                        </span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-3 group">

                            {/* Icon container — secondary/15 bg, secondary border on hover */}
                            <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-2 group-hover:bg-secondary/25 group-hover:border-secondary/50 transition-all duration-300">
                                <stat.icon
                                    className="w-6 h-6 text-secondary"
                                    strokeWidth={1.75}
                                />
                            </div>

                            <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                                {stat.value}
                            </span>
                            <span className="text-xs font-bold text-white/60 tracking-[0.2em] uppercase">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}