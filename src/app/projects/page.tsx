import { Projects } from "@/components/sections/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Prapti",
    description: "Explore Prapti's selected projects.",
};

export default function ProjectsPage() {
    return (
        <main className="flex flex-col">
            <Projects />
        </main>
    );
}
