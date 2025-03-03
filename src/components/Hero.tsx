import { CtaButtons } from "./CtaButtons";
import RandomServiceBanner from "./services/RandomServiceBanner";

export const HeroSection = () => {
  return (
    <>
      <div
        className="bg-background transition-colors duration-300"
        aria-label="Sección principal del sitio"
      >
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-16 sm:py-12 lg:py-14">
            <div
              className="hidden sm:mb-8 sm:flex sm:justify-center"
              aria-label="Banner de servicio destacado"
            >
              <RandomServiceBanner />
            </div>
            <div className="text-center">
              <h1
                className="text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl"
                aria-label="Mensaje principal del sitio"
              >
                Transformamos Ideas en Software
              </h1>
              <p
                className="mt-8 text-pretty text-lg font-medium text-secondary-foreground sm:text-xl/8"
                aria-label="Descripción de los servicios de imSoft"
              >
                En imSoft, convertimos tu visión en realidad con tecnología
                innovadora y desarrollo de software de alto impacto.
                <br />
                📈 Más tráfico. Más clientes. Más crecimiento.
              </p>
              <div
                className="mt-10 flex items-center justify-center gap-x-6"
                aria-label="Botones de acción principal"
              >
                <CtaButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
