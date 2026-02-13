"use client";

import React from "react";
import { User, Users, MessageCircle, MapPin } from "lucide-react";

const features = [
    {
        icon: User,
        title: "Dedicated Account Manager",
        description: "A dedicated account manager who knows your business inside and out."
    },
    {
        icon: Users,
        title: "Partner Oversight",
        description: "Partner oversight for high-level strategy and complex financial decisions."
    },
    {
        icon: MessageCircle,
        title: "Direct Communication",
        description: "Direct access to your team, including active WhatsApp groups for speed."
    }
];

export function HowWeWorkSection() {
    return (
        <section className="bg-[#F8F9FA] py-24 lg:py-32 overflow-hidden relative">

            {/* Background glows — consistent with ServicesGrid / WhoWeWorkWith */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] -mr-40 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

            <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Label */}
                <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-2 bg-primary/8 text-primary text-xs font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-primary/15">
                        Our Process
                    </span>
                </div>

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-6 space-y-5">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.08] tracking-tight">
                        How We Work
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed font-medium">
                        The biggest pain point in our industry is the{" "}
                        <span className="text-slate-800 font-bold">&ldquo;communication void.&rdquo;</span>{" "}
                        We fixed it. When you join Accounts Bridge, you aren&apos;t assigned a ticket
                        number, you are assigned a{" "}
                        <span className="text-primary font-bold">Dedicated Finance Team</span>.
                    </p>
                </div>

                {/* Divider with label */}
                <div className="flex items-center justify-center gap-4 mb-14">
                    <div className="h-px w-16 bg-slate-200" />
                    <p className="text-slate-400 font-semibold uppercase tracking-[0.2em] text-xs">
                        Every client receives
                    </p>
                    <div className="h-px w-16 bg-slate-200" />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left relative overflow-hidden"
                        >
                            {/* Top accent bar on hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Step number */}
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                                0{index + 1}
                            </span>

                            {/* Icon — secondary bg default, primary bg on hover */}
                            <div className="w-14 h-14 bg-secondary/15 rounded-xl flex items-center justify-center mb-5 shrink-0 group-hover:bg-primary transition-all duration-300">
                                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-500 leading-relaxed text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Melbourne HQ Block */}
                <div className="bg-primary rounded-3xl p-8 md:p-14 lg:p-16 relative overflow-hidden shadow-xl">

                    {/* Decorative blobs */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
                        <svg
                            className="absolute right-0 bottom-0 w-72 h-72 opacity-[0.04]"
                            viewBox="0 0 200 200"
                            fill="none"
                        >
                            <circle cx="160" cy="160" r="120" fill="white" />
                            <circle cx="40" cy="40" r="80" fill="white" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

                        {/* Icon badge */}
                        <div className="shrink-0">
                            <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-white/10">
                                <MapPin className="w-10 h-10 text-primary" strokeWidth={2} />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="space-y-4 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#F0F4E9] leading-tight">
                                Melbourne HQ.{" "}
                                <span className="text-secondary">National Reach.</span>
                            </h3>
                            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-medium">
                                Our headquarters are in{" "}
                                <span className="text-white font-bold underline decoration-secondary decoration-4 underline-offset-4">
                                    Melbourne
                                </span>
                                , but our clients operate across Australia. Cloud systems mean
                                geography is just proximity to good advice. Whether you&apos;re in
                                Sydney, Brisbane, Perth, or regional Victoria, you get the same
                                dedicated account manager, the same partner oversight, and the same
                                WhatsApp group model.
                            </p>

                            {/* Location pills */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                                {["Melbourne", "Sydney", "Brisbane", "Perth", "Regional VIC"].map((city) => (
                                    <span
                                        key={city}
                                        className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white text-xs font-semibold rounded-full transition-all duration-200"
                                    >
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}