import Image from "next/image";
import SocialMediaBar from "./SocialMediaBar";
import Link from "next/link";
import { CtaButtons } from "./CtaButtons";

const navigation = {
  links: [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Portafolio", href: "/portafolio" },
    { name: "Blog", href: "/blog" },
    { name: "Historia", href: "/historia" },
    { name: "Contacto", href: "/contacto" },
  ],
  services: [
    { name: "Análisis de Datos", href: "/analisis-de-datos" },
    { name: "Aplicaciones Móviles", href: "/aplicaciones-moviles" },
    { name: "Aplicaciones Web", href: "/aplicaciones-web" },
    { name: "Campañas en Google Ads", href: "/campanas-en-google-ads" },
    { name: "Desarrollo de Sitios Web", href: "/desarrollo-de-sitios-web" },
    { name: "Posicionamiento SEO", href: "/posicionamiento-seo" },
    { name: "Tienda en Línea", href: "/tienda-en-linea" },
  ],
  legal: [{ name: "Aviso de privacidad", href: "/aviso-de-privacidad" }],
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-white" aria-label="Pie de página del sitio">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-9 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-7xl text-center">
            <hgroup aria-label="Llamado a la acción para impulsar negocios">
              <h2 className="text-base/7 font-semibold text-blue-600">
                Empieza hoy
              </h2>
              <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Impulsa tu negocio con soluciones digitales efectivas.
              </p>
            </hgroup>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
              Optimiza, automatiza y crece con tecnología diseñada para ti.
            </p>
            <div className="mt-8 flex justify-center gap-x-6" aria-label="Botones de contacto">
              <CtaButtons />
            </div>
          </div>
          <div className="mt-24 border-t border-gray-900/10 pt-12 xl:grid xl:grid-cols-3 xl:gap-8">
            <Image
              alt="imSoft logo"
              src="https://res.cloudinary.com/https-imsoft-io/image/upload/v1706594671/imsoft-images/imsoft/logotipo-imsoft-transparente-azul-rectangular.png"
              className="h-9 w-auto"
              width={200}
              height={50}
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div></div>
                <div className="mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-950">
                    imSoft
                  </h3>
                  <ul role="list" className="mt-6 space-y-4" aria-label="Botones de contacto">
                    {navigation.links.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-950">
                    Servicios
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                          aria-label={`Enlace al servicio de ${item.name}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-950">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                          aria-label={`Enlace a ${item.name}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex gap-x-6 md:order-2">
              <SocialMediaBar
                iconStyle={"text-gray-400 hover:text-primary-500"}
              />
            </div>
            <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
              &copy; 2025 imSoft, Inc. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
