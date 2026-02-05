"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star, Zap, Layers, BookOpen, FileText, RefreshCw, Leaf } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Specified Image Imports
import HeroImage1 from "../../../public/images/hero-image-4.png";

const partners = [
    { name: "Xero", icon: <Zap size={18} className="fill-current" /> },
    { name: "MYOB", icon: <Layers size={18} /> },
    { name: "QuickBooks", icon: <BookOpen size={18} /> },
    { name: "HubDoc", icon: <FileText size={18} /> },
    { name: "Dext", icon: <RefreshCw size={18} /> },
    { name: "Sage", icon: <Leaf size={18} /> },
];

export function HeroSection() {
    return (
        <section className="relative w-full bg-white pt-20 pb-12 overflow-hidden">
            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                                <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                    Strategic Advisory & Accounting
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                                Strategic Financial Advice for <span className="text-primary italic">Growing</span> Businesses
                            </h1>

                            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                                Your partner in accounting, tax compliance, and long-term business growth. We help you navigate complexity with confidence and clarity.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all shadow-sm" asChild>
                                    <Link href="/contact-us">
                                        Book Consultation
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>

                                <Button variant="outline" className="h-12 px-8 border-slate-200 text-slate-600 rounded-lg font-semibold hover:bg-slate-50 transition-all" asChild>
                                    <Link href="/services">
                                        Our Services
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Social Proof */}
                        <div className="pt-8 flex flex-col gap-4 border-t border-slate-100 w-full">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                Trusted by 250+ Melbourne Businesses
                            </p>
                            <div className="flex items-center gap-1 text-yellow-500">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                            </div>
                        </div>
                    </div>

                    {/* Right: Modern Simple Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 shadow-xl">
                            <Image
                                src={HeroImage1}
                                alt="Strategic Financial Advice"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Simplified Technology Marquee */}
                <div className="mt-20 pt-10 border-t border-slate-100">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap shrink-0">
                            Our Technology Stack
                        </span>

                        <div className="relative flex-1 overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
                            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

                            <motion.div
                                className="flex items-center gap-12 whitespace-nowrap py-2"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {[...partners, ...partners].map((partner, i) => (
                                    <div key={i} className="flex items-center gap-2.5 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                        <div className="text-slate-900">
                                            {partner.icon}
                                        </div>
                                        <span className="text-sm font-bold tracking-tight text-slate-900">
                                            {partner.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}