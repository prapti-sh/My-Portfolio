"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check } from "lucide-react";
import { generatePortfolioMarkdown } from "@/utils/generate-markdown";

interface LlmOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LlmOverlay({ isOpen, onClose }: LlmOverlayProps) {
    const [markdownContent, setMarkdownContent] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setMarkdownContent(generatePortfolioMarkdown());
            // Prevent scrolling on the body when overlay is open
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(markdownContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 z-[101] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 px-4"
                    >
                        <div className="bg-card border border-border flex flex-col overflow-hidden rounded-2xl shadow-2xl h-[85vh] sm:h-[80vh]">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-border/40 px-6 py-4 bg-muted/30">
                                <div>
                                    <h2 className="text-xl font-semibold flex items-center gap-2">
                                        LLM / AI View
                                    </h2>
                                    <p className="text-sm text-foreground/60">Raw markdown generated for AI processing</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleCopy}
                                        className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80 outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    >
                                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                        <span className="hidden sm:inline-block">{copied ? "Copied!" : "Copy"}</span>
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-destructive/10 text-destructive shadow-sm transition-colors hover:bg-destructive hover:text-destructive-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    >
                                        <X className="h-5 w-5" />
                                        <span className="sr-only">Turn Off</span>
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 bg-background">
                                <pre className="whitespace-pre-wrap font-mono text-sm text-foreground/80 leading-relaxed">
                                    {markdownContent}
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
