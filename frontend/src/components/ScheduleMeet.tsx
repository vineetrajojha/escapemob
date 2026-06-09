"use client";
import React, { useState } from "react";
import { X, Calendar, Mail, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function ScheduleMeet() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Vertical Floating Banner */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-gray-100 text-white dark:text-slate-900 py-4 px-2 md:py-6 md:px-3 rounded-l-xl shadow-[-5px_0_15px_-3px_rgba(0,0,0,0.3)] transition-all hover:pl-3 md:hover:pl-4 group"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
                <div className="flex items-center gap-2 md:gap-3">
                    <Calendar className="w-4 h-4 md:w-[18px] md:h-[18px] group-hover:scale-110 transition-transform" />
                    <span className="font-semibold tracking-wider text-[11px] md:text-[14px] uppercase">Schedule a Meet</span>
                </div>
            </button>

            {/* Popup Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-md bg-white dark:bg-[#0c0d0d] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors z-10 bg-gray-100 dark:bg-white/5 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Schedule a Meet</h3>
                                        <p className="text-sm text-slate-500 dark:text-gray-400">Let's discuss your project and scale together.</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Contact Card Details */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50 dark:bg-[#121314] p-4 rounded-2xl border border-gray-100 dark:border-white/5 group hover:border-purple-500/50 transition-colors">
                                            <Mail className="w-5 h-5 text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
                                            <p className="text-xs text-gray-500 mb-1">Email Us</p>
                                            <a href="mailto:teamescapemob@gmail.com" className="text-[13px] font-medium text-slate-900 dark:text-white hover:text-purple-500 truncate block">teamescapemob@gmail.com</a>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-[#121314] p-4 rounded-2xl border border-gray-100 dark:border-white/5 group hover:border-green-500/50 transition-colors">
                                            <Phone className="w-5 h-5 text-green-500 mb-2 group-hover:scale-110 transition-transform" />
                                            <p className="text-xs text-gray-500 mb-1">Call Us</p>
                                            <a href="tel:+919999999999" className="text-[13px] font-medium text-slate-900 dark:text-white hover:text-green-500 truncate block">+91 9999999999</a>
                                        </div>
                                    </div>

                                    {/* Form / Scheduler Placeholder */}
                                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5 flex flex-col items-center justify-center text-center space-y-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-[#1a1b1c] flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="text-[16px] font-semibold text-slate-900 dark:text-white">Book a Discovery Call</p>
                                            <p className="text-[14px] text-gray-500 dark:text-gray-400 mt-1 max-w-[250px] mx-auto">Choose a time that works best for you on our calendar.</p>
                                        </div>
                                        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="mt-2 w-full">
                                            <Button variant="primary" className="!py-3 w-full justify-center">
                                                Open Calendar
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
