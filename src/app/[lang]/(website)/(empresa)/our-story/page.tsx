import Image from "next/image";
import { Metadata } from "next";
import { CtaButtons } from "@/components/CtaButtons";
import type { Lang } from "@/types/Lang";
import { getDictionary } from "@/app/i18n/dictionary";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "Conoce la historia de imSoft, una empresa de tecnología con propósito y pasión por la innovación. Descubre cómo hemos crecido y evolucionado para ayudar a más negocios a alcanzar su máximo potencial.",
};

const HistoryPage = async ({ params }: { params: Promise<{ lang: Lang }> }) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const { tag, title, paragraphs, imageAlt } = t.company.history;
  const ctaButtons = t.ctaButtons;

  return (
    <>
      <main aria-label="Página sobre la historia y evolución de imSoft">
        <div className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <p
                className="text-base/7 font-semibold text-blue-600"
                aria-label="Etiqueta de sección de historia"
              >
                {tag}
              </p>
              <h1
                className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
                aria-label="Título de la historia de imSoft"
              >
                {title}
              </h1>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-foreground lg:max-w-none lg:grid-cols-2">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    aria-label={`Párrafo ${index + 1} de la historia de imSoft`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div
                className="mt-10 flex gap-x-6"
                aria-label="Botones de llamado a la acción"
              >
                <CtaButtons dictionary={ctaButtons} />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16 lg:pt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                alt={imageAlt}
                src="https://res.cloudinary.com/https-imsoft-io/image/upload/v1740207259/imsoft-images/pictures/historia-imsoft.jpg"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={1440}
                height={1024}
                aria-label="Imagen representativa de la historia de imSoft"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white dark:from-[#121212] pt-[7%]" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HistoryPage;
