import { Project, Experience, Award, Education } from './types';
import { Github, Linkedin, Mail, FileText, Brain, Database, Code, Cpu } from 'lucide-react';

export const SOCIALS = {
  email: "manojmageesha@gmail.com",
  github: "https://github.com/manoj2005mj",
  linkedin: "https://linkedin.com/in/manojmj2005",
  phone: "+91-8660690991"
};

export const SKILLS = [
  "Python", "C++", "C", "SQL", "JavaScript", "React", "FastAPI", "Flask", 
  "PyTorch", "Hugging Face", "LangGraph", "Docker", "Git", "Neo4j", 
  "ClickHouse", "Supabase", "MongoDB", "Vision Transformers", "LLMs"
];

export const EXPERIENCE: Experience[] = [
  {
    company: "NIT Trichy - AI for Eye Diagnostics",
    role: "Research Intern",
    duration: "Nov 2024 – Dec 2024",
    type: "Internship",
    achievements: [
      "Developed state-of-the-art diagnostic system using Vision Transformers (ViT) to analyze partial retinal scans.",
      "Designed a Custom Fusion Model to integrate multi-modal features, achieving 91% accuracy in detecting early-stage pathologies.",
      "Implemented SMOTE to handle class imbalance, reducing false negative rates by 18% on 7,200+ images.",
      "Optimized deployment pipeline to achieve 30ms per-sample latency for edge devices."
    ]
  },
  {
    company: "Spider R&D, NIT Trichy",
    role: "Machine Learning Lead",
    duration: "Aug 2024 – Present",
    type: "Leadership",
    achievements: [
      "Leading developers to build Lynx GPT, an agentic campus chatbot for 6000+ students.",
      "Orchestrated Tech-kids outreach program for 800+ school students.",
      "Organized Arogya Robotics Bootcamp fostering technical literacy."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Agentic AI Interviewer",
    date: "Jan 2026",
    tech: ["LangGraph", "Deepgram", "Cartesia", "Supabase"],
    description: [
      "Runner-up at IIT Delhi Hackathon. Engineered a multi-agent system for technical interviewing.",
      "Implemented sandbox-controlled modular workflows to minimize hallucinations.",
      "Developed seamless voice-interface with <500ms response time using Deepgram & Cartesia."
    ],
    link: "https://github.com/manoj2005mj" 
  },
  {
    title: "Graph-Mesh Deep Market Research Engine",
    date: "Nov 2025",
    tech: ["Neo4j", "ClickHouse", "Multi-Agent System"],
    description: [
      "Scalable engine transforming unstructured market data into an Auditable Knowledge Graph.",
      "Built high-performance logging architecture using ClickHouse for real-time ingestion.",
      "Leveraged Neo4j to reduce system hallucinations and ground insights."
    ],
    link: "https://github.com/manoj2005mj"
  },
  {
    title: "Automated Document Processing System",
    date: "Jan 2025",
    tech: ["LLaMA 3.1", "Google Vision API", "MERN", "Flask"],
    description: [
      "Full-stack OCR + NLP pipeline automating extraction from 10,000+ PDF documents.",
      "Reduced GPU memory consumption by 50% using LoRA and RLHF fine-tuning.",
      "Tripled inference throughput and deployed on GCP with a real-time classification engine."
    ],
    link: "https://github.com/manoj2005mj"
  }
];

export const AWARDS: Award[] = [
  {
    title: "Winner (1st Place), Pragyan Origin",
    description: "Secured top spot in a Medical Hackathon by developing an automated diagnostic pipeline for resource-constrained environments."
  },
  {
    title: "Runner-up (2nd Place), IIT Delhi Hackathon",
    description: "Recognized among 300+ teams for designing a modular Agentic AI Interviewer."
  },
  {
    title: "Runner-up (2nd Place), Shaastra 2026",
    description: "Distinguished performance in research competition on Post-frontier Transformers."
  },
  {
    title: "Top 5 / 1000+, IIT Madras AI Challenge 2025",
    description: "Recognized for developing scalable ML solutions for industrial datasets."
  },
  {
    title: "KVPY SA Scholar (2022)",
    description: "Ranked in top 1% of 2 lakh candidates nationwide for scientific aptitude."
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "National Institute of Technology, Tiruchirappalli",
    degree: "B.Tech in Electrical and Electronics Engineering",
    duration: "2023 – Present",
    score: "CGPA: 8.34"
  },
  {
    institution: "Sri Chaitanya, Bangalore",
    degree: "CBSE - Class XII",
    duration: "2021 – 2023",
    score: "Score: 97.8%"
  }
];
