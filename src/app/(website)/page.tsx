import { FeaturesSection } from "@/components/Features";
import { HeroSection } from "@/components/Hero";
import { ServicesSection } from "@/components/services/Services";

const Home = () => {
  return (
    <>
      <section
        className="min-h-screen flex flex-col sm:flex-row items-center justify-center"
        aria-label="Sección principal con información introductoria sobre la empresa"
      >
        <HeroSection />
      </section>
      <section
        className="min-h-screen flex flex-col sm:flex-row items-center justify-center"
        aria-label="Sección de características destacadas de nuestros servicios y productos"
      >
        <FeaturesSection />
      </section>
      <section
        className="min-h-screen flex flex-col sm:flex-row items-center justify-center"
        aria-label="Sección de servicios donde se detallan las soluciones que ofrecemos"
      >
        <ServicesSection />
      </section>
    </>
  );
};

export default Home;
