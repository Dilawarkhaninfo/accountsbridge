"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, PhoneCall, TrendingUp } from "lucide-react";

export function CTASection() {
    return (
        <section className="relative py-24 w-full bg-[#0B7E3E] overflow-hidden">
            {/* --- Premium Background Elements --- */}

            {/* Glowing Accent Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[60%] h-[100%] bg-secondary/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -40, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] bg-black/10 rounded-full blur-[100px]"
                />
            </div>

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="max-w-5xl mx-auto text-center space-y-10">

                    {/* Tagline Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                    >
                        <TrendingUp size={16} className="text-secondary" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Your Success is Our Priority</span>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]"
                        >
                            Ready to Scale Your <br />
                            <span className="text-secondary italic">Potential?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                        >
                            Partner with Accounts Bridge today. We provide the strategic framework,
                            financial absolute clarity, and the expert advisory needed for your long-term success.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
                    >
                        <Button
                            size="lg"
                            className="h-16 px-10 text-lg font-bold rounded-xl bg-secondary hover:bg-[#E5B800] text-slate-900 shadow-2xl shadow-secondary/20 transition-all hover:scale-[1.05] active:scale-[0.95] group"
                            asChild
                        >
                            <Link href="/contact-us">
                                <span className="flex items-center gap-3">
                                    Book a Consultation
                                    <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                </span>
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-16 px-10 text-lg font-bold rounded-xl border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white transition-all group"
                            asChild
                        >
                            <Link href="/contact-us">
                                <span className="flex items-center gap-3">
                                    <PhoneCall className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                                    Speak with an Advisor
                                </span>
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Trust Indicators - Simplified for Dark Background */}
                    <div className="pt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 border-t border-white/10 opacity-60">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">No Obligation Initial Meeting</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">250+ Melbourne Clients</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Fixed Fee Options</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
