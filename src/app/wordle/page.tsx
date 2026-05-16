import { WordleGame } from "@/components/wordle/WordleGame";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prapti AI | Wordle",
    description: "A custom Wordle clone built with React, Next.js, and Framer Motion.",
};

export default function WordlePage() {
    return (
        <main className="h-screen overflow-hidden text-foreground flex flex-col pt-24 pb-16">
            <div className="container mx-auto px-4 flex-1 flex flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Wordle</h1>
                    <p className="text-foreground/60 text-sm">Guess the 5-letter tech word</p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <WordleGame />
                </div>
            </div>
        </main>
    );
}
