import { getDictionary } from "@/app/i18n/dictionary";
import { ServiceFeatures } from "@/components/services/Features";
import type { Lang } from "@/types/Lang";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría en IA y Machine Learning",
  description:
    "Implementa soluciones basadas en IA y Machine Learning para optimizar procesos, anticipar tendencias y tomar decisiones más inteligentes.",
};

const AiConsultingPage = async ({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const aiConsulting = t.services.aiConsulting;
  const ctaButtons = t.ctaButtons;

  return (
    <>
      <ServiceFeatures {...aiConsulting} ctaButtons={ctaButtons} />
    </>
  );
};

export default AiConsultingPage;
