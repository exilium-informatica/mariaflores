import { Instagram, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-secondary font-body tracking-[0.25em] uppercase text-sm mb-3">
          Fale conosco
        </p>

        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
          Vamos Criar Algo Especial?
        </h2>

        <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Conte pra gente a sua ideia e vamos preparar uma surpresa cheia de
          carinho.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mx-auto mb-12">
          <a
            href="https://wa.me/5511971269213"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-card rounded-2xl p-5 hover:shadow-lg transition-all duration-300"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-foreground font-body">WhatsApp</span>
          </a>

          <a
            href="https://www.instagram.com/maria.d.barbosa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-card rounded-2xl p-5 hover:shadow-lg transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-primary" />
            <span className="text-foreground font-body">@maria.d.barbosa</span>
          </a>

          <div className="flex items-center justify-center gap-3 bg-card rounded-2xl p-5">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground font-body">Atibaia - SP</span>
          </div>
        </div>

        <a
          href="https://wa.me/5511971269213?text=Olá!%20Quero%20surpreender%20alguém%20especial%20em%20Atibaia%20com%20uma%20cesta%20ou%20suculenta%20personalizada.%20Pode%20me%20ajudar?"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-body font-medium tracking-wide text-sm hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Quero Surpreender Alguém 💐
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
