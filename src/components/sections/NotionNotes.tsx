"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const mockNotes = [
    {
        id: 1,
        title: "Understanding Server Actions in Next.js 14",
        excerpt: "A deep dive into how Server Actions simplify data mutation and form handling in the App Router paradigm...",
        date: "Oct 12, 2024",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Mastering Framer Motion Orchestration",
        excerpt: "Learn how to use staggerChildren, delayChildren, and variants to create complex, performant micro-animations...",
        date: "Sep 28, 2024",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "Building Accessible Design Systems",
        excerpt: "Why ARIA attributes aren't enough, and how to build truly inclusive components using Radix UI primitives...",
        date: "Aug 15, 2024",
        readTime: "6 min read"
    }
];

export function NotionNotes() {
    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 dark:from-white dark:via-blue-200 dark:to-blue-500 tracking-tight flex items-center gap-3 drop-shadow-sm">
                            <BookOpen className="h-8 w-8 text-primary" />
                            Recent Notes
                        </h2>
                        <p className="text-foreground/70 max-w-2xl">
                            Thoughts, learnings, and tutorials straight from my Notion workspace.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            View all notes <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockNotes.map((note, index) => (
                        <motion.div
                            key={note.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-md hover:border-primary/30 transition-all"
                        >
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-3 text-xs text-foreground/50 mb-4">
                                    <span>{note.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-border" />
                                    <span>{note.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {note.title}
                                </h3>
                                <p className="text-foreground/70 text-sm mb-6 line-clamp-3 flex-grow">
                                    {note.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center text-sm font-medium text-primary">
                                        Read article
                                        <ArrowRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Placeholder note about Notion API integration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"
                >
                    <p className="text-sm text-foreground/60 italic">
                        Note: This section is currently displaying static mock data. To connect to your live Notion workspace, provide your Notion API token and Database ID in `.env.local`.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
