import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Maria Flores",
  description:
    "Suculentas ornamentais, cestas de café da manhã e lembrancinhas florais.",
  url: "https://mariaflores.com.br",
  telephone: "+5511971269213",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sua Cidade",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/maria.d.barbosa?igsh=MWRpb251bjdseTVpbA==",
  ],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Maria Flores | Suculentas, Cestas e Lembrancinhas Florais</title>
        <meta
          name="description"
          content="Presentes com suculentas, cestas de café da manhã e lembrancinhas florais. Feitos à mão com carinho para tornar cada momento especial."
        />
        <meta
          name="keywords"
          content="suculentas, cestas de café da manhã, lembrancinhas florais, presentes, flores"
        />
        <link rel="canonical" href="https://mariaflores.com.br" />
        <meta
          property="og:title"
          content="Maria Flores | Suculentas, Cestas e Lembrancinhas"
        />
        <meta
          property="og:description"
          content="Presentes feitos com carinho. Suculentas, cestas de café da manhã e lembrancinhas florais."
        />
        <meta property="og:type" content="website" />
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
