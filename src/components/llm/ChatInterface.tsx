"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Bot, Sparkles, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

const mockResponses = [
    "Hi! I'm Prapti's AI assistant. While Prapti is busy building amazing products, I can tell you about her skills, experience, or projects. What would you like to know?",
    "Prapti is a highly skilled developer with expertise in React, Next.js, and creating beautiful, performant interfaces using Framer Motion and Tailwind CSS.",
    "You should definitely check out the 'Projects' section on the main portfolio page. She has built some fantastic open-source tools and design systems!",
    "She is currently available for new opportunities! You can reach out via LinkedIn or email.",
];

export function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: mockResponses[0] }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [useRealApi, setUseRealApi] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsTyping(true);

        if (useRealApi) {
            // Connect to the API
            try {
                const response = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ messages: [...messages, { role: "user", content: userMessage }] })
                });

                if (!response.ok) throw new Error("API error");

                // Very basic non-streaming handle for demonstration
                // In a real Vercel AI app, you'd use useChat hook
                const data = await response.json();
                setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
            } catch (err) {
                setMessages(prev => [...prev, {
                    role: "assistant",
                    content: "Sorry, the real API seems to be missing an API key. Reverting to mock responses."
                }]);
            }
        } else {
            // Mock response
            setTimeout(() => {
                const randomResponse = mockResponses[Math.floor(Math.random() * (mockResponses.length - 1)) + 1];
                setMessages(prev => [...prev, { role: "assistant", content: randomResponse }]);
                setIsTyping(false);
            }, 1500);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] bg-background">
            {/* Header */}
            <header className="flex items-center justify-between p-4 border-b border-border/40">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-accent rounded-full transition-colors">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            <Sparkles className="h-4 w-4" />
                        </div>
                        <div>
                            <h1 className="font-bold text-sm">Prapti AI Assistant</h1>
                            <p className="text-xs text-foreground/50">Ask me anything about Prapti</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/llm.md"
                        target="_blank"
                        className="hidden sm:flex text-[10px] sm:text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full transition-colors"
                    >
                        Raw Markdown (For AI)
                    </Link>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-foreground/50 hidden sm:inline">Live Mode</span>
                        <button
                            onClick={() => setUseRealApi(!useRealApi)}
                            className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50"
                            role="switch"
                            aria-checked={useRealApi}
                        >
                            <span className={`pointer-events-none block h-5 w-9 rounded-full transition-colors duration-200 ease-in-out ${useRealApi ? 'bg-primary' : 'bg-input'}`} />
                            <span className={`pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform duration-200 ease-in-out ${useRealApi ? 'translate-x-4' : 'translate-x-0'}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
                <AnimatePresence initial={false}>
                    {messages.map((message, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex gap-4 max-w-3xl mx-auto ${message.role === "user" ? "flex-row-reverse" : ""}`}
                        >
                            <div className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${message.role === "assistant" ? "bg-primary/20 text-primary" : "bg-card border border-border/50 text-foreground"}`}>
                                {message.role === "assistant" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                            </div>
                            <div className={`flex flex-col ${message.role === "user" ? "items-end" : "items-start"}`}>
                                <div className={`px-5 py-3 rounded-2xl ${message.role === "user"
                                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                                    : "bg-card border border-border/50 text-foreground rounded-tl-sm"
                                    }`}>
                                    <p className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">{message.content}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && !useRealApi && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-4 max-w-3xl mx-auto"
                        >
                            <div className="shrink-0 h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                <Bot className="h-5 w-5" />
                            </div>
                            <div className="bg-card border border-border/50 rounded-2xl rounded-tl-sm px-5 py-4 flex gap-1">
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-primary/50"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                />
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-primary/50"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                />
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-primary/50"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
            </div>

            {/* Warning */}
            {useRealApi && (
                <div className="px-4">
                    <div className="max-w-3xl mx-auto flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-500 text-xs rounded-lg mb-2">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <p>Live API requires an OpenAI API key in .env.local to function correctly. If it fails, disable Live Mode for offline mock responses.</p>
                    </div>
                </div>
            )}

            {/* Input */}
            <div className="p-4 sm:p-6 lg:p-8 pt-0 bg-background">
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about Prapti's experience, skills, or projects..."
                        className="w-full h-14 pl-6 pr-14 rounded-full border border-border/50 bg-card shadow-sm transition-colors focus-visible:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-sm"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="h-4 w-4 shrink-0 -ml-0.5" />
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p className="text-[10px] sm:text-xs text-foreground/40">
                        LLM Assistant may produce inaccurate information about Prapti. Verify via LinkedIn or GitHub.
                    </p>
                </div>
            </div>
        </div>
    );
}
