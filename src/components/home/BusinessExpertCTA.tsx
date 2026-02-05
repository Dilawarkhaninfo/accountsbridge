"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export function BusinessExpertCTA() {
    return (
        <section className="w-full bg-secondary py-12">
            <div className="max-w-8xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    {/* Text Content */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-center md:text-left">
                        Looking for ultimate business services expert?
                    </h2>

                    {/* CTA Button */}
                    <Button 
                        asChild 
                        className="h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-md font-bold text-base shadow-lg transition-transform hover:scale-105 shrink-0"
                    >
                        <Link href="/contact-us" className="flex items-center gap-2">
                            Get a quote
                            <MoveRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}