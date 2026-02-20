import suculentasImg from "@/assets/suculentas.jpg";
import cestasImg from "@/assets/cestas.jpg";
import lembrancinhasImg from "@/assets/lembrancinhas.jpg";

const categories = [
  {
    title: "Suculentas",
    description:
      "Mini suculentas ornamentais em vasos. Perfeitas para decoração, presentes e lembrancinhas.",
    image: suculentasImg,
    alt: "Coleção de mini suculentas em vasos de terracota",
  },
  {
    title: "Cestas de Café da Manhã",
    description:
      "Cestas recheadas com delícias, flores frescas e muito carinho. Ideal para surpreender quem você ama.",
    image: cestasImg,
    alt: "Cesta de café da manhã com croissants, frutas e flores",
  },
  {
    title: "Lembrancinhas Florais",
    description:
      "Souvenirs delicados com flores naturais e secas. Para casamentos, aniversários e eventos especiais.",
    image: lembrancinhasImg,
    alt: "Lembrancinhas florais em vasinhos de vidro",
  },
];

const CategoriesSection = () => {
  return (
    <section id="categorias" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-body tracking-[0.25em] uppercase text-sm mb-3">
            O que oferecemos
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            Nossos Produtos
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <article
              key={cat.title}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
