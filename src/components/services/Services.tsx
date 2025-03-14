import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Análisis de Datos",
    href: "/analisis-de-datos",
    description: "Toma decisiones basadas en datos, no en suposiciones.",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706898185/imsoft-images/services/analisis-de-datos-imsoft.jpg",
  },
  {
    id: 2,
    title: "Aplicaciones Móviles",
    href: "/aplicaciones-moviles",
    description: "Conéctate con clientes a través de una app intuitiva.",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706898396/imsoft-images/services/aplicaciones-moviles-imsoft.jpg",
  },
  {
    id: 3,
    title: "Aplicaciones Web",
    href: "/aplicaciones-web",
    description:
      "Automatiza y optimiza procesos con soluciones personalizadas.",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/aplicacion-web-imsoft.jpg",
  },
  {
    id: 4,
    title: "Campañas en Google Ads",
    href: "/campanas-en-google-ads",
    description: "Anuncios optimizados para más conversiones y menor costo.",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706902047/imsoft-images/services/campan%CC%83as-google-ads-imsoft.jpg",
  },
  {
    id: 5,
    title: "Desarrollo de Sitios Web",
    href: "/desarrollo-de-sitios-web",
    description: "Sitios rápidos, seguros y diseñados para vender.",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/sitio-web-imsoft.jpg",
  },
  {
    id: 6,
    title: "Posicionamiento SEO",
    href: "/posicionamiento-seo",
    description: "Aparece en Google y atrae más clientes orgánicamente.",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595026/imsoft-images/services/posicionamiento-seo-imsoft.jpg",
  },
  {
    id: 7,
    title: "Tienda en Línea",
    href: "/tienda-en-linea",
    description: "Vende 24/7 con una tienda optimizada y eficiente.",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595027/imsoft-images/services/tienda-en-linea-imsoft.jpg",
  },
];

export const ServicesSection = () => {
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
              Impulsa tu negocio hoy
            </h2>
            <p
              className="mt-2 text-lg/8 text-foreground"
              aria-label="Descripción de la sección de servicios"
            >
              Estrategias digitales diseñadas para hacer crecer tu marca, atraer
              más clientes y generar resultados reales.
            </p>
          </div>
          <div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
            aria-label="Lista de servicios disponibles"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-start justify-between"
                aria-label={`Servicio: ${service.title}`}
              >
                <div className="relative w-full">
                  <Image
                    alt={service.title + " - imSoft"}
                    src={service.imageUrl}
                    className="aspect-video w-full rounded-2xl bg-secondary object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    width={3603}
                    height={2402}
                    aria-label={`Imagen representativa del servicio: ${service.title}`}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-primary group-hover:text-blue-600">
                      <Link
                        href={service.href}
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
