"use client";

import { Building, Store, Rocket, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const audience = [
    { icon: Store, title: "SMEs", description: "Small to medium businesses looking for growth and stability." },
    { icon: Rocket, title: "Growing Enterprises", description: "Scaling companies requiring strategic financial planning." },
    { icon: UserCheck, title: "Professional Firms", description: "Lawyers, doctors, and consultants needing expert advice." },
    { icon: Building, title: "Corporates", description: "Large organizations needing compliance and audit services." },
];

export function TargetAudience() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-foreground">Who We Serve</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {audience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center p-6 border rounded-2xl bg-muted/20 hover:bg-muted/40 transition-colors"
                        >
                            <item.icon className="w-12 h-12 text-primary mb-4 p-2 bg-primary/10 rounded-xl" />
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
