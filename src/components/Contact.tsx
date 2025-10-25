import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Download, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Contact() {
  return (
    <section className="py-20 px-6 bg-[#181825]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-6 text-foreground">Vamos Conectar</h2>
        <p className="text-muted-foreground mb-12">
          Estou sempre aberto a discutir novos projetos, oportunidades, ou apenas conversar sobre tecnologia!
        </p>
        
        <Card className="bg-gradient-to-br from-[#94e2d5]/10 to-[#74c7b8]/5 border-[#94e2d5]/30">
          <CardHeader>
            <div className="flex items-center justify-center gap-3 mb-2">
              <FileText className="h-6 w-6 text-[#94e2d5]" />
              <CardTitle className="text-foreground">Descarregar o Meu CV</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              Obtém uma visão detalhada da minha experiência, educação e competências
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-[#94e2d5] hover:bg-[#74c7b8] text-[#1e1e2e]" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Descarregar CV (PDF)
            </Button>
          </CardContent>
        </Card>
        
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Button variant="outline" size="lg" className="border-[#94e2d5]/30 text-[#94e2d5] hover:bg-[#94e2d5]/10" asChild>
            <a href="mailto:deniscicau@email.com">
              <Mail className="mr-2 h-5 w-5" />
              deniscicau@email.com
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-[#94e2d5]/30 text-[#94e2d5] hover:bg-[#94e2d5]/10" asChild>
            <a href="https://github.com/kt5u" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-[#94e2d5]/30 text-[#94e2d5] hover:bg-[#94e2d5]/10" asChild>
            <a href="https://linkedin.com/in/dgcicau" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
