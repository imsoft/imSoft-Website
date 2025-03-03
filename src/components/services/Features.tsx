import { Check } from "lucide-react";
import { CtaButtons } from "../CtaButtons";

interface ServiceFeaturesProps {
  service: string;
  title: string;
  description: string;
  features: Feature[];
}

interface Feature {
  name: string;
  description: string;
}

export const ServiceFeatures = ({
  service,
  title,
  description,
  features,
}: ServiceFeaturesProps) => {
  return (
    <>
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:text-center">
            <h2
              className="text-base/7 font-semibold text-ring"
              aria-label="Nombre del servicio"
            >
              {service}
            </h2>
            <p
              className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl lg:text-balance"
              aria-label="Título del servicio"
            >
              {title}
            </p>
            <p
              className="mt-6 text-lg/8 text-foreground"
              aria-label="Descripción del servicio"
            >
              {description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl
              className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
              aria-label="Lista de características del servicio"
            >
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative pl-16"
                  aria-label={`Característica: ${feature.name}`}
                >
                  <dt className="text-base/7 font-semibold text-primary-foreground">
                    <div
                      className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-blue-600"
                      aria-hidden="true"
                    >
                      <Check aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd
                    className="mt-2 text-base/7 text-foreground"
                    aria-label={`Descripción: ${feature.description}`}
                  >
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className="mt-10 flex items-center justify-center gap-x-6"
            aria-label="Botones de llamado a la acción"
          >
            <CtaButtons />
          </div>
        </div>
      </div>
    </>
  );
};
