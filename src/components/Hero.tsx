import { Button } from "./ui/button";
import { Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Avatar } from "./ui/Avatar";
// Base-aware public asset paths (works with Vite base '/portfolio/')
const base = import.meta.env.BASE_URL;
const cvUrl = base + "cv.pdf";
const photoUrl = base + "eu.jpg";

export function Hero() {
  const scrollToContent = () => {
    const aboutSection = document.querySelector('section:nth-of-type(2)');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#1e1e2e] via-[#252538] to-[#2a2a3e] relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Avatar src={photoUrl} alt="Foto de Denis" size={128} className="mx-auto mb-6" />
          <h1 className="mb-4 text-foreground">Olá, sou o Denis Cicau</h1>
          <p className="text-[#94e2d5] mb-2">Estudante de Informática</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Apaixonado por criar soluções elegantes para problemas complexos.
            Atualmente a estudar no IPBeja e a explorar o mundo do desenvolvimento de software.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button className="bg-[#94e2d5] hover:bg-[#74c7b8] text-[#1e1e2e]" asChild>
            <a href={cvUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Descarregar CV
            </a>
          </Button>
          <Button variant="outline" className="border-[#94e2d5] text-[#94e2d5] hover:bg-[#94e2d5]/10">
            <Mail className="mr-2 h-4 w-4" />
            <a href="mailto:deniscicau@email.com">
              Entrar em Contacto
            </a>
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center mt-8">
          <a href="https://github.com/kt5u" className="text-muted-foreground hover:text-[#94e2d5] transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/dgcicau" className="text-muted-foreground hover:text-[#94e2d5] transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:deniscicau@email.com" className="text-muted-foreground hover:text-[#94e2d5] transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94e2d5] hover:text-[#74c7b8] transition-colors cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-sm">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
