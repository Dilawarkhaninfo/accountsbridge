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
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">Our Proven Track Record</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                            Doing the right thing, <br />
                            <span className="text-secondary italic">at the right time</span>.
                        </h2>
                        <p className="text-base text-white/80 leading-relaxed font-medium">
                            Expert financial advice ensuring your business stays compliant and profitable in an ever-changing landscape.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/10">
                                <stat.icon className="w-6 h-6 text-secondary mb-4" strokeWidth={1.5} />
                                <p className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                                    {stat.value}{stat.suffix}
                                </p>
                                <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] opacity-80">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
