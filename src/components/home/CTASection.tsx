"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Star } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <div className="max-w-3xl mx-auto space-y-10">

                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Your Success is Our Priority</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                            Ready to scale your <br />
                            <span className="text-secondary">Business Potential</span>?
                        </h2>
                        <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
                            Partner with Accounts Bridge today for strategic financial clarity and expert advisory needed for your long-term expansion.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Button asChild className="h-12 px-8 bg-secondary hover:bg-secondary/90 text-slate-900 font-bold rounded-lg shadow-sm group transition-all">
                            <Link href="/contact-us" className="flex items-center gap-2">
                                Book Free Consultation
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>

                        <Button asChild variant="outline" className="h-12 px-8 border-white/20 text-white hover:bg-white/10 hover:border-white font-bold rounded-lg transition-all group">
                            <Link href="/contact-us" className="flex items-center gap-2">
                                <PhoneCall size={18} />
                                Speak with an Advisor
                            </Link>
                        </Button>
                    </div>

                    <div className="pt-12 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-40">
                        <span className="text-[9px] font-black tracking-widest uppercase">Initial Meeting Included</span>
                        <div className="w-1 h-1 rounded-full bg-secondary" />
                        <span className="text-[9px] font-black tracking-widest uppercase">250+ Melbourne Clients</span>
                        <div className="w-1 h-1 rounded-full bg-secondary" />
                        <span className="text-[9px] font-black tracking-widest uppercase">Fixed Fee Options</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
