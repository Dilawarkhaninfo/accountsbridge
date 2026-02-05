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
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.05,
                        filter: "blur(10px)",
                        transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
                >
                    {/* Background Subtle Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none" />

                    <div className="flex flex-col items-center gap-8 relative z-10">
                        {/* Logo Mark Animation */}
                        <div className="relative flex items-center justify-center">
                            {/* Rotating Outer Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute w-32 h-32 border-t-2 border-r-2 border-primary/20 rounded-full"
                            />

                            {/* Inner Pulsing Ring */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-28 h-28 bg-primary/5 rounded-full"
                            />

                            {/* The Actual Icon Image */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative w-20 h-20"
                            >
                                <Image
                                    src={IconImage}
                                    alt="Accounts Bridge Icon"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col items-center space-y-3">
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-3xl font-bold text-slate-900 tracking-tight"
                            >
                                Accounts<span className="text-primary">Bridge</span>
                            </motion.h1>

                            {/* Premium Loading Indicator */}
                            <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.8, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-primary"
                                />
                                <motion.div
                                    animate={{
                                        x: [-100, 200],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                                />
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"
                            >
                                Secure Connection
                            </motion.p>
                        </div>
                    </div>

                    {/* Decorative Bottom Corner Glows */}
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
