import { getDictionary } from "@/app/i18n/dictionary";
import { FeaturesSection } from "@/components/Features";
import { HeroSection } from "@/components/Hero";
import { ServicesSection } from "@/components/services/Services";
import type { Lang } from "@/types/Lang";

const Home = async ({ params }: { params: Promise<{ lang: Lang }> }) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const heroSection = t.homePage.heroSection;
  const featuresSection = t.homePage.featuresSection;
  const servicesSection = t.homePage.servicesSection;
  const ctaButtons = t.ctaButtons;
  const randomServiceBanner = t.randomServiceBanner;

  return (
    <>
      <section
        className="min-h-screen flex flex-col sm:flex-row items-center justify-center"
        aria-label="Sección principal con información introductoria sobre la empresa"
      >
        <HeroSection
          dictionary={heroSection}
          ctaButtons={ctaButtons}
          randomServiceBanner={randomServiceBanner}
          lang={lang}
        />
      </section>
      <section
        className="min-h-screen flex flex-col sm:flex-row items-center justify-center"
        aria-label="Sección de características destacadas de nuestros servicios y productos"
      >
        <FeaturesSection dictionary={featuresSection} ctaButtons={ctaButtons} />
      </section>
      <section
        className="min-h-screen flex flex-col sm:flex-row items-center justify-center"
        aria-label="Sección de servicios donde se detallan las soluciones que ofrecemos"
      >
        <ServicesSection dictionary={servicesSection} lang={lang} />
      </section>
    </>
  );
};

export default Home;
