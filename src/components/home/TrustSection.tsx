"use client";

import { motion } from "framer-motion";
import { Shield, Users, Trophy, Smile } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
    { label: "Cases Completed", value: 321, icon: Shield, suffix: "" },
    { label: "Consultants", value: 27, icon: Users, suffix: "" },
    { label: "Awards Winning", value: 125, icon: Trophy, suffix: "" },
    { label: "Satisfied Customers", value: 100, icon: Smile, suffix: "%" },
];

function Counter({ from, to, duration, suffix }: { from: number; to: number; duration: number, suffix: string }) {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const update = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * (to - from) + from));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(update);
            }
        };

        animationFrame = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration]);

    return <span>{count}{suffix}</span>;
}

export function TrustSection() {
    const [startCount, setStartCount] = useState(false);

    return (
        <section className="relative py-20 bg-primary overflow-hidden text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Tagline & Content */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary text-sm font-medium border border-white/20"
                        >
                            <Shield className="w-4 h-4" /> Trusted Excellence
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                        >
                            Doing the right thing, <br />
                            <span className="text-secondary">at the right time.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-white/80 max-w-md leading-relaxed"
                        >
                            We provide accurate, timely, and strategic financial advice to ensure your business stays compliant and profitable.
                        </motion.p>
                    </div>

                    {/* Right Side: Stats Grid */}
                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                onViewportEnter={() => setStartCount(true)}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="flex flex-col items-center md:items-start p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors"
                            >
                                <stat.icon className="w-8 h-8 text-secondary mb-3 opacity-90" />
                                <div className="text-4xl font-bold tracking-tight mb-1">
                                    {startCount ? <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} /> : `0${stat.suffix}`}
                                </div>
                                <div className="text-sm font-medium text-white/70 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
