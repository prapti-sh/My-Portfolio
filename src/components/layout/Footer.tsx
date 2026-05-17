import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 py-8 md:py-12 mt-16 md:mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-700 dark:from-primary dark:to-primary/40">
                        Prapti.
                    </span>
                    <p className="text-sm text-foreground/60">
                        Building beautiful, scalable, and dynamic digital experiences.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/prapti-sh"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        aria-label="GitHub"
                    >
                        <Github className="h-4 w-4" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/prapti-sh/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link
                        href="mailto:prapti1199@gmail.com"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        aria-label="Email"
                    >
                        <Mail className="h-4 w-4" />
                    </Link>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 flex flex-col items-center">
                <p className="text-xs text-foreground/40 text-center">
                    © {new Date().getFullYear()} Prapti. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
