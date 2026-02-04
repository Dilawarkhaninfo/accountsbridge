"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function MissionVision() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                            Our Vision
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Simplifying Complexity for Business Growth
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At Accounts Bridge, we believe that every business deserves financial clarity.
                            Our mission is to bridge the gap between complex financial regulations and
                            strategic business success.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We empower SMEs and growing enterprises by providing expert accounting,
                            taxation, and advisory services that go beyond the numbers.
                        </p>

                        <div className="pt-4 space-y-3">
                            {[
                                "Strategic Finance Partnership",
                                "Proactive Compliance Management",
                                "Data-Driven Decision Making",
                                "Long-Term Wealth Creation"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Abstract visual */}
                        <div className="absolute inset-0 bg-grid-white/[0.05]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-[100px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
