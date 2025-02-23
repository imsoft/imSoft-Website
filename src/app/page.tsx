import { FeaturesSection } from "@/components/Features";
import { HeroSection } from "@/components/Hero";
import { ServicesSection } from "@/components/services/Services";

const Home = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center pb-4 sm:pb-6 lg:pb-8">
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
