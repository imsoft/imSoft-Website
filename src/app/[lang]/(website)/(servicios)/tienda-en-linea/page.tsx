import { getDictionary } from "@/app/i18n/dictionary";
import { ServiceFeatures } from "@/components/services/Features";
import type { Lang } from "@/types/Lang";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiendas en Línea Optimizadas",
  description:
    "Lleva tu negocio al mundo digital con una tienda en línea segura, rápida y diseñada para maximizar tus ventas.",
};

const EcommercePage = async ({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const onlineStores = t.services.onlineStores;
  const ctaButtons = t.ctaButtons;

  return (
    <>
      <ServiceFeatures {...onlineStores} ctaButtons={ctaButtons} />
    </>
  );
};

export default EcommercePage;
