import { getDictionary } from "@/app/i18n/dictionary";
import { ServiceFeatures } from "@/components/services/Features";
import type { Lang } from "@/types/Lang";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campañas en Google Ads",
  description:
    "Llega a tu audiencia ideal y maximiza tus conversiones con estrategias de Google Ads que realmente funcionan.",
};

const GoogleAdsCampaignsPage = async ({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const googleAdsCampaigns = t.services.googleAdsCampaigns;
  const ctaButtons = t.ctaButtons;

  return (
    <>
      <ServiceFeatures {...googleAdsCampaigns} ctaButtons={ctaButtons} />
    </>
  );
};

export default GoogleAdsCampaignsPage;
