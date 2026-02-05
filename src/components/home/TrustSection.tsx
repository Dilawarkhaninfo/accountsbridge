"use client";

import React from "react";
import { Shield, Users, Trophy, Smile, Star } from "lucide-react";

const stats = [
    { label: "Cases Completed", value: 321, icon: Shield, suffix: "" },
    { label: "Consultants", value: 27, icon: Users, suffix: "" },
    { label: "Awards Winning", value: 125, icon: Trophy, suffix: "" },
    { label: "Satisfied Customers", value: 100, icon: Smile, suffix: "%" },
];

export function TrustSection() {
    return (
        <section className="relative py-28 bg-[#0B7E3E] overflow-hidden text-white">
            {/* Premium Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[70%] bg-white/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-black/10 rounded-full blur-[100px]" />
            </div>

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content Hierarchy */}
                    <div className="flex flex-col items-start text-left space-y-8 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-2">
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/90">Our Proven Track Record</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[45px] font-bold text-white tracking-tight leading-[1.05]">
                            Doing the right thing, <br className="hidden md:block" />
                            <span className="text-secondary font-semibold">at the right time.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                            We provide accurate, timely, and strategic financial advice to ensure your business stays compliant and profitable in an ever-changing landscape.
                        </p>
                    </div>

                    {/* Right Side: Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="group relative flex flex-col items-center md:items-start p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                            >
                                {/* Gradient Inner Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10 flex flex-col items-center md:items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary mb-5 shadow-inner">
                                        <stat.icon size={26} strokeWidth={2} />
                                    </div>
                                    <div className="text-4xl lg:text-5xl font-black tracking-tighter mb-2 text-white">
                                        {stat.value}{stat.suffix}
                                    </div>
                                    <div className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] opacity-90">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
