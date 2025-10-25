import { Badge } from "./ui/badge";
import { Code2, Database, Layout, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Linguagens",
      icon: Code2,
      skills: ["Python", "Java", "PHP", "HTML", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React", "Tailwind CSS", "HTML/CSS"]
    },
    {
      title: "Backend & Base de Dados",
      icon: Database,
      skills: ["Node.js", "MySQL", "Apache", "Firebase"]
    },
    {
      title: "Ferramentas & Outros",
      icon: Wrench,
      skills: ["Git", "Linux", "Vim", "LaTeX"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#1e1e2e] to-[#252538]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center mb-12 text-foreground">Competências & Tecnologias</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#45475a]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#94e2d5]/20 rounded-lg">
                    <Icon className="h-5 w-5 text-[#94e2d5]" />
                  </div>
                  <h3 className="text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge 
                      key={skillIdx} 
                      variant="secondary"
                      className="bg-[#94e2d5]/10 text-[#94e2d5] hover:bg-[#94e2d5]/20 border-[#94e2d5]/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
