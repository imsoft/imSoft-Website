import Image from "next/image";
import Link from "next/link";

interface ServicesSectionProps {
  dictionary: {
    title: string;
    description: string;
    services: {
      title: string;
      description: string;
      imageUrl: string;
      href: string;
    }[];
  };
  lang: string;
}

export const ServicesSection = ({
  dictionary: { title, description, services },
  lang,
}: ServicesSectionProps) => {
  return (
    <>
      <div
        className="bg-background py-10 sm:py-12"
        aria-label="Sección de servicios de imSoft"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2
              className="text-balance mt-20 text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
              aria-label="Título de la sección de servicios"
            >
              {title}
            </h2>
            <p
              className="mt-2 text-lg/8 text-foreground"
              aria-label="Descripción de la sección de servicios"
            >
              {description}
            </p>
          </div>
          <div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
            aria-label="Lista de servicios disponibles"
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-between"
                aria-label={`Servicio: ${service.title}`}
              >
                <div className="relative w-full">
                  <Link
                     href={`/${lang}${service.href}`}
                    aria-label={`Imagen del servicio: ${service.title}`}
                    className="block"
                  >
                    <Image
                      alt={service.title + " - imSoft"}
                      src={service.imageUrl}
                      className="aspect-video w-full rounded-2xl bg-secondary object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      width={3603}
                      height={2402}
                      aria-label={`Imagen representativa del servicio: ${service.title}`}
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </Link>
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-primary group-hover:text-blue-600">
                      <Link
                         href={`/${lang}${service.href}`}
                        aria-label={`Enlace al servicio: ${service.title}`}
                      >
                        <span className="absolute inset-0" />
                        {service.title}
                      </Link>
                    </h3>
                    <p
                      className="mt-3 line-clamp-3 text-sm/6 text-foreground"
                      aria-label={`Descripción del servicio: ${service.description}`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
