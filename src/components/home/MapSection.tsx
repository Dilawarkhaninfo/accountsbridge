"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Globe2, Clock, Phone } from "lucide-react";

export function MapSection() {
    // Melbourne Office Coordinates
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d144.89163!3d-37.75128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2cb4d15%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1707060000000!5m2!1sen!2sau";

    return (
        <section className="relative w-full h-[650px] overflow-hidden bg-slate-900 group">
            {/* The Map Iframe with Premium Styling Filter */}
            <div className="absolute inset-0 z-0 opacity-80 grayscale-[0.6] contrast-[1.2] invert-[0.05]">
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, filter: "brightness(0.9) contrast(1.1)" }}
                    src={googleMapsUrl}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
                {/* Overlay Vignette for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60 pointer-events-none" />
            </div>

            <div className="container relative z-10 mx-auto h-full px-6 flex items-center">
                {/* Floating Premium Office Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full max-w-md bg-white/90 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20"
                >
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/10 mb-4">
                                <Globe2 size={12} className="text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Global Headquarters</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-none">
                                Melbourne <br />
                                <span className="text-primary">Executive Office</span>
                            </h2>
                        </div>

                        {/* Stats/Quick Info Grid */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Our Location</p>
                                    <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                                        Level 14, Collins Street <br />
                                        Melbourne VIC 3000, Australia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Business Hours</p>
                                    <p className="text-sm font-semibold text-slate-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Line</p>
                                    <p className="text-sm font-semibold text-slate-700">+61 (0) 3 9000 0000</p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="pt-8 border-t border-slate-100 flex gap-4">
                            <motion.a
                                href="https://maps.google.com"
                                target="_blank"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-md btn-primary flex-1"
                            >
                                <Navigation size={18} />
                                Get Directions
                            </motion.a>
                            <motion.a
                                href="https://maps.google.com"
                                target="_blank"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all shadow-sm"
                            >
                                <ExternalLink size={20} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Custom Interactive Pin Component (Absolute on Map) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group/pin hidden lg:block">
                <div className="relative">
                    {/* Pulsing Aura */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/20 rounded-full animate-ping pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

                    {/* The Pin Point */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-16 h-16 bg-[#FECD03] rounded-[1.2rem] shadow-2xl shadow-secondary/50 flex items-center justify-center border-4 border-white transform rotate-45"
                    >
                        <MapPin className="text-slate-900 -rotate-45 w-8 h-8" fill="currentColor" />
                    </motion.div>
                </div>
            </div>

            {/* Decorative Top Branding Strip */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />
        </section>
    );
}
