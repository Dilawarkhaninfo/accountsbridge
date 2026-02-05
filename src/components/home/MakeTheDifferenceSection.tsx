"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
    { label: "Happy Clients", value: "500+", Icon: Users, color: "text-blue-500" },
    { label: "Years Experience", value: "15+", Icon: Award, color: "text-amber-500" },
    { label: "Team Members", value: "50+", Icon: TrendingUp, color: "text-primary" },
    { label: "Success Rate", value: "100%", Icon: Target, color: "text-emerald-500" },
];

export function MakeTheDifferenceSection() {
    return (
        <section className="py-24 bg-primary overflow-hidden">
            <div className="max-w-8xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-semibold text-[#F0F4E9] tracking-tight leading-[1.1]">
                                We combine <span className="text-secondary">Expertise</span> with practical industry knowledge.
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                                Accounts Bridge brings a multi-disciplinary approach to help you meet challenges and respond to opportunities in an evolving financial landscape.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
                            {stats.map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <stat.Icon className="w-5 h-5 text-secondary" />
                                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button asChild className="h-12 px-8 bg-secondary hover:bg-secondary/90 text-slate-900 rounded-md font-semibold transition-all group shadow-lg">
                                <Link href="/contact-us">
                                    Start a Conversation
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right: Clean Visual */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-square rounded-2xl overflow-hidden border-8 border-white/5 shadow-2xl">
                            <Image
                                src="/images/team-difference.png"
                                alt="Accounts Bridge Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Simple Float Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                            <p className="text-3xl font-bold text-primary">15+</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Award Winning Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}