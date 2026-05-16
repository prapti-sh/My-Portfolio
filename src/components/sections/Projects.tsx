"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Star, GitFork, ExternalLink, Github, LayoutGrid, List } from "lucide-react";
import Link from "next/link";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
}

// Fallback mock projects if GitHub fetch fails or rate limited
const mockProjects: Repo[] = [
    {
        id: 1,
        name: "LeetCode-Solutions",
        description: "A collection of my LeetCode solutions with approaches and explanations.",
        html_url: "https://github.com/Prapti1199/LeetCode-Solutions",
        homepage: "",
        stargazers_count: 0,
        forks_count: 0,
        language: "Java" // Fallback language
    },
    {
        id: 2,
        name: "Detecting-Duplicate-Questions-QA-Forums-",
        description: "Machine learning project built to detect and flag duplicate questions on Q&A forums.",
        html_url: "https://github.com/Prapti1199/Detecting-Duplicate-Questions-QA-Forums-",
        homepage: "",
        stargazers_count: 0,
        forks_count: 0,
        language: "Jupyter Notebook"
    }
];

export function Projects() {
    const [projects, setProjects] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    useEffect(() => {
        // Fetch specific repos from GitHub API
        const fetchProjects = async () => {
            try {
                const reposToFetch = [
                    "LeetCode-Solutions",
                    "Detecting-Duplicate-Questions-QA-Forums-"
                ];

                const responses = await Promise.all(
                    reposToFetch.map(repo =>
                        fetch(`https://api.github.com/repos/Prapti1199/${repo}`)
                    )
                );

                const data = await Promise.all(
                    responses.map(async (res) => {
                        if (!res.ok) throw new Error("Failed to fetch");
                        const repoData = await res.json();
                        if (repoData.name === "LeetCode-Solutions") {
                            repoData.language = "Java";
                        }
                        return repoData;
                    })
                );

                setProjects(data);
            } catch (error) {
                console.warn("Using mock projects due to fetch error:", error);
                setProjects(mockProjects);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center w-full flex flex-col items-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 dark:from-white dark:via-blue-200 dark:to-blue-500 tracking-tight flex items-center justify-center gap-3 drop-shadow-sm w-full mx-auto">
                            <FolderGit2 className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                            Featured Projects
                        </h2>
                        <p className="text-foreground/70 max-w-2xl mb-4">
                            Some of my recent open-source work and personal experiments.
                        </p>
                        <Link
                            href="https://github.com/Prapti1199"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            <Github className="h-4 w-4" />
                            View Full GitHub Profile &rarr;
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center md:justify-end bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-lg p-1 shadow-sm w-fit mx-auto md:mx-0"
                    >
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-black/10 dark:bg-white/20 text-foreground" : "text-foreground/60 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"}`}
                            aria-label="Grid view"
                        >
                            <LayoutGrid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-black/10 dark:bg-white/20 text-foreground" : "text-foreground/60 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"}`}
                            aria-label="List view"
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                    </div>
                ) : (
                    <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4 max-w-5xl mx-auto"}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: viewMode === "grid" ? index * 0.1 : index * 0.05 }}
                                className={`group bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-black/10 dark:border-white/10 p-6 shadow-sm hover:shadow-md hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 ${viewMode === "grid" ? "flex flex-col justify-between h-full" : "flex flex-col sm:flex-row sm:items-center gap-6"
                                    }`}
                            >
                                <div className={viewMode === "list" ? "flex-1" : ""}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                                            <FolderGit2 className="h-6 w-6" />
                                        </div>
                                        {viewMode === "grid" && (
                                            <div className="flex gap-3 text-foreground/60">
                                                {project.homepage && (
                                                    <Link href={project.homepage} target="_blank" className="hover:text-primary transition-colors">
                                                        <ExternalLink className="h-5 w-5" />
                                                    </Link>
                                                )}
                                                <Link href={project.html_url} target="_blank" className="hover:text-primary transition-colors">
                                                    <Github className="h-5 w-5" />
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        <Link href={project.html_url} target="_blank">
                                            {project.name}
                                        </Link>
                                    </h3>

                                    <p className={`text-foreground/70 text-sm ${viewMode === "grid" ? "mb-6 line-clamp-3" : "mb-4 sm:mb-0 line-clamp-2"}`}>
                                        {project.description || "No description provided."}
                                    </p>
                                </div>

                                <div className={`flex items-center justify-between text-xs text-foreground/60 ${viewMode === "grid" ? "mt-auto pt-4 border-t border-border/50" : "sm:w-64 sm:flex-col sm:items-end sm:justify-center sm:border-l sm:border-t-0 border-t border-border/50 pt-4 sm:pt-0 sm:pl-6 gap-3"
                                    }`}>
                                    <div className={`flex items-center gap-4 ${viewMode === "list" && "sm:w-full sm:justify-between"}`}>
                                        {project.language && (
                                            <span className="flex items-center gap-1">
                                                <span className="w-2.5 h-2.5 rounded-full bg-chart-1" />
                                                {project.language}
                                            </span>
                                        )}
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center gap-1">
                                                <Star className="h-3 w-3" /> {project.stargazers_count}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <GitFork className="h-3 w-3" /> {project.forks_count}
                                            </span>
                                        </div>
                                    </div>

                                    {viewMode === "list" && (
                                        <div className="hidden sm:flex gap-3 text-foreground/60 w-full justify-end mt-2">
                                            {project.homepage && (
                                                <Link href={project.homepage} target="_blank" className="hover:text-primary transition-colors bg-accent/50 p-1.5 rounded-md hover:bg-accent">
                                                    <ExternalLink className="h-4 w-4" />
                                                </Link>
                                            )}
                                            <Link href={project.html_url} target="_blank" className="hover:text-primary transition-colors bg-accent/50 p-1.5 rounded-md hover:bg-accent">
                                                <Github className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
