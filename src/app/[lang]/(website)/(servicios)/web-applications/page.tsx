import { getDictionary } from "@/app/i18n/dictionary";
import { ServiceFeatures } from "@/components/services/Features";
import type { Lang } from "@/types/Lang";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplicaciones Web Personalizadas",
  description:
    "Desarrollamos aplicaciones web seguras y escalables que mejoran la eficiencia y productividad de tu empresa.",
};

const WebAppsPage = async ({ params }: { params: Promise<{ lang: Lang }> }) => {
  const lang = (await params).lang
  const t = await getDictionary(lang);

  const webApplications = t.services.webApplications;
  const ctaButtons = t.ctaButtons;

  return (
    <>
      <ServiceFeatures {...webApplications} ctaButtons={ctaButtons} />
    </>
  );
};

export default WebAppsPage;
