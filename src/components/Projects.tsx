import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

export function Projects() {
  return (
    <section className="py-20 px-6 bg-[#181825]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-6 text-foreground">Projetos</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estou constantemente a aprender e a desenvolver as minhas competências. 
          Explora o meu GitHub para ver os projetos em que tenho trabalhado.
        </p>
        
        <Card className="bg-card border-[#45475a] overflow-hidden">
          <div className="bg-gradient-to-br from-[#94e2d5]/20 to-[#74c7b8]/10 p-12">
            <div className="text-center">
              <div className="inline-flex p-4 bg-[#94e2d5]/20 rounded-full mb-6">
                <Github className="h-16 w-16 text-[#94e2d5]" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-foreground">Visita o Meu GitHub</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Descobre todos os meus projetos, contribuições e o código que tenho escrito
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  size="lg" 
                  className="bg-[#94e2d5] hover:bg-[#74c7b8] text-[#1e1e2e]" 
                  asChild
                >
                  <a href="https://github.com/kt5u?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    Ver Perfil GitHub
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-6">
                  A criar projetos interessantes e a aprender todos os dias
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
