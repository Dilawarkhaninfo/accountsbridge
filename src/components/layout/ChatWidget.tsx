"use client";

import { useState } from "react";
import { MessageSquareText, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconImage from "../../../public/icons.png";

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[350px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-primary p-5 flex justify-between items-center text-white relative">
                            {/* Subtle Header Pattern */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}
                            />

                            <div className="relative z-10 flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-white/20 shadow-sm p-1.5 shrink-0">
                                    <Image
                                        src={IconImage}
                                        alt="AB Logo"
                                        width={28}
                                        height={28}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-[14px] leading-none text-white tracking-tight">
                                        Accounts Bridge Support
                                    </h3>
                                    <div className="flex items-center gap-1.5 mt-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                                        <p className="text-[10px] font-black uppercase tracking-widest text-primary-foreground/70">
                                            Online & Ready
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="relative z-10 text-white/60 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="h-[320px] bg-slate-50/50 p-5 overflow-y-auto space-y-4">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm p-1.5 shrink-0">
                                    <Image
                                        src={IconImage}
                                        alt="Support"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-[14px] text-slate-700 leading-relaxed font-medium">
                                    Hello! 👋 How can we help you with your accounting or advisory needs today?
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                                    placeholder="Type your message..."
                                />
                                <Button size="icon" className="h-10 w-10 shrink-0 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                                    <Send className="w-4 h-4" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="icon"
                className={cn(
                    "h-14 w-14 rounded-full shadow-2xl transition-all duration-300",
                    isOpen
                        ? "bg-slate-900 rotate-90"
                        : "bg-primary hover:bg-primary/90 hover:scale-110 shadow-primary/20"
                )}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageSquareText className="w-7 h-7" />
                )}
            </Button>
        </div>
    );
}
