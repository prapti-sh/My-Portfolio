import { Experience } from "@/components/sections/Experience";
import { Awards } from "@/components/sections/Awards";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechStack } from "@/components/sections/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career | Prapti",
    description: "Prapti's professional career, experience, awards, and testimonials.",
};

export default function CareerPage() {
    return (
        <main className="flex min-h-screen flex-col pt-16">
            <Experience />
            <TechStack />
            <Awards />
            <Testimonials />
        </main>
    );
}
