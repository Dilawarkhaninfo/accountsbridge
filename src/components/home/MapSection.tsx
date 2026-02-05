"use client";

import React from "react";
import { MapPin, Navigation, Globe2, Clock, Phone } from "lucide-react";

export function MapSection() {
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d144.89163!3d-37.75128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2cb4d15%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1707060000000!5m2!1sen!2sau";

    return (
        <section className="relative w-full h-[600px] bg-slate-100 overflow-hidden">
            {/* Simple Map */}
            <div className="absolute inset-0 grayscale opacity-70 contrast-125">
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={googleMapsUrl}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            <div className="container relative z-10 mx-auto h-full px-6 flex items-center">
                {/* Minimal Office Card */}
                <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                    <div className="space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-4">
                                <Globe2 size={10} className="text-primary" />
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Melbourne Office</span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-none">
                                Visit our <span className="text-primary">Executive Space</span>.
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Location</p>
                                    <p className="text-sm font-semibold text-slate-700">Level 14, Collins Street, Melbourne VIC 3000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock size={18} className="text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Hours</p>
                                    <p className="text-sm font-semibold text-slate-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone size={18} className="text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Direct</p>
                                    <p className="text-sm font-semibold text-slate-700">+61 (0) 3 9000 0000</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-50">
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                className="h-12 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-all text-sm shadow-sm"
                            >
                                <Navigation size={16} />
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
