"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MakeTheDifferenceSection() {
    return (
        <section className="bg-primary overflow-hidden py-16 lg:py-16">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side - Visual Composition */}
                    <div className="w-full lg:w-1/2 relative flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* "MAKE" - Top Text - Matching scale of Hero */}
                            <h2 className="text-[5rem] md:text-[7rem] lg:text-[8rem] font-black text-white tracking-tighter leading-none mb-[-1.5rem] md:mb-[-3rem] relative z-20">
                                MAKE
                            </h2>

                            {/* Image Container - Styled with shadow and border radius consistent with Hero */}
                            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[400px] mx-auto lg:mx-0 my-6 md:my-8 group">
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
                                {/* Decorative blob/splash behind */}
                                <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full -z-10 opacity-60 animate-pulse" />

                                {/* "THE" - Overlay Text */}
                                <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                                    <span className="text-[5rem] md:text-[7rem] lg:text-[8rem] font-black text-white/90 tracking-tighter drop-shadow-lg leading-none">
                                        THE
                                    </span>
                                </div>
                            </div>

                            {/* "DIFFERENCE" - Bottom Text */}
                            <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-black text-white tracking-tighter leading-none mt-[-1rem] md:mt-[-2rem] relative z-20">
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
                        className="w-full lg:w-1/2 text-white space-y-8"
                    >
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                            Make Move Bold With<br /> <span className="text-secondary">Accounts Bridge</span>
                        </h3>

                        <div className="space-y-6 text-green-50/90 text-lg md:text-xl leading-relaxed max-w-lg">
                            <p>
                                We combine our multi-disciplinary approach with deep, practical industry knowledge to help you meet challenges and respond to opportunities.
                            </p>
                            <p>
                                Connect with our team to start the conversation.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button
                                asChild
                                size="lg"
                                className="h-16 px-10 text-lg font-bold rounded-xl bg-white text-primary hover:bg-secondary hover:text-primary-foreground shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] group"
                            >
                                <Link href="/contact-us">
                                    Contact us today <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
