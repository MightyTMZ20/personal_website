import { SkillList } from "@/app/types/skills";
import { Code, Database, Palette, Globe } from "lucide-react";

// Add your skills here
// NOTE: you can also use other libraries for icons (e.g. React Icons)

export const skills: SkillList[] = [
  {
    category: "Full Stack",
    icon: <Code className="w-6 h-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />, // React.ReactNode
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"],
  },
  {
    category: "Design",
    icon: <Palette className="w-6 h-6" />,
    skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Wireframing"],
  },
  {
    category: "Tools",
    icon: <Globe className="w-6 h-6" />,
    skills: ["Git", "Docker", "AWS", "Vercel", "VS Code"],
  }, 
];
