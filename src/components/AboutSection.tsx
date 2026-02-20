import { Heart, Leaf, Gift } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Artesanal",
    text: "Cada produto é feito à mão com materiais selecionados e muito cuidado.",
  },
  {
    icon: Heart,
    title: "Feito com Amor",
    text: "Dedicação em cada detalhe para criar presentes que emocionam.",
  },
  {
    icon: Gift,
    title: "Entrega Especial",
    text: "Embalagens delicadas e entrega cuidadosa para sua comodidade.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-secondary font-body tracking-[0.25em] uppercase text-sm mb-3">
          Sobre nós
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
          Maria Flores
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Nascemos da paixão por flores e da vontade de transformar momentos simples em memórias inesquecíveis.
          Trabalhamos com suculentas, cestas de café da manhã e lembrancinhas florais, sempre com o toque
          artesanal que faz toda a diferença.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
