import { getDictionary } from "@/app/i18n/dictionary";
import { ServiceFeatures } from "@/components/services/Features";
import type { Lang } from "@/types/Lang";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posicionamiento SEO Estratégico",
  description:
    "Aumenta tu visibilidad en Google y atrae más clientes con estrategias SEO efectivas y personalizadas.",
};

const SeoPositioningPage = async ({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const seoPositioning = t.services.seoPositioning;
  const ctaButtons = t.ctaButtons;

  return (
    <>
      <ServiceFeatures {...seoPositioning} ctaButtons={ctaButtons} />
    </>
  );
};

export default SeoPositioningPage;
