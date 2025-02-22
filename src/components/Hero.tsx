import { CtaButtons } from "./CtaButtons";
import RandomServiceBanner from "./services/RandomServiceBanner";

export const HeroSection = () => {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <RandomServiceBanner />
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Transformamos Ideas en Software
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                En imSoft, convertimos tu visión en realidad con tecnología
                innovadora y desarrollo de software de alto impacto.
                <br />
                📈 Más tráfico. Más clientes. Más crecimiento.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <CtaButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
