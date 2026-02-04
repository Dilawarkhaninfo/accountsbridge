import Link from "next/link";
import { Mail, MapPin, Phone, Clock, Facebook, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopBarProps {
    className?: string;
}

export function TopBar({ className }: TopBarProps) {
    return (
        <div className={cn("hidden md:block w-full bg-primary text-white py-2 z-50 shadow-sm relative overflow-hidden", className)}>


            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs font-semibold tracking-wide">

                {/* Left Side: Contact Info */}
                <div className="flex items-center gap-6">
                    <a
                        href="tel:1300898555"
                        className="group flex items-center gap-2 transition-all duration-300 hover:text-secondary"
                        aria-label="Call us"
                    >
                        <div className="bg-white/10 p-1 rounded-full group-hover:bg-secondary group-hover:text-primary transition-colors">
                            <Phone className="h-3 w-3 text-secondary group-hover:text-primary" />
                        </div>
                        <span className="opacity-90 group-hover:opacity-100">1300 898 555</span>
                    </a>

                    <span className="hidden lg:block h-3 w-px bg-white/20" />

                    <a
                        href="mailto:info@accountsbridge.com.au"
                        className="group flex items-center gap-2 transition-all duration-300 hover:text-secondary"
                        aria-label="Email us"
                    >
                        <div className="bg-white/10 p-1 rounded-full group-hover:bg-secondary group-hover:text-primary transition-colors">
                            <Mail className="h-3 w-3 text-secondary group-hover:text-primary" />
                        </div>
                        <span className="opacity-90 group-hover:opacity-100">info@accountsbridge.com.au</span>
                    </a>

                    <span className="hidden lg:block h-3 w-px bg-white/20" />

                    <div className="hidden lg:flex items-center gap-2 opacity-90">
                        <MapPin className="h-3.5 w-3.5 text-secondary" />
                        <span>38 Glenbarry Road, Campbellfield</span>
                    </div>
                </div>

                {/* Right Side: Office Hours & Social (Optional) */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 opacity-90">
                        <Clock className="h-3.5 w-3.5 text-secondary" />
                        <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
