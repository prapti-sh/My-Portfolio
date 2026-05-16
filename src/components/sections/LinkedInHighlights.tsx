"use client";

import { motion } from "framer-motion";
import { Award, Quote } from "lucide-react";
import { certificates, testimonials } from "@/data/portfolio-data";
import Link from "next/link";

export function LinkedInHighlights() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Certificates */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 dark:from-white dark:via-blue-200 dark:to-blue-500 tracking-tight flex items-center justify-center gap-3 drop-shadow-sm w-full">
                            <Award className="h-8 w-8 text-primary" />
                            Certifications
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-primary/10 transition-colors" />
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cert.name}</h3>
                                <p className="text-foreground/70 mb-4">{cert.issuer}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    <span className="text-sm font-medium text-foreground/50">{cert.date}</span>
                                    <Link
                                        href={cert.link}
                                        className="text-sm font-medium text-primary hover:underline"
                                        target="_blank"
                                    >
                                        View Credential
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 dark:from-white dark:via-blue-200 dark:to-blue-500 tracking-tight flex items-center justify-center gap-3 drop-shadow-sm w-full">
                            <Quote className="h-8 w-8 text-chart-2" />
                            Testimonials
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((test, index) => (
                            <motion.div
                                key={test.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-card border border-border/50 rounded-2xl p-8 relative shadow-sm"
                            >
                                <Quote className="absolute text-primary/10 h-24 w-24 top-4 right-4 -z-0" />
                                <p className="relative z-10 text-lg italic text-foreground/80 mb-6 leading-relaxed">
                                    "{test.content}"
                                </p>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                        {test.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{test.name}</h4>
                                        <p className="text-sm text-foreground/60">{test.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
