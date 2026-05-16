"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Terminal, Code2, Database, Coffee,
    Layout, Palette, Server,
    CheckCircle, FileText, Wrench, Shield, AppWindow, CheckSquare,
    FlaskConical, Zap, Layers, Check, MonitorPlay,
    Cloud, Globe, Ship, Search,
    MessageSquare, Activity, PieChart, Rocket,
    GitBranch, GitMerge, Gitlab, Box, Send,
    Trello, Book, Repeat, Network, Users
} from "lucide-react";

const techStack = [
    // Languages
    { name: "Java", icon: Coffee, category: "Languages", color: "#E76F00" },
    { name: "Python", icon: Terminal, category: "Languages", color: "#3776AB" },
    { name: "C", icon: Terminal, category: "Languages", color: "#A8B9CC" },
    { name: "C++", icon: Terminal, category: "Languages", color: "#00599C" },
    { name: "JavaScript", icon: Code2, category: "Languages", color: "#F7DF1E" },
    { name: "SQL", icon: Database, category: "Languages", color: "#00758F" },
    { name: "Shell Script", icon: Terminal, category: "Languages", color: "#4EAA25" },

    // Web Technologies
    { name: "React.Js", icon: Code2, category: "Web", color: "#61DAFB" },
    { name: "HTML5", icon: Layout, category: "Web", color: "#E34F26" },
    { name: "CSS3", icon: Palette, category: "Web", color: "#1572B6" },

    // Frameworks
    { name: "Spring Boot", icon: Server, category: "Frameworks", color: "#6DB33F" },
    { name: "JUnit", icon: CheckCircle, category: "Frameworks", color: "#25A162" },
    { name: "SLF4j", icon: FileText, category: "Frameworks", color: "#888888" },
    { name: "Gradle", icon: Wrench, category: "Frameworks", color: "#02303A" },
    { name: "Maven", icon: Wrench, category: "Frameworks", color: "#C71A22" },
    { name: "Mockito", icon: Shield, category: "Frameworks", color: "#8E8E8E" },
    { name: "WebDriverIO", icon: AppWindow, category: "Frameworks", color: "#EA5906" },
    { name: "Pytest", icon: CheckSquare, category: "Frameworks", color: "#0A9EDC" },
    { name: "Flask", icon: FlaskConical, category: "Frameworks", color: "#888888" },
    { name: "FastAPI", icon: Zap, category: "Frameworks", color: "#009688" },
    { name: "Django", icon: Layers, category: "Frameworks", color: "#092E20" },
    { name: "Jest", icon: Check, category: "Frameworks", color: "#C21325" },
    { name: "Selenium", icon: MonitorPlay, category: "Frameworks", color: "#43B02A" },

    // Cloud Technologies
    { name: "AWS", icon: Cloud, category: "Cloud", color: "#FF9900" },
    { name: "Terraform", icon: Globe, category: "Cloud", color: "#7B42BC" },
    { name: "Kubernetes", icon: Ship, category: "Cloud", color: "#326CE5" },
    { name: "Splunk Cloud Services", icon: Search, category: "Cloud", color: "#FF0098" },

    // Tools
    { name: "Kafka", icon: MessageSquare, category: "Tools", color: "#888888" },
    { name: "Prometheus", icon: Activity, category: "Tools", color: "#E6522C" },
    { name: "Grafana", icon: PieChart, category: "Tools", color: "#F46800" },
    { name: "Jenkins", icon: Rocket, category: "Tools", color: "#D24939" },
    { name: "Git", icon: GitBranch, category: "Tools", color: "#F05032" },
    { name: "Gitlab", icon: Gitlab, category: "Tools", color: "#FCA121" },
    { name: "Docker", icon: Box, category: "Tools", color: "#2496ED" },
    { name: "Postman", icon: Send, category: "Tools", color: "#FF6C37" },
    { name: "Jira", icon: Trello, category: "Tools", color: "#0052CC" },
    { name: "Confluence", icon: Book, category: "Tools", color: "#172B4D" },
    { name: "CI/CD", icon: Repeat, category: "Tools", color: "#4CAF50" },
    { name: "NATS", icon: Network, category: "Tools", color: "#27AAE1" },
    { name: "Splunk", icon: Search, category: "Tools", color: "#FF0098" },
    { name: "Sharepoint", icon: Users, category: "Tools", color: "#0078D4" },
];

export function TechStack() {
    const [viewAll, setViewAll] = useState(false);

    // Group techStack by category for the grid view
    const categories = Array.from(new Set(techStack.map(t => t.category)));

    const MarqueeRow = ({ items, speed = 40 }: { items: typeof techStack, speed?: number }) => (
        <div className="flex overflow-hidden group py-4 select-none">
            <motion.div
                className="flex gap-4 sm:gap-6 min-w-max pr-4 sm:pr-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
            >
                {/* We map twice to ensure infinite scrolling without gaps */}
                {[...items, ...items].map((tech, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm 
                       group-hover:opacity-50 hover:!opacity-100 hover:scale-105 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                        <tech.icon className="w-5 h-5" style={{ color: tech.color || 'inherit' }} />
                        <span className="font-semibold text-foreground/80 whitespace-nowrap">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <section id="tech-stack" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 dark:from-white dark:via-blue-200 dark:to-blue-500 tracking-tight flex items-center gap-3 drop-shadow-sm text-center">
                        Tech Stack
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto mb-8 text-center">
                        The tools, languages, and frameworks I use to build robust and scalable digital products.
                    </p>
                    <button
                        onClick={() => setViewAll(!viewAll)}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 h-9 px-4 py-2"
                    >
                        {viewAll ? "View Less" : "View All Stack"}
                    </button>
                </motion.div>
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Left and right gradient masks for smooth fade out */}
                {!viewAll && (
                    <>
                        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-accent/30 to-transparent z-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-accent/30 to-transparent z-10 pointer-events-none" />
                    </>
                )}

                <AnimatePresence mode="wait">
                    {!viewAll ? (
                        <motion.div
                            key="marquee"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ duration: 0.4 }}
                            className="relative z-0"
                        >
                            <MarqueeRow items={techStack} speed={40} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="mt-8 relative z-20 space-y-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {categories.map((category, catIdx) => (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: catIdx * 0.1 }}
                                        className="flex flex-col gap-6"
                                    >
                                        <div className="flex items-center gap-3 border-b border-border/50 pb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                                            <h3 className="text-xs font-bold tracking-widest text-foreground/70 uppercase">
                                                {category}
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {techStack
                                                .filter(t => t.category === category)
                                                .map((tech, idx) => (
                                                    <div
                                                        key={tech.name}
                                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors group cursor-default"
                                                    >
                                                        <tech.icon className="w-5 h-5 text-foreground/50 group-hover:text-primary transition-colors shrink-0" />
                                                        <span className="font-medium text-sm text-foreground/80 group-hover:text-foreground transition-colors">{tech.name}</span>
                                                    </div>
                                                ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
