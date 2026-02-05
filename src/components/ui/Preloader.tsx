"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconImage from "../../../public/icons.png"
export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for window load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5s splash screen

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
                >
                    <div className="flex flex-col items-center gap-4">
                        {/* Logo Mark Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Abstract geometric logo shape matching 'A' / Bridge */}
                            <div className="w-16 h-16 border-4 border-primary rounded-tr-3xl rounded-bl-3xl animate-pulse" />
                            <div className="absolute w-10 h-10 bg-secondary/80 rounded-full blur-md" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl font-bold text-slate-900 tracking-tight"
                        >
                            Accounts<span className="text-primary">Bridge</span>
                        </motion.h1>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
