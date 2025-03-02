import { FeaturesSection } from "@/components/Features";
import { HeroSection } from "@/components/Hero";
import { ServicesSection } from "@/components/services/Services";

const Home = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center">
        <HeroSection />
      </section>
      <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center">
        <FeaturesSection />
      </section>
      <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center">
        <ServicesSection />
      </section>
    </>
  );
};

export default Home;
