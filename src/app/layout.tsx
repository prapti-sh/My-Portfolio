import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveBackground } from "@/components/layout/InteractiveBackground";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prapti Shah | Software Engineer & Developer",
  description: "Portfolio of Prapti Shah, a Software Engineer experienced in Java, Python, React, and building scalable digital experiences.",
  keywords: ["Prapti Shah", "Software Engineer", "Developer", "React", "Java", "Python", "Portfolio", "Prapti"],
  authors: [{ name: "Prapti Shah" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prapti-sh.dev",
    title: "Prapti Shah | Software Engineer",
    description: "Portfolio of Prapti Shah, a Software Engineer experienced in Java, Python, React, and building scalable digital experiences.",
    siteName: "Prapti Shah Portfolio"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground min-h-screen selection:bg-primary/30 flex flex-col relative`}
      >
        <InteractiveBackground />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
