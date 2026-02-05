"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Target, Lightbulb, Award, Briefcase, CheckCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Floating decorative icons configuration
const floatingIcons = [
    { Icon: TrendingUp, position: "top-[10%] left-[5%]", size: "w-16 h-16" },
    { Icon: Users, position: "top-[25%] right-[8%]", size: "w-14 h-14" },
    { Icon: Target, position: "bottom-[15%] left-[8%]", size: "w-12 h-12" },
    { Icon: Lightbulb, position: "top-[50%] left-[3%]", size: "w-10 h-10" },
    { Icon: Award, position: "bottom-[25%] right-[10%]", size: "w-14 h-14" },
    { Icon: Briefcase, position: "top-[40%] right-[5%]", size: "w-12 h-12" },
    { Icon: BarChart3, position: "bottom-[40%] left-[12%]", size: "w-10 h-10" },
];

export function MakeTheDifferenceSection() {
    return (
        <section className="relative bg-primary overflow-hidden py-20 lg:py-24">

            {/* Background Texture Grid */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-3xl" />
            </div>

            {/* Floating Decorative Icons */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {floatingIcons.map(({ Icon, position, size }, index) => (
                    <div
                        key={index}
                        className={cn("absolute opacity-[0.08]", position)}
                    >
                        <Icon className={cn(size, "text-white stroke-[1.5]")} />
                    </div>
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Left Side - Visual Composition */}
                    <div className="w-full lg:w-[45%] relative flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="relative">
                            {/* "MAKE" - Top Text */}
                            <h2 className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-black text-white tracking-tighter leading-none mb-[-1rem] md:mb-[-2rem] relative z-20">
                                MAKE
                            </h2>

                            {/* Image Container */}
                            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[360px] mx-auto lg:mx-0 my-6 md:my-8">
                                <div className="w-full h-full relative z-10">
                                    <Image
                                        src="/images/team-difference.png"
                                        alt="Accounts Bridge Team"
                                        fill
                                        className="object-cover shadow-2xl rounded-2xl border-4 border-white/10"
                                    />
                                </div>

                                {/* Decorative blob behind */}
                                <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full -z-10 opacity-60" />

                                {/* Floating Badge on Image */}
                                <div className="absolute -right-4 top-8 bg-secondary px-4 py-3 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-primary whitespace-nowrap">15+ Years</span>
                                    </div>
                                </div>

                                {/* Bottom Badge */}
                                <div className="absolute -left-4 bottom-8 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-primary whitespace-nowrap">500+ Clients</span>
                                    </div>
                                </div>

                                {/* "THE" - Overlay Text */}
                                <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                                    <span className="text-[4.5rem] md:text-[6rem] lg:text-[7rem] font-black text-white/90 tracking-tighter drop-shadow-2xl leading-none">
                                        THE
                                    </span>
                                </div>
                            </div>

                            {/* "DIFFERENCE" - Bottom Text */}
                            <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black text-white tracking-tighter leading-none mt-[-0.5rem] md:mt-[-1.5rem] relative z-20">
                                DIFFERENCE
                            </h2>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-[50%] text-white space-y-8">
                        <h3 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold leading-[1.15] tracking-tight">
                            Make Move Bold With<br />
                            <span className="text-secondary">Accounts Bridge</span>
                        </h3>

                        <div className="space-y-6 text-white text-lg md:text-xl leading-relaxed">
                            <p className="opacity-95 text-white">
                                We combine our multi-disciplinary approach with deep, practical industry knowledge to help you meet challenges and respond to opportunities.
                            </p>
                            <p className="opacity-95 text-white">
                                Connect with our team to start the conversation.
                            </p>
                        </div>

                        {/* Trust Indicators with Icons */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">500+</div>
                                    <div className="text-xs text-white/80 font-medium">Happy Clients</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                                    <Award className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">15+</div>
                                    <div className="text-xs text-white/80 font-medium">Years Experience</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                                    <Users className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">50+</div>
                                    <div className="text-xs text-white/80 font-medium">Team Members</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                                    <Target className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">100%</div>
                                    <div className="text-xs text-white/80 font-medium">Success Rate</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button
                                asChild
                                className="btn-md bg-white text-primary hover:bg-slate-100 transition-all font-bold border-none group"
                            >
                                <Link href="/contact-us" className="flex items-center gap-2">
                                    Contact us today
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}