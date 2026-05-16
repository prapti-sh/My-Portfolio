export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string[];
    skills: string[];
}

export interface Certificate {
    id: string;
    name: string;
    issuer: string;
    date: string;
    link: string;
    image?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    avatar?: string;
}

export const experiences: Experience[] = [
    {
        id: "1",
        role: "Senior Software Engineer",
        company: "HCL TECH Pune",
        period: "March 2025 - Present",
        description: [
            "Contributed to modernization of Team Global Express transportation legacy platform using React, and Python.",
            "Developed Booking & Job Management modules including adhoc bookings, quotations, permanent recurring bookings, and quick job creation with automated driver allocation.",
            "Implemented rate calculation and pricing workflows based on customer contracts, services, and legacy pricing algorithms.",
            "Enabled multi-state operations across Australia with role-based access control for operational users.",
            "Automated invoicing, reporting dashboards, and analytics for job tracking and financial insights.",
            "Integrated real-time notifications via WebSockets and asynchronous processing using MQ queues and AQChatter services.",
            "Achieved 80%+ automated test coverage using pytest and Jest."
        ],
        skills: ["React", "Python", "WebSockets", "MQ", "AQChatter", "Pytest", "Jest"],
    },
    {
        id: "2",
        role: "Senior Software Engineer",
        company: "Crest Data Ahmedabad",
        period: "April 2023 - March 2025",
        description: [
            "As a Subject Matter Expert led initiatives to deliver scalable solutions for premium clients, driving the transition from Splunk Realtime Search to Ad-hoc Search using Splunk, Java, and Python.",
            "Played a key role in the High Scale Event Analytics re-architecture project for Splunk Cloud Service (SCS), which resulted in a 50% reduction in event processing latency for cloud customers. Responsibilities included managing resource allocation via AWS Terraform, working on Maven Java projects, overseeing Kafka topics within Kubernetes services, and optimizing metrics collection with Prometheus and Grafana.",
            "Independently led the end-to-end development of a UI feature inspired by a Splunk user idea to facilitate data export from the UI interface to CSV. This involved front-end development using React, back-end implementation with Python, Java integration with Splunk, and testing using Jest, WebdriverIO, and Pytest.",
            "Contributed to enhancing system performance and scalability by replacing real-time search with a NATS queue-based implementation."
        ],
        skills: ["Splunk", "Java", "Python", "AWS", "Terraform", "Maven", "Kafka", "Kubernetes", "Prometheus", "Grafana", "React", "Jest", "WebdriverIO", "Pytest", "NATS"],
    },
    {
        id: "3",
        role: "Software Engineer",
        company: "Crest Data Ahmedabad",
        period: "May 2021 - March 2023",
        description: [
            "Managed Java-based Event Analytics within IT Service Intelligence, improving data grouping, monitoring, and overall system performance.",
            "Optimized event action execution, reducing memory and CPU usage by 40% during event group processing.",
            "Built integrations across React, Python, and Java services connecting with Remedy and ServiceNow, improving event tracking and alert automation.",
            "Resolved critical production security vulnerabilities affecting 10,000+ customers, including fixes for log4j and Jackson issues.",
            "Resolved 70+ customer issues through direct technical engagement and troubleshooting.",
            "Mentored team members and increased automated test coverage to 80%+ using WDIO, Python, JUnit, and Mockito.",
            "Collaborated within cross-functional Agile teams to deliver high-quality software releases."
        ],
        skills: ["Java", "React", "Python", "Remedy", "ServiceNow", "WDIO", "JUnit", "Mockito", "Agile"],
    }
];

export const certificates: Certificate[] = [
    {
        id: "1",
        name: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "2024",
        link: "#",
    },
    {
        id: "2",
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2023",
        link: "#",
    }
];

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Alex Johnson",
        role: "CTO at TechNova",
        content: "Prapti has an incredible eye for detail and always delivers premium, highly performant code. An absolute joy to work with.",
    },
    {
        id: "2",
        name: "Sarah Williams",
        role: "Product Manager",
        content: "The applications built are not just functional but beautiful. The micro-interactions and transitions make our product stand out.",
    }
];
