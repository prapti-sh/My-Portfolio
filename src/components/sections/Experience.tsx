"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

export function Experience() {
    const [showAll, setShowAll] = useState(false);
    const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

    return (
        <section id="experience" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 dark:from-white dark:via-blue-200 dark:to-blue-500 tracking-tight flex items-center justify-center gap-3 drop-shadow-sm w-full">
                        <Briefcase className="h-8 w-8 text-orange-500 dark:text-blue-400" />
                        Experience
                    </h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        My professional journey in software development.
                    </p>
                </motion.div>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {displayedExperiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-6 md:p-8 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                                        {exp.role}
                                    </h3>
                                    <h4 className="text-lg text-foreground/70">
                                        {exp.company}
                                    </h4>
                                </div>
                                <div className="shrink-0 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold w-fit">
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="text-foreground/80 mb-6 leading-relaxed list-disc list-outside ml-5 space-y-2">
                                {(showAll ? exp.description : exp.description.slice(0, 1)).map((desc, i) => (
                                    <li key={i} className={`pl-1 ${!showAll ? "line-clamp-2" : ""}`}>{desc}</li>
                                ))}
                            </ul>

                            {showAll && (
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 mt-auto">
                                    {exp.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {experiences.length > 2 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-12 flex justify-center"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background hover:border-primary hover:bg-primary/5 px-8 py-3 text-sm font-semibold transition-all shadow-sm"
                        >
                            {showAll ? "Show Less" : "View More"}
                            {showAll ? (
                                <ChevronUp className="w-4 h-4 text-primary group-hover:-translate-y-1 transition-transform" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-primary group-hover:translate-y-1 transition-transform" />
                            )}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
