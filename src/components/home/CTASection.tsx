"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Star } from "lucide-react";

export function CTASection() {
    return (
        <section className="relative py-28 w-full bg-[#0B7E3E] overflow-hidden">
            {/* --- Premium Background Elements --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-white/10 rounded-full blur-[140px] opacity-[0.3]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px] opacity-[0.1]" />
            </div>

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none z-[1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center space-y-12">

                    {/* Tagline Badge */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Your Success is Our Priority</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-[1.02]">
                            Ready to scale your <br />
                            <span className="text-secondary font-semibold">Business Potential?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                            Partner with Accounts Bridge today. We provide the strategic framework, financial clarity, and expert advisory needed for your long-term expansion.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                        <Button
                            asChild
                            variant="secondary"
                            className="btn-secondary btn-md transition-all duration-300 group"
                        >
                            <Link href="/contact-us">
                                <span className="flex items-center gap-3">
                                    Book a Free Consultation
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="ghost"
                            className="btn-md border-2 border-white/40 text-white hover:bg-white/10 hover:border-white group px-10 transition-all duration-300"
                        >
                            <Link href="/contact-us">
                                <span className="flex items-center gap-3">
                                    <PhoneCall size={18} className="group-hover:rotate-12 transition-transform" />
                                    Speak with an Advisor
                                </span>
                            </Link>
                        </Button>
                    </div>

                    {/* International Trust Footer */}
                    <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black tracking-widest uppercase text-white">No Obligation Initial Meeting</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black tracking-widest uppercase text-white">250+ Melbourne Clients</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black tracking-widest uppercase text-white">Fixed Fee Options</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
