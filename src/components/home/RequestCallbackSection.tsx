"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function RequestCallbackSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[#F8F9FA] z-0" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/2 hidden lg:block" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-stretch gap-16">

                    {/* Left Side: Content & Info */}
                    <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                            >
                                <Phone size={14} className="text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Get Expert Advice</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold text-[#1A202C] leading-tight"
                            >
                                Request a <span className="text-primary italic">call back.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-600 leading-relaxed max-w-xl"
                            >
                                Would you like to speak to one of our financial advisers over the phone? Just submit your details and we&apos;ll be in touch shortly.
                            </motion.p>
                        </div>

                        {/* Quick Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Clock size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1A202C] text-sm">Response Time</h4>
                                    <p className="text-xs text-slate-500 mt-1">Within 24 business hours</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm"
                            >
                                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                                    <Mail size={20} className="text-secondary-foreground" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1A202C] text-sm">Prefer Email?</h4>
                                    <p className="text-xs text-slate-500 mt-1">info@accountsbridge.com.au</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-6 pt-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-primary" />
                                <span className="text-xs font-bold uppercase tracking-tighter">CPA Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-primary" />
                                <span className="text-xs font-bold uppercase tracking-tighter">Xero Platinum Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                            {/* Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary" />

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-semibold text-[#1A202C]">First name *</label>
                                        <Input
                                            id="firstName"
                                            placeholder="Enter your name"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-primary/20 focus:border-primary transition-all rounded-md"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-[#1A202C]">E-mail *</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-primary/20 focus:border-primary transition-all rounded-md"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-[#1A202C]">Phone *</label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+61 000 000 000"
                                        className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-primary/20 focus:border-primary transition-all rounded-md"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-[#1A202C]">Your Message *</label>
                                    <Textarea
                                        id="message"
                                        placeholder="How can we help you?"
                                        className="min-h-[120px] bg-slate-50 border-slate-200 focus:bg-white focus:ring-primary/20 focus:border-primary transition-all rounded-md resize-none"
                                        required
                                    />
                                </div>

                                <Button
                                    className="w-full h-14 text-lg font-bold bg-primary hover:bg-[#075A2C] text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99] group"
                                >
                                    <span className="flex items-center gap-2">
                                        Submit Request
                                        <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                </Button>

                                <p className="text-[11px] text-center text-slate-400 italic">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
