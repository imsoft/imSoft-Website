import { getDictionary } from "@/app/i18n/dictionary";
import { ServiceFeatures } from "@/components/services/Features";
import type { Lang } from "@/types/Lang";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplicaciones Móviles Personalizadas",
  description:
    "Transforma tu negocio con una aplicación móvil intuitiva, rápida y diseñada para fidelizar clientes y aumentar ventas.",
};

const MobileAppsPage = async ({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const mobileApplications = t.services.mobileApplications;
  const ctaButtons = t.ctaButtons;

  return (
    <>
      <ServiceFeatures {...mobileApplications} ctaButtons={ctaButtons} />
    </>
  );
};

export default MobileAppsPage;
