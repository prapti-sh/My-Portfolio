"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const titles = [
    "Crafting clean, reliable software.",
    "Turning ideas into reliable software.",
    "Code with purpose. Build with impact."
];

export function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-chart-1/20 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping" />
                        <span className="flex h-2 w-2 rounded-full bg-primary absolute mr-2" />
                        Available for new opportunities
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl"
                    >
                        Hi, I am{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 dark:from-primary dark:via-chart-1 dark:to-chart-2">
                            Prapti Shah
                        </span>
                    </motion.h1>

                    <div className="h-16 sm:h-20 md:h-24 mt-4 overflow-hidden relative w-full flex justify-center">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={titleIndex}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="text-xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground/80 absolute w-full max-w-4xl px-4"
                            >
                                {titles[titleIndex]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-0 text-base md:text-lg text-foreground/70 max-w-2xl px-4 text-center leading-relaxed"
                    >
                        Full-stack engineer with a strong focus on clean architecture and scalable systems. I enjoy diving into complex problems and turning them into simple, elegant solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-6 flex items-center gap-6"
                    >
                        <Link
                            href="mailto:prapti1199@gmail.com"
                            target="_blank"
                            className="p-3 rounded-full bg-background border border-border/50 text-foreground/70 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all group"
                        >
                            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="sr-only">Email</span>
                        </Link>
                        <Link
                            href="https://www.instagram.com/_shah_prapti11/"
                            target="_blank"
                            className="p-3 rounded-full bg-background border border-border/50 text-foreground/70 hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all group"
                        >
                            <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/prapti11/"
                            target="_blank"
                            className="p-3 rounded-full bg-background border border-border/50 text-foreground/70 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
                        >
                            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
