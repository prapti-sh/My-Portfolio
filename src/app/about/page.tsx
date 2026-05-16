import { AboutMe } from "@/components/sections/AboutMe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Prapti",
    description: "Learn more about Prapti's journey and technical skills.",
};

export default function AboutPage() {
    return (
        <main className="flex h-screen overflow-hidden flex-col pt-16">
            <AboutMe />
        </main>
    );
}
