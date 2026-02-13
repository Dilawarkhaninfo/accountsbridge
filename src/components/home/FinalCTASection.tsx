"use client";

import React from "react";
import Link from "next/link";
import { Phone, CalendarCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
    return (
        <section className="bg-white py-20 lg:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center md:text-left shadow-2xl">
                    {/* Background Decorative Blur */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none mix-blend-overlay" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* Content */}
                        <div className="max-w-2xl space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                                Ready for Accountants Who <span className="text-secondary">Actually Advise?</span>
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
                                If your business is generating over <span className="text-white font-bold">$1M</span> and you are ready for a strategic partner who actually picks up the phone, let&rsquo;s talk.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                            <Button
                                size="lg"
                                className="h-14 px-8 bg-secondary hover:bg-secondary/90 text-slate-900 rounded-md font-bold text-[15px] shadow-lg transition-all w-full sm:w-auto"
                                asChild
                            >
                                <Link href="/contact-us">
                                    <CalendarCheck2 className="mr-2 w-5 h-5" />
                                    Book Your Consultation
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="h-14 px-8 border-2 border-white/20 hover:border-white bg-transparent text-white hover:text-white hover:bg-white/10 rounded-md font-bold text-[15px] transition-all w-full sm:w-auto"
                                asChild
                            >
                                <a href="tel:0385921924">
                                    <Phone className="mr-2 w-5 h-5" />
                                    Call Us: (03) 8592 1924
                                </a>
                            </Button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
