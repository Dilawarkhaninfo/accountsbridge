"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoImage from "../../../public/logo.png";

// --- Simplified Navigation Links with Dropdowns ---
const navLinks = [
    { label: "Home", href: "/" },
    {
        label: "About Us",
        href: "/about-us",
        items: [
            { label: "Company Overview", href: "/about-us/overview" },
            { label: "Our Approach", href: "/about-us/approach" },
        ]
    },
    {
        label: "Services",
        href: "/services",
        items: [
            { label: "Business", href: "/services/business" },
            { label: "Individual", href: "/services/individual" },
            { label: "Financial", href: "/services/financial" },
            { label: "Tax", href: "/services/tax" },
        ]
    },
    { label: "Partners", href: "/partners" },
    { label: "Our Team", href: "/our-team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact-us" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleSubMenu = (label: string) => {
        setOpenSubMenu((prev) => (prev === label ? null : label));
    };

    return (
        <nav
            className={cn(
                "sticky top-0 z-40 w-full transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-2"
                    : "bg-white border-transparent py-4"
            )}
        >
            <div className="max-w-8xl mx-auto flex items-center justify-between px-6 md:px-8">

                {/* Logo Section */}
                <Link href="/" className="relative z-50 flex items-center shrink-0">
                    <div className="relative w-64 h-16 md:w-80 md:h-24">
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
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <div key={link.label} className="relative group">
                            {link.items ? (
                                <>
                                    <div className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-600 group-hover:text-primary transition-colors rounded-md cursor-pointer group-hover:bg-slate-50">
                                        {link.label}
                                        <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                                    </div>
                                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="w-48 bg-white border border-slate-100 rounded-xl shadow-xl p-2">
                                            {link.items.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-all"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors rounded-md hover:bg-slate-50"
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button
                        className="hidden lg:flex bg-primary hover:bg-primary/90 text-white font-bold h-11 px-6 rounded-md"
                        asChild
                    >
                        <Link href="/contact-us">Book Consultation</Link>
                    </Button>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-800 hover:bg-slate-100">
                                    <Menu className="h-7 w-7" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] p-0 border-l border-slate-200 overflow-y-auto">
                                <SheetTitle className="sr-only">Navigation</SheetTitle>
                                <div className="p-6 border-b border-slate-100 bg-white sticky top-0 z-10 flex items-center justify-between">
                                    <div className="relative w-32 h-8">
                                        <Image
                                            src={LogoImage}
                                            alt="Accounts Bridge Logo"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                    <SheetClose asChild>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full">
                                            <X className="h-5 w-5" />
                                            <span className="sr-only">Close menu</span>
                                        </Button>
                                    </SheetClose>
                                </div>
                                <div className="flex flex-col p-6 space-y-2">
                                    {navLinks.map((link) => (
                                        <div key={link.label}>
                                            {link.items ? (
                                                <div className="py-2 border-b border-slate-50">
                                                    <button
                                                        onClick={() => toggleSubMenu(link.label)}
                                                        className="flex items-center justify-between w-full text-base font-bold text-slate-700 hover:text-primary py-2 transition-colors"
                                                    >
                                                        {link.label}
                                                        <ChevronDown
                                                            className={cn(
                                                                "w-5 h-5 text-slate-400 transition-transform duration-300",
                                                                openSubMenu === link.label ? "rotate-180" : ""
                                                            )}
                                                        />
                                                    </button>
                                                    <div
                                                        className={cn(
                                                            "overflow-hidden transition-all duration-300 ease-in-out",
                                                            openSubMenu === link.label ? "max-h-[500px] opacity-100 pt-2" : "max-h-0 opacity-0"
                                                        )}
                                                    >
                                                        <div className="flex flex-col space-y-1 pl-4 border-l-2 border-slate-100 ml-1">
                                                            {link.items.map((subItem) => (
                                                                <SheetClose asChild key={subItem.label}>
                                                                    <Link
                                                                        href={subItem.href}
                                                                        className="text-sm font-medium text-slate-500 hover:text-primary py-2 px-2 transition-colors block"
                                                                    >
                                                                        {subItem.label}
                                                                    </Link>
                                                                </SheetClose>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <SheetClose asChild>
                                                    <Link
                                                        href={link.href}
                                                        className="text-base font-bold text-slate-700 hover:text-primary py-3 transition-colors block border-b border-slate-50 last:border-0"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </SheetClose>
                                            )}
                                        </div>
                                    ))}
                                    <div className="pt-8 pb-10">
                                        <SheetClose asChild>
                                            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-md" asChild>
                                                <Link href="/contact-us">Book Consultation</Link>
                                            </Button>
                                        </SheetClose>
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
