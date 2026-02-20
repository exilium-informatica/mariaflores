import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-secondary font-body tracking-[0.25em] uppercase text-sm mb-3">
          Fale conosco
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
          Entre em Contato
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Faça sua encomenda ou tire suas dúvidas. Estamos prontos para ajudar!
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mx-auto mb-12">
          <a
            href="https://wa.me/+5511971269213"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-foreground font-body">WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/maria.d.barbosa?igsh=MWRpb251bjdseTVpbA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <Instagram className="w-5 h-5 text-primary" />
            <span className="text-foreground font-body">@mariaflores</span>
          </a>

          <div className="flex items-center gap-3 bg-card rounded-lg p-5">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground font-body">Atibaia-SP, BR</span>
          </div>
        </div>

        <a
          href="https://wa.me/+5511971269213"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-bold tracking-wide uppercase text-sm hover:opacity-90 transition-opacity"
        >
          Fazer Encomenda
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
