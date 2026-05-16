"use client";

import { motion } from "framer-motion";
import { Quote, Linkedin } from "lucide-react";

const testimonialsData = [
    {
        name: "Nadir Riyani",
        role: "Engineering Manager | AI Transformation Leader",
        date: "March 15, 2025",
        content: "I had the pleasure of working with Prapti for 4 years, and I can confidently say She is an outstanding Engineer. With deep expertise in Java, React, and Python, she consistently deliver high-quality, scalable solutions. Her ability to tackle complex technical challenges, combined with strong problem-solving skills and a collaborative attitude, makes her a true asset to any team. Whether working independently or as part of a group, Prapti always approaches each task with professionalism and a keen eye for detail."
    },
    {
        name: "Sonal K",
        role: "Software Developer @ Splunk | Java, Apache flink, Kafka, AWS",
        date: "February 4, 2025",
        content: "I highly recommend Prapti for her exceptional technical and functional expertise in Project. Her deep understanding of the project, combined with her sharp problem-solving skills, allows her to quickly identify and resolve challenges with precision. What truly sets Prapti apart is her ability to explain complex concepts in a clear, structured, and approachable manner. The sessions she conducted were incredibly insightful, making it much easier to grasp difficult aspects of the project."
    },
    {
        name: "Shailendra Suryawanshi",
        role: "Principal Software Engineer at Splunk",
        date: "January 24, 2025",
        content: "In 2021, I was responsible for onboarding Prapti to the Splunk ITSI project, and she has been a key part of its success ever since. Prapti has outstanding skills in Java, Python, and ReactJS, and she consistently solves complex problems with smart and efficient solutions. She not only tackled complex technical challenges but also handled numerous customer escalations with remarkable ease, ensuring smooth resolutions. She always ensures project goals are met."
    }
];

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export function Testimonials() {
    return (
        <section className="py-20 relative overflow-hidden" id="testimonials">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 dark:from-white dark:via-blue-200 dark:to-blue-500 tracking-tight flex items-center justify-center gap-3 drop-shadow-sm">
                        <Linkedin className="w-8 h-8 text-orange-500 dark:text-blue-400" />
                        What People Say
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto mt-4">
                        Reflections from colleagues and managers I&apos;ve had the pleasure of working with.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariant}
                            className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 group relative flex flex-col"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
                            
                            <div className="mb-6 z-10">
                                <h3 className="text-lg font-bold text-foreground group-hover:text-blue-400 transition-colors">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-foreground/50 mt-1 line-clamp-2" title={testimonial.role}>
                                    {testimonial.role}
                                </p>
                                <p className="text-xs text-foreground/40 mt-1">
                                    {testimonial.date}
                                </p>
                            </div>

                            <p className="text-foreground/70 text-sm leading-relaxed z-10 italic mt-auto">
                                &quot;{testimonial.content}&quot;
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
