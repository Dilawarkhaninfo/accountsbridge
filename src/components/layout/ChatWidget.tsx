"use client";

import { useState } from "react";
import { MessageSquareText, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
                        className="w-[350px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex justify-between items-center text-white">
                            <div>
                                <h3 className="font-semibold text-sm">Accounts Bridge Support</h3>
                                <p className="text-xs text-primary-foreground/80">We typically reply in a few minutes.</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="h-[300px] bg-slate-50 p-4 overflow-y-auto">
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-primary border border-secondary/50">
                                    AB
                                </div>
                                <div className="bg-white p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-sm text-sm text-slate-700 max-w-[80%]">
                                    Hello! 👋 How can we help you with your accounting or advisory needs today?
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-3 bg-white border-t border-slate-100">
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="Type a message..."
                                />
                                <Button size="icon" className="h-9 w-9 shrink-0">
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
                    "h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-105",
                    isOpen ? "bg-slate-800 hover:bg-slate-900" : "bg-primary hover:bg-primary/90"
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
