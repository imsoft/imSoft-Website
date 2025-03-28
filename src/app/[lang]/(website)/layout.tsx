import { getDictionary } from "@/app/i18n/dictionary";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Lang } from "@/types/Lang";

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const header = t.header;
  const footer = t.footer;
  const ctaButtons = t.ctaButtons;

  return (
    <>
      <Header dictionary={header} lang={lang} />
      {children}
      <Footer dictionary={footer} ctaButtons={ctaButtons} lang={lang} />
    </>
  );
}
