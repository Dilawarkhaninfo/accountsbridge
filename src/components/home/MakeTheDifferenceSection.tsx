"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MakeTheDifferenceSection() {
    return (
        <section className="bg-primary overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-20 lg:py-28">

                    {/* Left Side - Visual Composition */}
                    <div className="w-full lg:w-1/2 relative flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* "MAKE" - Top Text */}
                            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-[-20px] md:mb-[-40px] relative z-20">
                                MAKE
                            </h2>

                            {/* Image Container */}
                            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[350px] mx-auto lg:mx-0 my-4">
                                <Image
                                    src="/images/team-difference.png"
                                    alt="Accounts Bridge Team"
                                    fill
                                    className="object-cover shadow-2xl rounded-sm"
                                />

                                {/* "THE" - Overlay Text */}
                                <div className="absolute bottom-4 left-0 right-0 text-center">
                                    <span className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-lg">
                                        THE
                                    </span>
                                </div>
                            </div>

                            {/* "DIFFERENCE" - Bottom Text */}
                            <h2 className="text-5xl md:text-[5.5rem] font-black text-white tracking-tighter leading-none mt-[-10px] md:mt-[-20px] relative z-20">
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
                        className="w-full lg:w-1/2 text-white"
                    >
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            MAKE BOLD MOVES WITH ACCOUNTS BRIDGE
                        </h3>

                        <p className="text-lg md:text-xl text-green-50 mb-8 leading-relaxed max-w-xl">
                            We combine our multi-disciplinary approach with deep, practical industry knowledge to help you meet challenges and respond to opportunities.
                        </p>

                        <p className="text-lg text-green-100 mb-10">
                            Connect with our team to start the conversation.
                        </p>

                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-primary hover:bg-secondary hover:text-slate-900 rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all"
                        >
                            <Link href="/contact">
                                Contact us today <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
