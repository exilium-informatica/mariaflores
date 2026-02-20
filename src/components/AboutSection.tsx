import { Heart, Leaf, Gift } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Curadoria Especial",
    text: "Selecionamos cada item com cuidado para criar combinações harmoniosas e encantadoras.",
  },
  {
    icon: Heart,
    title: "Montagem Artesanal",
    text: "Cada presente é montado à mão, com atenção aos detalhes e acabamento delicado.",
  },
  {
    icon: Gift,
    title: "Entrega com Carinho",
    text: "Realizamos entregas em Atibaia com cuidado e pontualidade para tornar o momento ainda mais especial.",
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
          Maria Flores em Atibaia
        </h2>

        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          A Maria Flores nasceu em Atibaia com o propósito de transformar
          momentos simples em lembranças especiais. Trabalhamos com suculentas
          personalizadas, cestas de café da manhã e lembrancinhas florais,
          montadas com delicadeza e atenção em cada detalhe para surpreender
          quem você ama.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {f.title}
              </h3>

              <p className="text-muted-foreground font-body leading-relaxed max-w-xs">
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
