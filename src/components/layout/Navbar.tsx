"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoImage from "../../../public/logo.png";

// --- Simplified Navigation Links ---
const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Partners", href: "/partners" },
    { label: "Our Team", href: "/our-team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact-us" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "sticky top-0 z-40 w-full transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-2"
                    : "bg-white border-transparent py-4"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6 md:px-8">

                {/* Logo Section - Made Larger */}
                <Link href="/" className="relative z-50 flex items-center shrink-0">
                    <div className="relative w-56 h-14 md:w-64 md:h-18">
                        <Image
                            src={LogoImage}
                            alt="Accounts Bridge Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation - Simple & Slick */}
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors rounded-md hover:bg-slate-50"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button
                        className="hidden lg:flex bg-primary hover:bg-primary/90 text-white font-bold h-11 px-6 rounded-lg"
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
                            <SheetContent side="right" className="w-[300px] p-0 border-l border-slate-200">
                                <SheetTitle className="sr-only">Navigation</SheetTitle>
                                <div className="p-6 border-b border-slate-100 bg-white">
                                    <div className="relative w-40 h-10">
                                        <Image
                                            src={LogoImage}
                                            alt="Accounts Bridge Logo"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col p-6 space-y-2">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="text-lg font-bold text-slate-700 hover:text-primary py-3 transition-colors border-b border-slate-50 last:border-0"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="pt-8">
                                        <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg" asChild>
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
