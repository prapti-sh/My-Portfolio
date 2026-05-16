"use client";

import { motion } from "framer-motion";

export function InteractiveBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background transition-colors duration-500">
            {/* Base Gradient Background Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-[#030712] dark:to-black opacity-100 transition-colors duration-500" />

            {/* Ambient Animated Orbs (Subtle) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -100, 0],
                    y: [0, -100, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]"
            />
        </div>
    );
}
