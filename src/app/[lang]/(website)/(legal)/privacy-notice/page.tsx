import { getDictionary } from "@/app/i18n/dictionary";
import type { Lang } from "@/types/Lang";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de privacidad de imSoft",
  robots: {
    index: false,
    follow: true,
  },
};

const PrivacyNoticePage = async ({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const { title, introduction, sections } = t.legal;

  return (
    <>
      <main aria-label="Página del Aviso de Privacidad de imSoft">
        <div className="relative overflow-hidden bg-background py-16">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1 aria-label="Encabezado del Aviso de Privacidad">
                <span className="block text-center text-lg font-semibold text-primary-600">
                  imSoft
                </span>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-primary sm:text-4xl">
                  {title}
                </span>
              </h1>
            </div>
            <div className="prose prose-lg prose-blue max-w-screen-lg mx-auto mt-6 text-secondary-foreground">
              <p aria-label="Introducción sobre la responsabilidad del uso de datos personales">
                {introduction}
              </p>
              <h2>
                <strong className="text-primary">
                  {sections.purposesTitle}
                </strong>
              </h2>
              <p>{sections.purposes}</p>
              <p>{sections.purposesList}</p>

              <h2>
                <strong className="text-primary">{sections.dataTitle}</strong>
              </h2>
              <p>{sections.data}</p>
              <p>{sections.dataList}</p>

              <h2>
                <strong className="text-primary">{sections.rightsTitle}</strong>
              </h2>
              <p>{sections.rights}</p>
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, debe
                enviar una petición vía correo electrónico a contacto@imsoft.io
                y deberá contener:
              </p>
              <ul role="list" className="list-disc">
                {sections.requestRequirements.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>

              <h2>
                <strong className="text-primary">
                  {sections.responseDaysTitle}
                </strong>
              </h2>
              <p>{sections.responseDays}</p>

              <h2>
                <strong className="text-primary">
                  {sections.responseMediumTitle}
                </strong>
              </h2>
              <p>{sections.responseMedium}</p>

              <h2>
                <strong className="text-primary">
                  {sections.trackingTitle}
                </strong>
              </h2>
              <p>{sections.tracking}</p>

              <h2>
                <strong className="text-primary">
                  {sections.modificationsTitle}
                </strong>
              </h2>
              <p>{sections.modifications}</p>

              <p>{sections.updated}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyNoticePage;
