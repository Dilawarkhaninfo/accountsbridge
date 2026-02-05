"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Instagram, Star } from "lucide-react";
import LogoImage from "../../../public/logo.png";

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
        <footer className="relative bg-[#0F172A] text-white overflow-hidden">
            {/* Top Brand Strip */}
            <div className="h-1.5 w-full bg-secondary" />

            {/* --- Premium Background Decor --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Column 1: Brand & Identity */}
                    <div className="lg:col-span-4 space-y-10">
                        <Link href="/" className="inline-block group">
                            <div className="relative w-48 h-12 brightness-0 invert transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src={LogoImage}
                                    alt="Accounts Bridge Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>

                        <p className="text-slate-400 text-base leading-relaxed max-w-sm font-medium">
                            Strategic finance partners for growing businesses. We provide the stability and clarity needed to navigate complex financial landscapes with absolute precision.
                        </p>

                        <div className="flex items-center gap-3">
                            {[
                                { icon: Linkedin, href: "#", name: "LinkedIn" },
                                { icon: Facebook, href: "#", name: "Facebook" },
                                { icon: Instagram, href: "#", name: "Instagram" },
                                { icon: Twitter, href: "#", name: "Twitter" }
                            ].map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary/50 transition-all duration-300 group/social"
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} className="group-hover/social:scale-110 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-2">
                            <Star size={12} className="text-secondary fill-secondary" />
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                                Expertise
                            </h4>
                        </div>
                        <ul className="space-y-4">
                            {footerData.services.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-slate-400 hover:text-white transition-all flex items-center group font-medium text-[15px]">
                                        <div className="w-0 h-0.5 bg-secondary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-2">
                            <Star size={12} className="text-secondary fill-secondary" />
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                                Company
                            </h4>
                        </div>
                        <ul className="space-y-4">
                            {footerData.company.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-slate-400 hover:text-white transition-all flex items-center group font-medium text-[15px]">
                                        <div className="w-0 h-0.5 bg-secondary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Premium Contact Card */}
                    <div className="lg:col-span-4 lg:pl-4">
                        <div className="bg-white/[0.03] backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 space-y-8 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-50" />

                            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-secondary text-center lg:text-left">
                                Head Office
                            </h4>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                                        <MapPin size={20} strokeWidth={2.5} />
                                    </div>
                                    <div className="text-sm leading-relaxed text-slate-300 font-medium">
                                        38 Glenbarry Road, <br />
                                        Campbellfield, VIC 3061, Australia
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                                        <Phone size={20} strokeWidth={2.5} />
                                    </div>
                                    <div className="text-[15px] font-bold text-white tracking-tight">
                                        (03) 8592 1924
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                                        <Mail size={20} strokeWidth={2.5} />
                                    </div>
                                    <div className="text-sm text-slate-300 font-medium">
                                        info@accountsbridge.com.au
                                    </div>
                                </div>
                            </div>

                            <button className="btn-primary btn-sm w-full group/btn">
                                Get Directions
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <p className="text-slate-500 text-[11px] font-bold tracking-tight">
                            © {new Date().getFullYear()} Accounts Bridge (Australia) Pty Ltd.
                            <span className="mx-2 font-normal opacity-20 hidden md:inline">|</span>
                            <br className="md:hidden" />
                            ABN: 12 345 678 910
                        </p>
                    </div>

                    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        {footerData.legal.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} className="text-slate-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
