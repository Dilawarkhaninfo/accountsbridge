"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Target, Lightbulb, Award, Briefcase, CheckCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Floating decorative icons configuration
const floatingIcons = [
    { Icon: TrendingUp, position: "top-[10%] left-[5%]", delay: 0, size: "w-16 h-16" },
    { Icon: Users, position: "top-[25%] right-[8%]", delay: 0.2, size: "w-14 h-14" },
    { Icon: Target, position: "bottom-[15%] left-[8%]", delay: 0.4, size: "w-12 h-12" },
    { Icon: Lightbulb, position: "top-[50%] left-[3%]", delay: 0.3, size: "w-10 h-10" },
    { Icon: Award, position: "bottom-[25%] right-[10%]", delay: 0.5, size: "w-14 h-14" },
    { Icon: Briefcase, position: "top-[40%] right-[5%]", delay: 0.6, size: "w-12 h-12" },
    { Icon: BarChart3, position: "bottom-[40%] left-[12%]", delay: 0.7, size: "w-10 h-10" },
];

export function MakeTheDifferenceSection() {
    return (
        <section className="relative bg-primary overflow-hidden py-20 lg:py-24">

            {/* Background Texture Grid */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

            {/* Ambient Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-3xl" />
            </div>

            {/* Floating Decorative Icons */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {floatingIcons.map(({ Icon, position, delay, size }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                        whileInView={{ opacity: 0.08, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay, ease: "easeOut" }}
                        className={cn("absolute", position)}
                    >
                        <Icon className={cn(size, "text-white stroke-[1.5]")} />
                    </motion.div>
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Left Side - Visual Composition */}
                    <div className="w-full lg:w-[45%] relative flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* "MAKE" - Top Text */}
                            <h2 className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-black text-white tracking-tighter leading-none mb-[-1rem] md:mb-[-2rem] relative z-20">
                                MAKE
                            </h2>

                            {/* Image Container */}
                            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[360px] mx-auto lg:mx-0 my-6 md:my-8 group">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="w-full h-full relative z-10"
                                >
                                    <Image
                                        src="/images/team-difference.png"
                                        alt="Accounts Bridge Team"
                                        fill
                                        className="object-cover shadow-2xl rounded-2xl border-4 border-white/10"
                                    />
                                </motion.div>

                                {/* Decorative blob behind */}
                                <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full -z-10 opacity-60 animate-pulse" />

                                {/* Floating Badge on Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="absolute -right-4 top-8 bg-secondary px-4 py-3 rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-primary whitespace-nowrap">15+ Years</span>
                                    </div>
                                </motion.div>

                                {/* Bottom Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="absolute -left-4 bottom-8 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-primary whitespace-nowrap">500+ Clients</span>
                                    </div>
                                </motion.div>

                                {/* "THE" - Overlay Text */}
                                <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                                    <span className="text-[4.5rem] md:text-[6rem] lg:text-[7rem] font-black text-white/90 tracking-tighter drop-shadow-2xl leading-none">
                                        THE
                                    </span>
                                </div>
                            </div>

                            {/* "DIFFERENCE" - Bottom Text */}
                            <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black text-white tracking-tighter leading-none mt-[-0.5rem] md:mt-[-1.5rem] relative z-20">
                                DIFFERENCE
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-[50%] text-white space-y-8"
                    >
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight">
                            Make Move Bold With<br />
                            <span className="text-secondary">Accounts Bridge</span>
                        </h3>

                        <div className="space-y-6 text-green-50/90 text-lg md:text-xl leading-relaxed">
                            <p>
                                We combine our multi-disciplinary approach with deep, practical industry knowledge to help you meet challenges and respond to opportunities.
                            </p>
                            <p>
                                Connect with our team to start the conversation.
                            </p>
                        </div>

                        {/* Trust Indicators with Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-2 gap-4 pt-4"
                        >
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">500+</div>
                                    <div className="text-xs text-green-100/70">Happy Clients</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                                    <Award className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">15+</div>
                                    <div className="text-xs text-green-100/70">Years Experience</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                                    <Users className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">50+</div>
                                    <div className="text-xs text-green-100/70">Team Members</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                                    <Target className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">100%</div>
                                    <div className="text-xs text-green-100/70">Success Rate</div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="pt-6">
                            <Button
                                asChild
                                size="lg"
                                className="h-14 px-10 text-lg font-bold rounded-md bg-white text-primary hover:bg-secondary hover:text-slate-900 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] group"
                            >
                                <Link href="/contact-us" className="flex items-center gap-2">
                                    Contact us today
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}