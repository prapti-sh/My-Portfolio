import { experiences, certificates } from "@/data/portfolio-data";
import { NextResponse } from "next/server";

const techStack = [
    { name: "Java", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "C", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "Shell Script", category: "Languages" },
    { name: "React.Js", category: "Web" },
    { name: "HTML5", category: "Web" },
    { name: "CSS3", category: "Web" },
    { name: "Spring Boot", category: "Frameworks" },
    { name: "JUnit", category: "Frameworks" },
    { name: "SLF4j", category: "Frameworks" },
    { name: "Gradle", category: "Frameworks" },
    { name: "Maven", category: "Frameworks" },
    { name: "Mockito", category: "Frameworks" },
    { name: "WebDriverIO", category: "Frameworks" },
    { name: "Pytest", category: "Frameworks" },
    { name: "Flask", category: "Frameworks" },
    { name: "FastAPI", category: "Frameworks" },
    { name: "Django", category: "Frameworks" },
    { name: "Jest", category: "Frameworks" },
    { name: "Selenium", category: "Frameworks" },
    { name: "AWS", category: "Cloud" },
    { name: "Terraform", category: "Cloud" },
    { name: "Kubernetes", category: "Cloud" },
    { name: "Splunk Cloud Services", category: "Cloud" },
    { name: "Kafka", category: "Tools" },
    { name: "Prometheus", category: "Tools" },
    { name: "Grafana", category: "Tools" },
    { name: "Jenkins", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "Gitlab", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Jira", category: "Tools" },
    { name: "Confluence", category: "Tools" },
    { name: "CI/CD", category: "Tools" },
    { name: "NATS", category: "Tools" },
    { name: "Splunk", category: "Tools" },
    { name: "Sharepoint", category: "Tools" },
];

export async function GET() {
    let markdown = `# Prapti Shah - Portfolio & Resume\n\n`;
    markdown += `> Hello, I am Prapti Shah. Experienced in customer-centric solutions, and skilled in both frontend and backend technologies.\n\n`;

    markdown += `## Skills & Technologies\n`;

    // Group tech stack by category
    const categories = Array.from(new Set(techStack.map(t => t.category)));
    categories.forEach(category => {
        const skillsInCategory = techStack.filter(t => t.category === category).map(t => t.name);
        markdown += `- **${category}**: ${skillsInCategory.join(", ")}\n`;
    });
    markdown += `\n`;

    markdown += `## Professional Experience\n\n`;
    experiences.forEach(exp => {
        markdown += `### ${exp.role} @ ${exp.company}\n`;
        markdown += `*${exp.period}*\n\n`;
        exp.description.forEach(desc => {
            markdown += `- ${desc}\n`;
        });
        markdown += `\n**Key Skills Used:** ${exp.skills.join(", ")}\n\n`;
    });

    markdown += `## Certifications\n\n`;
    certificates.forEach(cert => {
        markdown += `- **${cert.name}** (${cert.issuer}, ${cert.date})\n`;
    });

    markdown += `\n## Contact & Links\n`;
    markdown += `- Email: prapti1199@gmail.com\n`;
    markdown += `- LinkedIn: https://www.linkedin.com/in/prapti-sh/\n`;
    markdown += `- Instagram: https://www.instagram.com/_shah_prapti11/\n`;

    return new NextResponse(markdown, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
        },
    });
}
