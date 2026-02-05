"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import IconImage from "../../../public/icons.png";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Slightly longer for the new animation to feel "complete"

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
                >
                    {/* --- Theme Mesh Gradients --- */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                    </div>

                    {/* --- Noise Texture (Design Pillar) --- */}
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* --- Central Animated Logo Circle --- */}
                        <div className="relative mb-10">
                            {/* Inner Logo Circle */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative w-32 h-32 rounded-full bg-white shadow-[0_0_50px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center z-20"
                            >
                                <div className="relative w-16 h-16">
                                    <Image
                                        src={IconImage}
                                        alt="Accounts Bridge Icon"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* --- Circular Animation Elements --- */}

                            {/* 1. Primary Spinning Ring */}
                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 -rotate-90">
                                <motion.circle
                                    cx="80"
                                    cy="80"
                                    r="76"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-primary/20"
                                />
                                <motion.circle
                                    cx="80"
                                    cy="80"
                                    r="76"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="text-primary"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: [0, 1, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </svg>


                            {/* 3. Outer Orbiting Dot (Secondary Color) */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-20px] z-10"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_15px_#FECD03]" />
                            </motion.div>
                        </div>

                        {/* --- Typography Group --- */}
                        <div className="flex flex-col items-center space-y-3">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col items-center"
                            >
                                <h1 className="text-4xl font-bold tracking-tighter text-slate-900">
                                    Accounts<span className="text-primary">Bridge</span>
                                </h1>

                                <div className="h-px w-12 bg-slate-200 my-4" />

                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                                    Strategic Finance Partners
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Progress Indicator (Subtle Line) */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
