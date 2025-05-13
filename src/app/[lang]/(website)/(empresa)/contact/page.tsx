import { Metadata } from "next";
import type { Lang } from "@/types/Lang";
import { getDictionary } from "@/app/i18n/dictionary";
import { ContactInfo } from "@/components/contact-info";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Hablemos sobre tu próximo gran proyecto. Contáctanos y empecemos a trabajar juntos.",
};

const ContactPage = async ({ params }: { params: Promise<{ lang: Lang }> }) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  return (
    <>
      <main aria-label="Página de contacto para iniciar proyectos con imSoft">
        <div className="relative isolate bg-background">
          <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <ContactInfo dictionary={t.company.contact} />
            <ContactForm dictionary={t.company.contact.forms} lang={lang} />
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
