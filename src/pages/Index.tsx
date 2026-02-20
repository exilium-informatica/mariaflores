import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Florist",
  name: "Maria Flores",
  description:
    "Suculentas personalizadas, cestas de café da manhã e lembrancinhas florais com entrega em Atibaia.",
  url: "https://exilium-informatica.github.io/mariaflores/",
  telephone: "+5511971269213",
  areaServed: {
    "@type": "City",
    name: "Atibaia",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atibaia",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/maria.d.barbosa/"],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Cestas de Café da Manhã e Suculentas em Atibaia | Maria Flores
        </title>

        <meta
          name="description"
          content="Vasos de suculentas personalizados, cestas de café da manhã e lembrancinhas florais com entrega em Atibaia. Surpreenda alguém especial com a Maria Flores."
        />

        <link
          rel="canonical"
          href="https://exilium-informatica.github.io/mariaflores/"
        />

        <meta
          property="og:title"
          content="Cestas e Suculentas em Atibaia | Maria Flores"
        />

        <meta
          property="og:description"
          content="Presentes personalizados com entrega em Atibaia. Cestas de café da manhã, suculentas e lembrancinhas florais."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://exilium-informatica.github.io/mariaflores/"
        />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
