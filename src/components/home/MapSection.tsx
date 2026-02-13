"use client";

import React from "react";
import { MapPin, Navigation, Globe2, Clock, Phone } from "lucide-react";

export function MapSection() {
    const googleMapsUrl = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Level%2014%2C%20Collins%20Street%2C%20Melbourne%20VIC%203000&t=&z=14&ie=UTF8&iwloc=B&output=embed";

    return (
        <section className="relative w-full h-[620px] bg-slate-200 overflow-hidden">

            {/* Map — grayscale + branded green tint overlay */}
            <div className="absolute inset-0 grayscale opacity-60 contrast-125">
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={googleMapsUrl}
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            {/* Green tint wash over map — ties it to brand */}
            <div className="absolute inset-0 bg-primary/10 pointer-events-none z-[1]" />

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none z-[1]" />

            <div className="max-w-8xl relative z-10 mx-auto h-full px-6 md:px-12 flex items-center">

                {/* Office Info Card */}
                <div className="w-full max-w-sm bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">

                    {/* Card top accent bar — secondary yellow */}
                    <div className="h-1.5 w-full bg-secondary" />

                    <div className="p-8 space-y-7">

                        {/* Header */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
                                <Globe2 size={10} className="text-primary" />
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/60">
                                    Melbourne Office
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                                Visit our{" "}
                                <span className="text-primary">Executive Space</span>.
                            </h2>
                        </div>

                        {/* Details */}
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin size={15} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                                        Location
                                    </p>
                                    <p className="text-sm font-semibold text-slate-700 leading-snug">
                                        Level 14, Collins Street,<br />Melbourne VIC 3000
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Clock size={15} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                                        Hours
                                    </p>
                                    <p className="text-sm font-semibold text-slate-700">
                                        Mon – Fri: 9:00 AM – 6:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Phone size={15} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                                        Direct
                                    </p>
                                    <p className="text-sm font-semibold text-slate-700">
                                        +61 (0) 3 8592 1924
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA — consistent with Hero/WhoWeWorkWith */}
                        <div className="pt-2 border-t border-slate-100">
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-12 w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-slate-900 rounded-md font-bold transition-all text-sm shadow-md"
                            >
                                <Navigation size={15} />
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}