import { Metadata } from "next";
import { PortfolioCard } from "@/components/portfolio/Card";
import type { Lang } from "@/types/Lang";
import { getDictionary } from "@/app/i18n/dictionary";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Descubre cómo hemos ayudado a empresas a crecer con soluciones digitales innovadoras. Cada proyecto es una historia de éxito hecha con tecnología, estrategia y pasión.",
};

const PortfolioPage = async ({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const { title, description, portfolioInfo } = t.company.portfolio;

  return (
    <>
      <main aria-label="Página de portafolio con proyectos destacados de imSoft">
        <div className="bg-background">
          <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 mt-10 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2
                  className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                  aria-label="Título de la sección de portafolio"
                >
                  {title}
                </h2>
                <p
                  className="text-xl text-secondary-foreground"
                  aria-label="Descripción de la sección de portafolio"
                >
                  {description}
                </p>
              </div>
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                aria-label="Lista de proyectos del portafolio"
              >
                {portfolioInfo.map((portfolio) => (
                  <PortfolioCard
                    key={portfolio.alt}
                    name={portfolio.name}
                    type={portfolio.type}
                    href={portfolio.url}
                    alt={portfolio.alt}
                    imageUrl={portfolio.imageUrl}
                    aria-label={`Proyecto ${portfolio.name}, tipo ${portfolio.type}`}
                    lang={lang}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioPage;
