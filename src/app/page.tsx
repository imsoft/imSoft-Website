import { FeaturesSection } from "@/components/Features";
import { HeroSection } from "@/components/Hero";
import { ServicesSection } from "@/components/services/Services";

const Home = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center pb-8 sm:pb-12 lg:pb-16">
        <HeroSection />
      </section>
      <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center py-16 sm:py-24 lg:py-32">
        <FeaturesSection />
      </section>
      <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center py-16 sm:py-24 lg:py-32">
        <ServicesSection />
      </section>
    </>
  );
};

export default Home;
