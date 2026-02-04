"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, ChevronRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import LogoImage from "../../../public/logo.png";

// --- Navigation Data Structure ---
const navStructure = {
    individuals: {
        label: "Individuals",
        href: "/services/individuals",
        items: [
            { title: "Personal Tax Returns", href: "/services/individuals/tax-returns", description: "Seamless preparation and lodgement." },
            { title: "Tax Planning", href: "/services/individuals/tax-planning", description: "Strategies to minimize liability." },
            { title: "Capital Gains Tax", href: "/services/individuals/capital-gains", description: "Property and asset advice." },
            { title: "Investment & Property", href: "/services/individuals/investment", description: "Maximizing returns on investments." },
            { title: "Audit Assistance", href: "/services/individuals/audit", description: "Support during ATO reviews." },
        ]
    },
    business: {
        label: "Business",
        href: "/services/business",
        groups: [
            {
                heading: "Business Accounting",
                items: [
                    { title: "Accounting & Bookkeeping", href: "/services/business/bookkeeping" },
                    { title: "Payroll Services", href: "/services/business/payroll" },
                    { title: "Cost Accounting", href: "/services/business/cost-accounting" },
                    { title: "Internal Audits", href: "/services/business/internal-audits" },
                    { title: "Grant Exploration", href: "/services/business/grants" },
                ]
            },
            {
                heading: "Business Taxation",
                items: [
                    { title: "Company Tax Planning", href: "/services/business/tax-planning" },
                    { title: "GST & Indirect Taxes", href: "/services/business/gst" },
                    { title: "International Taxation", href: "/services/business/international" },
                    { title: "BAS & Compliance", href: "/services/business/bas" },
                    { title: "ATO Correspondence", href: "/services/business/ato" },
                ]
            },
            {
                heading: "Business Operations",
                items: [
                    { title: "Financial Reporting", href: "/services/business/reporting" },
                    { title: "Cash Flow Management", href: "/services/business/cash-flow" },
                    { title: "Budgeting & Forecasting", href: "/services/business/budgeting" },
                    { title: "Document Management", href: "/services/business/docs" },
                ]
            }
        ]
    },
    advisory: {
        label: "Advisory & Growth",
        href: "/services/advisory",
        groups: [
            {
                heading: "Strategic Advisory",
                items: [
                    { title: "Business Advisory & Planning", href: "/services/advisory/planning" },
                    { title: "Growth Strategy", href: "/services/advisory/growth" },
                    { title: "Risk Assessment", href: "/services/advisory/risk" },
                ]
            },
            {
                heading: "Financial Structuring",
                items: [
                    { title: "Financial Structuring", href: "/services/advisory/structuring" },
                    { title: "Company Valuation", href: "/services/advisory/valuation" },
                    { title: "Investment Advisory", href: "/services/advisory/investment" },
                    { title: "Financing (Local & Offshore)", href: "/services/advisory/financing" },
                ]
            }
        ]
    },
    compliance: {
        label: "Tax & Compliance",
        href: "/services/compliance",
        groups: [
            {
                heading: "Tax Services",
                items: [
                    { title: "Income Tax Planning", href: "/services/compliance/planning" },
                    { title: "GST & Indirect Taxes", href: "/services/compliance/gst" },
                    { title: "International Tax", href: "/services/compliance/international" },
                    { title: "Charity Taxation", href: "/services/compliance/charity" },
                ]
            },
            {
                heading: "Audits & Disputes",
                items: [
                    { title: "ATO & SRO Dispute Resolution", href: "/services/compliance/disputes" },
                    { title: "Penalty Remission", href: "/services/compliance/penalty" },
                    { title: "Objections & Appeals", href: "/services/compliance/appeals" },
                    { title: "Settlement Negotiations", href: "/services/compliance/settlement" },
                    { title: "Statutory Demands", href: "/services/compliance/statutory" },
                ]
            }
        ]
    },
    resources: {
        label: "Resources & Tools",
        href: "/resources",
        items: [
            { title: "Tax Guides & Articles", href: "/resources/guides" },
            { title: "Knowledge Hub", href: "/resources/knowledge" },
            { title: "ATO Updates", href: "/resources/ato-updates" },
            { title: "Tools & Calculators", href: "/resources/calculators" },
            { title: "FAQs", href: "/resources/faq" },
        ]
    },
    about: {
        label: "About",
        href: "/about-us",
        items: [
            { title: "Company Overview", href: "/company-overview", description: "Our history and mission." },
            { title: "Our Approach", href: "/our-approach", description: "How we work with you." },
            { title: "Partners & Affiliations", href: "/partners", description: "Our trusted network." },
            { title: "Careers", href: "/careers", description: "Join our expert team." },
        ]
    }
};

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Helper to determine if we are in mega-menu mode (groups) or simple list
    const isMegaMenu = (key: string) => 'groups' in navStructure[key as keyof typeof navStructure];

    return (
        <nav
            className={cn(
                "sticky top-0 z-40 w-full transition-all duration-500 ease-in-out",
                isScrolled ? "py-2" : "py-0 bg-white border-b border-slate-100"
            )}
        >
            <div
                className={cn(
                    "relative mx-auto transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex items-center justify-between container",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm rounded-full py-2.5 px-6 border border-slate-200/60 mt-2"
                        : "px-6 md:px-8 py-5"
                )}
            >
                {/* Logo Section */}
                <Link href="/" className="relative z-50 flex items-center gap-2 shrink-0 mr-8">
                    <div
                        className={cn(
                            "relative transition-all duration-300",
                            isScrolled ? "w-32 h-9" : "w-40 h-10 md:w-44 md:h-12"
                        )}
                    >
                        <Image
                            src={LogoImage}
                            alt="Accounts Bridge Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1 flex-1 justify-center relative">
                    {Object.entries(navStructure).map(([key, section]) => (
                        <div
                            key={key}
                            className="relative group"
                            onMouseEnter={() => setHoveredItem(key)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link
                                href={section.href}
                                className={cn(
                                    "flex items-center px-4 py-2.5 text-[15px] font-medium transition-colors rounded-md",
                                    hoveredItem === key ? "text-primary bg-slate-50" : "text-slate-700 hover:text-primary hover:bg-slate-50",
                                    isScrolled ? "text-sm" : "text-[15px]"
                                )}
                            >
                                {section.label}
                                <ChevronRight className={cn("ml-1 w-3.5 h-3.5 transition-transform duration-200 rotate-90 opacity-40", hoveredItem === key && "opacity-100")} />
                            </Link>

                            {/* Dropdown Menu - Standard Absolute Positioning */}
                            <div
                                className={cn(
                                    "absolute top-full left-0 pt-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-out transform group-hover:translate-y-0 translate-y-2 z-50",
                                    "min-w-max"
                                )}
                            >
                                <div className={cn(
                                    "bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden",
                                    isMegaMenu(key) ? "p-6 grid gap-8" : "p-2 w-64"
                                )}>
                                    {/* Content Rendering */}
                                    {'groups' in section ? (
                                        <div className={cn(
                                            "grid",
                                            (section as any).groups.length > 2 ? "grid-cols-2 w-[600px]" : "grid-cols-2 w-[500px]"
                                        )}>
                                            {(section as any).groups.map((group: any, idx: number) => (
                                                <div key={idx} className="space-y-3">
                                                    <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2 mb-2">
                                                        {group.heading}
                                                    </h4>
                                                    <ul className="space-y-1.5">
                                                        {group.items.map((item: any) => (
                                                            <li key={item.title}>
                                                                <Link
                                                                    href={item.href}
                                                                    className="block text-[14px] text-slate-600 hover:text-primary font-medium p-1.5 rounded-md hover:bg-slate-50 transition-colors"
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <ul className="flex flex-col gap-1">
                                            {(section as any).items.map((item: any) => (
                                                <li key={item.title}>
                                                    <Link
                                                        href={item.href}
                                                        className="group/item flex flex-col px-3 py-2.5 hover:bg-slate-50 rounded-md transition-colors"
                                                    >
                                                        <span className="text-[14px] font-semibold text-slate-800 group-hover/item:text-primary transition-colors">
                                                            {item.title}
                                                        </span>
                                                        {item.description && (
                                                            <span className="text-xs text-slate-500 mt-0.5 leading-snug">
                                                                {item.description}
                                                            </span>
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4 shrink-0">
                    <Button
                        className={cn(
                            "hidden lg:flex font-semibold shadow-md transition-all duration-300",
                            isScrolled
                                ? "bg-primary hover:bg-primary/90 text-white rounded-md h-9 px-5 text-sm"
                                : "bg-primary hover:bg-primary/90 text-white rounded-md h-11 px-6 text-base"
                        )}
                        asChild
                    >
                        <Link href="/contact-us">Book Consultation</Link>
                    </Button>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-800 hover:bg-slate-100">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto z-[60] p-0 border-l border-slate-200">
                                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                                <div className="p-6 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm sticky top-0 z-10">
                                    <div className="relative w-36 h-8">
                                        <Image
                                            src={LogoImage}
                                            alt="Accounts Bridge Logo"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col p-6 space-y-6">
                                    <Accordion type="single" collapsible className="w-full space-y-1">
                                        {Object.entries(navStructure).map(([key, section]) => (
                                            <AccordionItem key={key} value={key} className="border-b border-slate-100 last:border-0">
                                                <AccordionTrigger className="text-[16px] font-semibold text-slate-800 hover:no-underline hover:text-primary py-4">
                                                    {section.label}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    {'groups' in section ? (
                                                        <div className="pl-2 space-y-6 pt-2 pb-4">
                                                            {(section as any).groups.map((group: any, i: number) => (
                                                                <div key={i}>
                                                                    <h5 className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-3">{group.heading}</h5>
                                                                    <div className="pl-3 border-l-2 border-slate-100 space-y-2">
                                                                        {group.items.map((item: any) => (
                                                                            <Link key={item.title} href={item.href} className="block text-sm text-slate-600 font-medium py-1 hover:text-primary transition-colors">
                                                                                {item.title}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="pl-4 space-y-2 pt-2 pb-4">
                                                            {(section as any).items.map((item: any) => (
                                                                <Link key={item.title} href={item.href} className="flex flex-col py-2">
                                                                    <span className="text-sm font-medium text-slate-700">{item.title}</span>
                                                                    {item.description && <span className="text-xs text-slate-400 mt-0.5">{item.description}</span>}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                    <div className="pt-4 border-t border-slate-100">
                                        <Button className="w-full shadow-lg text-lg h-12 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold" size="lg" asChild>
                                            <Link href="/contact-us">Book Consultation</Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
