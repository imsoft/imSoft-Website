import { Metadata } from "next";
import { CtaButtons } from "@/components/CtaButtons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Hablemos sobre tu próximo gran proyecto. Contáctanos y empecemos a trabajar juntos.",
};

const ContactPage = () => {
  return (
    <>
      <main aria-label="Página de contacto para iniciar proyectos con imSoft">
        <div className="bg-background">
          <div className="mx-auto max-w-7xl py-48 sm:px-6 sm:py-64 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2
                className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
                aria-label="Título de la sección de contacto"
              >
                Hablemos sobre tu próximo gran proyecto
              </h2>
              <p
                className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-muted-foreground"
                aria-label="Descripción de la sección de contacto"
              >
                Estamos listos para ayudarte a transformar tu idea en una
                solución digital poderosa. Contáctanos y empecemos a trabajar
                juntos.
              </p>
              <div
                className="mt-10 flex items-center justify-center gap-x-6"
                aria-label="Botones de llamado a la acción"
              >
                <CtaButtons />
              </div>
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              >
                <circle
                  r={512}
                  cx={512}
                  cy={512}
                  fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#3b82f6" />
                    <stop offset={1} stopColor="#3b82f6" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
