"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed inset-0 z-[9999] bg-background flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-border/40 px-6 py-4 bg-muted/30 shrink-0">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                                    LLM / AI View
                                </h2>
                                <p className="text-sm text-foreground/60 hidden sm:block">Portfolio converted to raw markdown for LLM consumption</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleCopy}
                                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80 outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    <span className="hidden sm:inline-block">{copied ? "Copied!" : "Copy Markdown"}</span>
                                </button>
                                <button
                                    onClick={onClose}
                                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    <X className="h-4 w-4" />
                                    <span className="hidden sm:inline-block">Exit View</span>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-16 bg-background">
                            <div className="max-w-4xl mx-auto">
                                <pre className="whitespace-pre-wrap font-mono text-sm md:text-base text-foreground/80 leading-relaxed pb-20">
                                    {markdownContent}
                                </pre>
                            </div>
                        </div>
                    </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
