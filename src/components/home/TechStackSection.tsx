"use client";

import React from "react";

export function TechStackSection() {
    return (
        <section className="bg-primary py-20 lg:py-28 relative overflow-hidden">

            {/* Background glows — consistent with WhyMidTier */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none z-0" />

            <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* ── LEFT: Content ── */}
                    <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                        <div className="space-y-5">
                            <span className="text-secondary font-bold tracking-[0.25em] uppercase text-xs">
                                Technology & Systems Integration
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#F0F4E9] leading-[1.1] tracking-tight">
                                Modern Accounting for Modern Businesses
                            </h2>
                            <p className="text-lg text-white/70 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                We leverage the best cloud accounting technology to provide
                                real-time insights and seamless compliance.
                            </p>
                        </div>

                        {/* No Software Notice */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-6 rounded-2xl">
                            <p className="text-white font-medium text-base flex items-center gap-3 justify-center lg:justify-start">
                                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse flex-shrink-0" />
                                No software? We&apos;ll work with you to implement the right solution.
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT: Partner Logo Cards ── */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                            {/* Xero */}
                            <div className="group bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className="h-12 w-full flex items-center justify-center mb-5">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Xero_software_logo.svg/320px-Xero_software_logo.svg.png"
                                        alt="Xero logo"
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-px w-10 bg-slate-200 group-hover:bg-[#0b3e55] group-hover:w-16 mb-4 transition-all duration-300" />
                                <span className="text-slate-500 group-hover:text-[#0b3e55] font-semibold text-xs px-3 py-1.5 rounded-full bg-slate-100 group-hover:bg-[#0b3e55]/10 transition-all duration-300">
                                    Certified Partner
                                </span>
                            </div>

                            {/* QuickBooks */}
                            <div className="group bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className="h-12 w-full flex items-center justify-center mb-5">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLKH3j_aKYxFu-eZn1NRaR7T3yIx4z2EieA&s"
                                        alt="QuickBooks logo"
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-px w-10 bg-slate-200 group-hover:bg-[#2ca01c] group-hover:w-16 mb-4 transition-all duration-300" />
                                <span className="text-slate-500 group-hover:text-[#2ca01c] font-semibold text-xs px-3 py-1.5 rounded-full bg-slate-100 group-hover:bg-[#2ca01c]/10 transition-all duration-300">
                                    Certified ProAdvisor
                                </span>
                            </div>

                            {/* MYOB */}
                            <div className="group bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className="h-12 w-full flex items-center justify-center mb-5">
                                    <img
                                        src="https://mira.au/wp-content/uploads/2023/02/myob.png"
                                        alt="MYOB logo"
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-px w-10 bg-slate-200 group-hover:bg-[#6100a5] group-hover:w-16 mb-4 transition-all duration-300" />
                                <span className="text-slate-500 group-hover:text-[#6100a5] font-semibold text-xs px-3 py-1.5 rounded-full bg-slate-100 group-hover:bg-[#6100a5]/10 transition-all duration-300">
                                    Partner
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}