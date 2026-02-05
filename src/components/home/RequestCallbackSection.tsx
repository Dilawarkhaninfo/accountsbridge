"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, Clock, MapPin, CheckCircle2, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function RequestCallbackSection() {
    return (
        <section className="relative py-28 overflow-hidden bg-white">
            {/* --- Premium Background Elements --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-stretch gap-20">

                    {/* Left Side: Content Hierarchy */}
                    <div className="lg:w-[45%] flex flex-col justify-center space-y-10 text-left">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/50 shadow-sm"
                            >
                                <Star className="w-3.5 h-3.5 text-secondary fill-secondary animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Expert Consultation</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-[45px] font-bold text-slate-900 tracking-tight leading-[1.05]"
                            >
                                Request a <br className="hidden md:block" />
                                <span className="text-primary italic font-semibold">Call Back.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl"
                            >
                                Submit your details and our senior financial advisers will be in touch within 24 hours to discuss your business needs.
                            </motion.p>
                        </div>

                        {/* Quick Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-500 group-hover:scale-110">
                                    <Clock size={22} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-slate-900 text-sm tracking-tight">Response Time</h4>
                                    <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Within 24 Hours</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-foreground shrink-0 transition-all duration-500 group-hover:scale-110">
                                    <Mail size={22} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-slate-900 text-sm tracking-tight">Prefer Email?</h4>
                                    <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">info@accountsbridge.com.au</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Trust Badges - Refined */}
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 opacity-60">
                            <div className="flex items-center gap-2 group cursor-default">
                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <CheckCircle2 size={12} strokeWidth={3} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-primary transition-colors">CPA Certified</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <CheckCircle2 size={12} strokeWidth={3} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-primary transition-colors">Xero Platinum Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form Hierarchy */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-[55%] flex items-center"
                    >
                        <div className="w-full bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group">
                            {/* Decorative Accent */}
                            <div className="absolute top-0 left-0 w-full h-[6px] bg-secondary opacity-80" />

                            <form className="space-y-7 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First name *</label>
                                        <Input
                                            id="firstName"
                                            placeholder="Enter your name"
                                            className="h-14 bg-slate-50/50 border-slate-100 focus:bg-white focus:ring-primary/5 focus:border-primary/30 transition-all rounded-xl text-slate-900 placeholder:text-slate-300"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">E-mail *</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="h-14 bg-slate-50/50 border-slate-100 focus:bg-white focus:ring-primary/5 focus:border-primary/30 transition-all rounded-xl text-slate-900 placeholder:text-slate-300"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone *</label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+61 000 000 000"
                                        className="h-14 bg-slate-50/50 border-slate-100 focus:bg-white focus:ring-primary/5 focus:border-primary/30 transition-all rounded-xl text-slate-900 placeholder:text-slate-300"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Message *</label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your requirements..."
                                        className="min-h-[140px] bg-slate-50/50 border-slate-100 focus:bg-white focus:ring-primary/5 focus:border-primary/30 transition-all rounded-xl text-slate-900 placeholder:text-slate-300 resize-none p-5"
                                        required
                                    />
                                </div>

                                <Button
                                    className="btn-primary btn-md w-full group/btn"
                                >
                                    <span className="flex items-center justify-center gap-3 w-full">
                                        Submit Request
                                        <Send size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" strokeWidth={2.5} />
                                    </span>
                                </Button>

                                <p className="text-[10px] font-bold text-center text-slate-400 tracking-tight flex items-center justify-center gap-2">
                                    <Shield size={10} className="text-primary" />
                                    Your data is secure and encrypted according to our privacy policy.
                                </p>
                            </form>

                            {/* Subtle Background Glow inside form */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
