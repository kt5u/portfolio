import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      <footer className="bg-[#11111b] text-muted-foreground py-8 px-6 text-center border-t border-[#45475a]">
        <p>© 2025 Denis Cicau. Construído com React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
