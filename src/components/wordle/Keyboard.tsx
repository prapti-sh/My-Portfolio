"use client";

import { motion } from "framer-motion";
import { Delete } from "lucide-react";

export type KeyState = "correct" | "present" | "absent" | "unused";

interface KeyboardProps {
    onKeyPress: (key: string) => void;
    keyStates: Record<string, KeyState>;
}

const ROWS = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
];

export function Keyboard({ onKeyPress, keyStates }: KeyboardProps) {
    const getKeyStyle = (key: string) => {
        const state = keyStates[key] || "unused";

        switch (state) {
            case "correct":
                return "bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700";
            case "present":
                return "bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700";
            case "absent":
                return "bg-slate-300 text-slate-700 hover:bg-slate-400 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600";
            default:
                return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700";
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full max-w-[500px] mx-auto p-2">
            {ROWS.map((row, i) => (
                <div key={i} className="flex justify-center gap-1 sm:gap-2">
                    {row.map((key) => {
                        const isEnter = key === "Enter";
                        const isBackspace = key === "Backspace";
                        const isSpecial = isEnter || isBackspace;

                        return (
                            <motion.button
                                key={key}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => onKeyPress(key)}
                                className={`
                  flex items-center justify-center rounded uppercase font-bold text-sm sm:text-base select-none transition-colors
                  ${isSpecial ? "px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm flex-1 sm:flex-none" : "w-8 sm:w-11 py-3 sm:py-4 flex-1 sm:flex-none"}
                  ${getKeyStyle(key)}
                `}
                            >
                                {isBackspace ? <Delete className="w-5 h-5" /> : key}
                            </motion.button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
