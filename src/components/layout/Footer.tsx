"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Instagram } from "lucide-react";
import LogoImage from "../../../public/logo.png";
import { cn } from "@/lib/utils";

const footerData = {
    services: [
        { label: "Business Advisory", href: "/services/business" },
        { label: "Taxation & Compliance", href: "/services/compliance" },
        { label: "Accounting & Bookkeeping", href: "/services/business/bookkeeping" },
        { label: "Growth Strategy", href: "/services/advisory/growth" },
        { label: "Payroll Services", href: "/services/business/payroll" },
    ],
    company: [
        { label: "About Us", href: "/about-us" },
        { label: "Our Approach", href: "/our-approach" },
        { label: "Partners & Affiliations", href: "/partners" },
        { label: "Knowledge Hub", href: "/resources/knowledge" },
        { label: "Careers", href: "/careers" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Accessibility", href: "/accessibility" },
    ]
};

export function Footer() {
    return (
        <footer className="relative bg-[#1A202C] text-white overflow-hidden">
            {/* Top Brand Strip */}
            <div className="h-2 w-full bg-secondary" />

            <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Column 1: Brand & Bio */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="inline-block">
                            <div className="relative w-48 h-14 brightness-0 invert">
                                <Image
                                    src={LogoImage}
                                    alt="Accounts Bridge Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                            Strategic finance partners for growing businesses. We provide the stability and clarity needed to navigate complex financial landscapes with absolute precision.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Linkedin, href: "#", name: "LinkedIn" },
                                { icon: Facebook, href: "#", name: "Facebook" },
                                { icon: Instagram, href: "#", name: "Instagram" },
                                { icon: Twitter, href: "#", name: "Twitter" }
                            ].map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">
                            Expertise
                        </h4>
                        <ul className="space-y-4">
                            {footerData.services.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-slate-400 hover:text-white transition-colors flex items-center group">
                                        <ArrowRight size={12} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {footerData.company.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-slate-400 hover:text-white transition-colors flex items-center group">
                                        <ArrowRight size={12} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary text-center lg:text-left">
                                Head Office
                            </h4>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                        <MapPin size={20} className="text-primary" />
                                    </div>
                                    <div className="text-sm leading-relaxed text-slate-300">
                                        38 Glenbarry Road, <br />
                                        Campbellfield, VIC 3061, Australia
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                        <Phone size={20} className="text-primary" />
                                    </div>
                                    <div className="text-sm text-slate-300 font-semibold">
                                        (03) 8592 1924
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                        <Mail size={20} className="text-primary" />
                                    </div>
                                    <div className="text-sm text-slate-300">
                                        info@accountsbridge.com.au
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-primary hover:bg-[#075A2C] text-white rounded-xl text-sm font-bold transition-all hover:scale-[1.02] shadow-lg shadow-primary/20">
                                Get Directions
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} Accounts Bridge (Australia) Pty Ltd. <br className="md:hidden" />
                        ABN: 12 345 678 910. All rights reserved.
                    </p>

                    <ul className="flex items-center gap-6">
                        {footerData.legal.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Background Decorative Blob */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
        </footer>
    );
}
