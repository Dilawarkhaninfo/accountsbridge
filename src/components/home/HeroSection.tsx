"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

// Inspiration Image: H&R Block Style
import HeroImage1 from "../../../public/images/hero-image-4.png";

export function HeroSection() {
    return (
        <section className="relative w-full bg-primary py-12 lg:py-10 overflow-hidden">
            <div className="max-w-8xl relative z-10 mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ">

                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-8 text-white">

                        {/* Rating Component */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                                <span className="text-sm font-bold mr-1">4.7</span>
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 text-secondary fill-secondary" />
                                ))}
                            </div>
                            <span className="text-sm text-white/80 font-medium">(7,109 reviews)</span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-[50px] font-semibold tracking-tight text-[#F0F4E9] leading-[1.1]">
                                Strategic Accounting for Australian Businesses Growing from <span className="text-secondary">$1M to $5M</span>.
                            </h1>

                            <div className="space-y-4 text-base text-white/80 leading-relaxed max-w-xl font-medium">
                                <p className="text-white/80">
                                    If your business is doing $1M or more in revenue, basic compliance isn’t enough anymore. You need accountants who understand growth, not just tax returns.
                                </p>
                                <p className="text-white/80">
                                    Accounts Bridge is a mid-tier accounting firm based in Melbourne, built for companies that have outgrown solo accountant but don’t want to be lost inside a Big Four system.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button className="h-12 px-8 bg-secondary hover:bg-secondary/90 text-slate-900 rounded-md font-bold text-[15px] shadow-lg transition-all" asChild>
                                    <Link href="/contact-us">
                                        Book a Consultation
                                    </Link>
                                </Button>

                                <Button variant="outline" className="h-12 px-8 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white rounded-md font-bold text-[15px] border-2 transition-all shadow-none" asChild>
                                    <Link href="/services">
                                        See How We Work
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Premium Image following H&R Block layout */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[5/4] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-8 border-white/5 shadow-2xl transition-transform hover:scale-[1.02] duration-700">
                            <Image
                                src={HeroImage1}
                                alt="Expert Accounting Advice"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Subtle Glow */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}