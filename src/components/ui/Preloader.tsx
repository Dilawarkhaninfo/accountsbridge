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
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
                >
                    <div className="flex flex-col items-center gap-8 relative z-10">
                        {/* Logo Mark */}
                        <div className="relative flex items-center justify-center">
                            {/* Static Icon */}
                            <div className="relative w-20 h-20">
                                <Image
                                    src={IconImage}
                                    alt="Accounts Bridge Icon"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col items-center space-y-3">
                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                                Accounts<span className="text-primary">Bridge</span>
                            </h1>

                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                                Secure Connection
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
