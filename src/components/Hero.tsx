import { CtaButton } from "@/interfaces/CtaButton";
import { CtaButtons } from "./CtaButtons";
import RandomServiceBanner from "./services/RandomServiceBanner";
import { RandomServiceBannerDictionary } from "@/interfaces/RandomServiceBanner";

interface HeroSectionProps {
  dictionary: {
    title: string;
    description: string[];
  };
  ctaButtons: CtaButton;
  randomServiceBanner: RandomServiceBannerDictionary;
  lang: string;
}

export const HeroSection = ({
  dictionary,
  ctaButtons,
  randomServiceBanner,
  lang,
}: HeroSectionProps) => {
  const { title, description } = dictionary;

  return (
    <>
      <div
        className="bg-background transition-colors duration-300"
        aria-label="Sección principal del sitio"
      >
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-8 sm:py-6 lg:py-7">
            <div
              className="hidden sm:mb-8 sm:flex sm:justify-center"
              aria-label="Banner de servicio destacado"
            >
              <RandomServiceBanner
                dictionary={randomServiceBanner}
                lang={lang}
              />
            </div>
            <div className="text-center">
              <h1
                className="mb-8 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl"
                aria-label="Mensaje principal del sitio"
              >
                {title}
              </h1>
              {description.map((line, i) => (
                <p
                  key={i}
                  className="text-pretty text-lg font-medium text-secondary-foreground sm:text-xl/8"
                  aria-label="Descripción de los servicios de imSoft"
                >
                  {line}
                </p>
              ))}
              <div
                className="mt-10 flex items-center justify-center gap-x-6"
                aria-label="Botones de acción principal"
              >
                <CtaButtons dictionary={ctaButtons} lang={lang} showServices />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
