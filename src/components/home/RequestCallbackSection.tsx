"use client";

import React from "react";
import { Phone, Mail, Send, Clock, CheckCircle2, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function RequestCallbackSection() {
    return (
        <section className="py-24 bg-primary text-white">
            <div className="max-w-8xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">

                    {/* Left: Info */}
                    <div className="lg:w-[45%] flex flex-col justify-center space-y-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                                <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">Expert Consultation</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-semibold text-[#F0F4E9] tracking-tight leading-tight">
                                Request a <span className="text-secondary">Call Back</span>.
                            </h2>
                            <p className="text-base text-white/80 leading-relaxed max-w-lg">
                                Submit your details and our senior financial advisers will be in touch within 24 hours to discuss your business needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <Clock className="w-5 h-5 text-secondary mb-3" />
                                <h4 className="font-bold text-white text-sm">Response Time</h4>
                                <p className="text-[10px] font-bold text-white/60 mt-1 uppercase tracking-wider">Within 24 Hours</p>
                            </div>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <Mail className="w-5 h-5 text-secondary mb-3" />
                                <h4 className="font-bold text-white text-sm">Prefer Email?</h4>
                                <p className="text-[10px] font-bold text-white/60 mt-1 uppercase tracking-wider">info@accountsbridge.com.au</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-secondary" />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">CPA Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-secondary" />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">Xero Platinum Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-[55%] flex items-center">
                        <div className="w-full bg-white p-8 md:p-12 rounded-2xl border-8 border-white/5 shadow-2xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">First name *</label>
                                        <Input placeholder="Enter your name" className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10 rounded-lg text-slate-900 placeholder:text-slate-400" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">E-mail *</label>
                                        <Input type="email" placeholder="john@example.com" className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10 rounded-lg text-slate-900 placeholder:text-slate-400" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Phone *</label>
                                    <Input type="tel" placeholder="+61 000 000 000" className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10 rounded-lg text-slate-900 placeholder:text-slate-400" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Your Message *</label>
                                    <Textarea placeholder="Tell us about your requirements..." className="min-h-[120px] bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10 rounded-lg p-4 resize-none text-slate-900 placeholder:text-slate-400" required />
                                </div>

                                <Button className="h-12 w-full bg-secondary hover:bg-secondary/90 text-slate-900 font-bold rounded-md shadow-lg transition-all hover:scale-[1.01]">
                                    Submit Request
                                    <Send size={16} className="ml-2" />
                                </Button>

                                <div className="flex items-center justify-center gap-2 opacity-50">
                                    <Shield size={10} className="text-primary" />
                                    <p className="text-[9px] font-bold text-slate-400 tracking-tight">
                                        Your data is secure and encrypted.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
