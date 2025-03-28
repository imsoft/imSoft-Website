import { getDictionary } from "@/app/i18n/dictionary";
import { ServiceFeatures } from "@/components/services/Features";
import type { Lang } from "@/types/Lang";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo de Sitios Web",
  description:
    "Creamos sitios web rápidos, seguros y optimizados para generar más clientes y potenciar tu negocio.",
};

const WebPageDevelopmentPage = async ({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const websiteDevelopment = t.services.websiteDevelopment;
  const ctaButtons = t.ctaButtons;

  return (
    <>
      <ServiceFeatures {...websiteDevelopment} ctaButtons={ctaButtons} />
    </>
  );
};

export default WebPageDevelopmentPage;
