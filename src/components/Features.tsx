import { Check } from "lucide-react";
import { CtaButtons } from "./CtaButtons";

const features = [
  {
    name: "Tecnología a tu medida",
    description: "Soluciones digitales adaptadas a tu negocio.",
  },
  {
    name: "Crece sin límites",
    description: "Tecnología escalable que evoluciona contigo.",
  },
  {
    name: "Resultados comprobados",
    description: "Experiencia comprobada que impulsa tu éxito.",
  },
  {
    name: "Estrategia inteligente",
    description: "Datos y análisis para maximizar tu inversión.",
  },
  {
    name: "Innovación continua",
    description: "Tecnología de vanguardia para tu negocio.",
  },
  {
    name: "Soporte confiable",
    description:
      "Acompañamiento y asistencia para el crecimiento de tu proyecto.",
  },
];

export const FeaturesSection = () => {
  return (
    <>
      <div className="bg-white py-32 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-2">
              <h2 className="text-base/7 font-semibold text-blue-600">
                Lo Que Hace la Diferencia
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Estrategias que te hacen destacar
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                Soluciones digitales diseñadas para posicionarte por encima de
                la competencia. Innovación, eficiencia y resultados que impulsan
                tu negocio.
              </p>
              <div className="mt-8 flex gap-x-6">
                <CtaButtons />
              </div>
            </div>
            <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-gray-900">
                    <Check
                      aria-hidden="true"
                      className="absolute left-0 top-1 size-5 text-blue-500"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
