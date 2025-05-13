import { Metadata } from "next";
import { ServicesSection } from "@/components/services/Services";
import { getDictionary } from "@/app/i18n/dictionary";
import type { Lang } from "@/types/Lang";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de diseño y desarrollo web, diseño gráfico, marketing digital y consultoría de marca.",
};

const ServicesPage = async ({ params }: { params: Promise<{ lang: Lang }> }) => {
  const lang = (await params).lang
  const t = await getDictionary(lang);

  const servicesSection = t.homePage.servicesSection;

  return (
    <>
      <ServicesSection dictionary={servicesSection} lang={lang} />
    </>
  );
};

export default ServicesPage;
