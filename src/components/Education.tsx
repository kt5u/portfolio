import { GraduationCap, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function Education() {
  const education = [
    {
      degree: "Licenciatura em Informática",
      institution: "Instituto Politécnico de Beja",
      period: "2022 - Presente",
      description:
        "A estudar Big Data, Power BI, Laravel, desenvolvimento backend, bases de dados e engenharia de software",
      status: "Em curso",
    },
  ];

  const achievements = [
    "Membro ativo da comunidade estudantil",
    "Participação em projetos académicos colaborativos",
    "Aprendizagem contínua de novas tecnologias",
    "Contribuições para projetos open-source",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#1e1e2e] to-[#252538]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center mb-12 text-foreground">
          Educação & Conquistas
        </h2>
        <div className="grid gap-8">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className="bg-card border-[#45475a]"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#94e2d5]/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-[#94e2d5]" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-foreground">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="mt-1 text-muted-foreground">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-2">
                  {edu.description}
                </p>
                <p className="text-[#94e2d5]">{edu.status}</p>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-card border-[#45475a]">
            <CardHeader>
              <CardTitle className="text-foreground">
                Conquistas & Atividades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2"
                  >
                    <span className="text-[#94e2d5] mt-1">
                      •
                    </span>
                    <span className="text-foreground">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}