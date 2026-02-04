"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export function MapSection() {
    // Current Melbourne Office Coordinates (Placeholder for Broadmeadows/Melbourne area as seen in image)
    const mapAddress = "Melbourne, Victoria, Australia";
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_API_KEY&q=${encodeURIComponent(mapAddress)}&zoom=11`;

    // Note: Since I don't have the user's API key, I'll use a standard embed link that doesn't strictly require one for basic viewing, 
    // or a styled placeholder that looks like the image.
    // For the best "Expert" look, I'll provide an iframe with a descriptive overlay.

    return (
        <section className="relative w-full h-[500px] overflow-hidden group">
            {/* The Map Iframe */}
            <div className="absolute inset-0 z-0 grayscale-[0.2] contrast-[1.1]">
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d144.89163!3d-37.75128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2cb4d15%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1707060000000!5m2!1sen!2sau"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            {/* Custom Overlay (As per image) */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2"
                >
                    {/* Label Tag */}
                    <div className="bg-[#0B7E3E] text-white px-6 py-2 rounded-full shadow-xl flex items-center gap-2 border border-white/20">
                        <span className="text-sm font-bold tracking-tight">melbourne office</span>
                    </div>

                    {/* Pin Illustration */}
                    <div className="relative">
                        {/* Animated Pulses */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FECD03]/40 rounded-full animate-ping" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#FECD03]/20 rounded-full animate-pulse" />

                        {/* The Actual Pin Point */}
                        <div className="relative w-14 h-14 bg-[#FECD03] rounded-sm shadow-2xl flex items-center justify-center border-2 border-white transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-700">
                            <MapPin className="text-[#1A202C] -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700 h-8 w-8" fill="currentColor" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Action Button (Lower Right) */}
            <div className="absolute bottom-8 right-8 z-10 flex flex-col gap-3">
                <motion.a
                    href="https://goo.gl/maps/placeholder"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow-xl pointer-events-auto border border-slate-100 group/link"
                >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Navigation size={16} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Directions</p>
                        <p className="text-sm font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                            Open in Google Maps
                            <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </p>
                    </div>
                </motion.a>
            </div>

            {/* Bottom Brand Strip */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary z-10" />
        </section>
    );
}
