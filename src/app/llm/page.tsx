import { ChatInterface } from "@/components/llm/ChatInterface";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prapti AI | Interactive Resume",
    description: "Chat with my AI assistant to learn more about my skills, experience, and projects.",
};

export default function LLMViewPage() {
    return (
        <main className="min-h-screen bg-background text-foreground h-screen overflow-hidden">
            <ChatInterface />
        </main>
    );
}
