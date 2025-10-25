import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="py-20 px-6 bg-[#181825]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center mb-12 text-foreground">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-foreground mb-4">
              Sou um estudante de informática com uma profunda curiosidade sobre como as coisas funcionam 
              por trás dos bastidores. A minha jornada na tecnologia começou quando escrevi o meu primeiro 
              programa "Hello, World!", e fiquei fascinado desde então.
            </p>
            <p className="text-foreground mb-4">
              Quando não estou a programar, encontras-me a explorar novas tecnologias, a contribuir para 
              projetos open-source, ou a desfrutar de uma boa chávena de café enquanto faço debugging. 
              Acredito em escrever código limpo e sustentável, e sempre aprender algo novo.
            </p>
            <p className="text-foreground">
              Estou atualmente à procura de oportunidades de estágio onde possa aplicar as minhas 
              competências e continuar a crescer como programador.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#45475a]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1689168053250-080ce35d10cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2ZmZWUlMjBjb3p5fGVufDF8fHx8MTc2MTQyNzI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
