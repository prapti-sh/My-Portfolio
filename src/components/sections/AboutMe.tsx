"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function AboutMe() {
    return (
        <section id="about" className="py-16 md:py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 dark:from-white dark:via-blue-200 dark:to-blue-500 tracking-tight flex items-center justify-center gap-3 drop-shadow-sm w-full">
                        About Me
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                    {/* Left Column - Image */}
                    <div className="w-48 md:w-1/3 shrink-0">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="w-full aspect-square rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 shadow-xl p-1"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                                src="/profile.jpg" 
                                alt="Prapti" 
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                            />
                        </motion.div>
                    </div>

                    {/* Right Column - Text */}
                    <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col space-y-6"
                        >
                            <p className="text-foreground/80 leading-relaxed text-lg font-medium">
                                I&apos;m a full-stack developer with <strong className="text-foreground">5 years of experience</strong> building products that don&apos;t just look good, but actually work under pressure. 
                                Experienced in building customer-centric solutions, I&apos;ve learned the hard way that a &quot;scalable solution&quot; is only as good as the user experience it supports. I enjoy the &quot;detective work&quot; of untangling complex system failures and turning them into stable, performant code. I am enthusiastic about leveraging my technical abilities and a client-centered approach to bridge the gap between deep technical architecture and actual impact.
                            </p>

                            <div className="w-full h-px bg-slate-800/60 my-4 hidden md:block" />

                            <div className="flex items-center justify-center md:justify-start gap-8 text-xs font-bold tracking-widest text-foreground/50 uppercase mt-4">
                                <Link href="https://github.com/Prapti1199" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2 group">
                                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> Github
                                </Link>
                                <Link href="https://linkedin.com/in/prapti1199" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2 group">
                                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" /> LinkedIn
                                </Link>
                                <Link href="mailto:prapti.shah04@gmail.com" className="hover:text-foreground transition-colors flex items-center gap-2 group">
                                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" /> Email
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

