import { getDictionary } from "@/app/i18n/dictionary";
import { ServiceFeatures } from "@/components/services/Features";
import type { Lang } from "@/types/Lang";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Análisis de Datos Inteligente",
  description:
    "Extrae valor de tus datos y transforma cada decisión en una oportunidad para mejorar tu negocio.",
};

const DataAnalysisPage = async ({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const dataAnalysis = t.services.dataAnalysis;
  const ctaButtons = t.ctaButtons;

  return (
    <>
      <ServiceFeatures {...dataAnalysis} ctaButtons={ctaButtons} />
    </>
  );
};

export default DataAnalysisPage;
