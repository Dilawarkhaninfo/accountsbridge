"use client";

import { motion } from "framer-motion";

interface ServiceDetailHeroProps {
    title: string;
    subtitle: string;
}

export function ServiceDetailHero({ title, subtitle }: ServiceDetailHeroProps) {
    return (
        <section className="relative py-20 md:py-32 bg-primary/5 border-b overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                        Our Services
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
