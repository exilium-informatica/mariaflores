import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Arranjo de suculentas, cestas de café da manhã e lembrancinhas florais  da Maria Flores"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 animate-fade-in-up">
        <p className="text-primary-foreground/80 font-body tracking-[0.3em] uppercase text-sm mb-4">
          Suculentas · Cestas · Lembrancinhas
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-semibold text-primary-foreground mb-6 leading-tight">
          Maria Flores
        </h1>
        <p className="text-primary-foreground/90 font-body text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Presentes feitos com carinho para tornar cada momento especial
        </p>
        <a
          href="#categorias"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-bold tracking-wide uppercase text-sm hover:opacity-90 transition-opacity"
        >
          Conheça Nossos Produtos
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
