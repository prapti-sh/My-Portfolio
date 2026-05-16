"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Building2 } from "lucide-react";

const awardsData = [
    {
        title: "Certificate of appreciation",
        date: "Nov 2025",
        company: "HCLTech",
        description: "",
    },
    {
        title: "Crest Achievement Program (CAP)",
        date: "Aug 2024",
        company: "Crest Data Systems",
        description: "Recieved CAP for having done detailed analysis for customer cases, and identifying the corner cases for the different customer escalation. Additionally, providing extended support to mitigate customer's demand and fulfil on time and never being reluctant to take on any new or challenging work.",
    },
    {
        title: "Crest Achievement Program (CAP)",
        date: "Sep 2022",
        company: "Crest Data Systems",
        description: "",
    },
    {
        title: "Crest Achievement Program(CAP) Award",
        date: "Dec 2021",
        company: "Crest Data Systems",
        description: "Got honored from Crest Data Systems for my development work, bug fixing and resolving critical customer cases in ITSI EA",
    }
];

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export function Awards() {
    return (
        <section className="py-20 relative overflow-hidden" id="awards">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 dark:from-white dark:via-blue-200 dark:to-blue-500 tracking-tight text-center flex items-center justify-center gap-3 drop-shadow-sm">
                        <Award className="w-8 h-8 text-orange-500 dark:text-blue-400" />
                        Honors & Awards
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {awardsData.map((award, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariant}
                            className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all duration-300 group flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                                    {award.title}
                                </h3>
                                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors text-foreground">
                                    <Award className="w-5 h-5" />
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-foreground/60 mb-4">
                                <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded-md text-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>{award.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded-md text-foreground">
                                    <Building2 className="w-4 h-4" />
                                    <span>{award.company}</span>
                                </div>
                            </div>

                            {award.description && (
                                <p className="text-foreground/70 text-sm leading-relaxed mt-auto">
                                    {award.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
