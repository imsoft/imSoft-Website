import { Metadata } from "next";
import { PortfolioCard } from "@/components/portfolio/Card";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Descubre cómo hemos ayudado a empresas a crecer con soluciones digitales innovadoras. Cada proyecto es una historia de éxito hecha con tecnología, estrategia y pasión.",
};

const portfolioInfo = [
  {
    name: "BemästraDental",
    type: "Sitio Web 👨‍💻",
    href: "https://xn--bemstradental-dfb.com/",
    alt: "Sitio Web - BemästraDental - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595313/imsoft-images/portfolio/website/sitio-web-dental-welt.png",
  },
  {
    name: "Infinito Empresarial y Aduanero",
    type: "Sitio Web 👨‍💻",
    href: "http://infinitoad.com/",
    alt: "Sitio Web - Infinito Empresarial y Aduanero  - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-infinito-empresarial-y-aduanero.png",
  },
  {
    name: "Profibra",
    type: "Sitio Web 👨‍💻",
    href: "http://profibra.com.mx/",
    alt: "Sitio Web - Profibra - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-profibra.png",
  },
  {
    name: "Club De Estirpe",
    type: "Sitio Web 👨‍💻",
    href: "http://clubdeestirpe.com/",
    alt: "Sitio Web - Club de Estirpe - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595311/imsoft-images/portfolio/website/sitio-web-club-de-estirpe-imsoft.png",
  },
  {
    name: "Construcción Inteligente",
    type: "Sitio Web 👨‍💻",
    href: "https://construccioninteligente.mx/",
    alt: "Sitio Web - Construccion Inteligente - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595313/imsoft-images/portfolio/website/sitio-web-construccion-inteligente-imsoft.png",
  },
  {
    name: "Ferreacabados Jalisco",
    type: "Sitio Web 👨‍💻",
    href: "https://ferrejalisco.mx/",
    alt: "Sitio Web - Ferreacabdos Jalisco - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-ferreacabdos-jalisco-imsoft.png",
  },
  {
    name: "Red Municipal de Abogados",
    type: "Sitio Web 👨‍💻",
    href: "https://redmunicipaldeabogados.com/",
    alt: "Sitio Web - Red Municipal de Abogados - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595315/imsoft-images/portfolio/website/sitio-web-red-municipal-de-abogados-imsoft.png",
  },
  {
    name: "Unlimited Imports",
    type: "Sitio Web 👨‍💻",
    href: "https://unlimitedimports.com.mx/",
    alt: "Sitio Web - Unlimited Imports - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595315/imsoft-images/portfolio/website/sitio-web-unlimited-imports-imsoft.png",
  },
  {
    name: "JTP Logistics",
    type: "Sitio Web 👨‍💻",
    href: "https://www.jtp.com.mx/",
    alt: "Sitio Web - JTP Logistics - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595314/imsoft-images/portfolio/website/sitio-web-jtp-logistics-imsoft.png",
  },
  {
    name: "Constructora RM",
    type: "Sitio Web 👨‍💻",
    href: "https://constructorarm.mx/",
    alt: "Sitio Web - Constructora RM - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595312/imsoft-images/portfolio/website/sitio-web-constructorarm-imsoft.png",
  },
  {
    name: "Cursumi",
    type: "Sitio Web 👨‍💻",
    href: "https://cursumi.com/",
    alt: "Sitio Web Pro - Cursumi - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595491/imsoft-images/portfolio/website-pro/sitio-web-pro-cursumi.png",
  },
  {
    name: "The Gaming Corps",
    type: "Sitio Web 👨‍💻",
    href: "https://thegamingcorps.com/",
    alt: "Sitio Web Pro - The Gaming Corps - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1709919081/imsoft-images/portfolio/website-pro/sitio-web-pro-the-gaming-corps.png",
  },
  {
    name: "Santa Maria Del Oro Jalisco",
    type: "Sitio Web 👨‍💻",
    href: "http://santamariadelorojal.com/",
    alt: "Sitio Web Pro - Santa Maria Del Oro Jalisco - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595492/imsoft-images/portfolio/website-pro/sitio-web-pro-santa-maria-del-oro-jalisco-imsoft.png",
  },
  {
    name: "San Sebastián Del Oeste",
    type: "Sitio Web 👨‍💻",
    href: "https://sansebastiandeloeste.gob.mx/#/",
    alt: "Sitio Web Pro - Santa Sebastian Del Oeste - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595491/imsoft-images/portfolio/website-pro/sitio-web-pro-santa-sebastian-del-oeste-imsoft.png",
  },
  {
    name: "Tuxcacuesco",
    type: "Sitio Web 👨‍💻",
    href: "https://tuxcacuesco.gob.mx/#/",
    alt: "Sitio Web Pro - Tuxcacuesco - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595493/imsoft-images/portfolio/website-pro/sitio-web-pro-tuxcacuesco-imsoft.png",
  },
  {
    name: "Pastería La Hidalguense",
    type: "Aplicación Web 🖥️📊",
    href: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595207/imsoft-images/portfolio/web-application/aplicaciones-web-pasteria-la-hidalguense-imsoft.png",
    alt: "Aplicación Web - Pastería La Hidalguense - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595207/imsoft-images/portfolio/web-application/aplicaciones-web-pasteria-la-hidalguense-imsoft.png",
  },
  {
    name: "Club De Estirpe",
    type: "Aplicación Móvil 📱📊",
    href: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595385/imsoft-images/portfolio/mobile-apps/club-de-estirpe-aplicacion-movil-imsoft.png",
    alt: "Aplicación Móvil - Club De Estirpe - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595385/imsoft-images/portfolio/mobile-apps/club-de-estirpe-aplicacion-movil-imsoft.png",
  },
  {
    name: "Steridental",
    type: "Aplicación Web 🖥️📊",
    href: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1709918898/imsoft-images/portfolio/web-application/aplicaciones-web-steridental-imsoft.png",
    alt: "Aplicación Móvil - Steridental - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1709918898/imsoft-images/portfolio/web-application/aplicaciones-web-steridental-imsoft.png",
  },
  {
    name: "¡Contáctanos!",
    type: "¡Sigues tu! 💻🏆",
    href: "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595141/imsoft-images/portfolio/others/aqui-va-el-siguiente-paso-para-tu-negocio-imsoft.png",
    alt: "Contáctanos - imSoft",
    imageUrl:
      "https://res.cloudinary.com/https-imsoft-io/image/upload/v1706595141/imsoft-images/portfolio/others/aqui-va-el-siguiente-paso-para-tu-negocio-imsoft.png",
  },
];

const PortfolioPage = () => {
  return (
    <>
      <main aria-label="Página de portafolio con proyectos destacados de imSoft">
        <div className="bg-background">
          <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2
                  className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                  aria-label="Título de la sección de portafolio"
                >
                  Proyectos que Transforman Negocios
                </h2>
                <p
                  className="text-xl text-secondary-foreground"
                  aria-label="Descripción de la sección de portafolio"
                >
                  Descubre cómo hemos ayudado a empresas a crecer con soluciones
                  digitales innovadoras. Cada proyecto es una historia de éxito
                  hecha con tecnología, estrategia y pasión.
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
                    href={portfolio.href}
                    alt={portfolio.alt}
                    imageUrl={portfolio.imageUrl}
                    aria-label={`Proyecto ${portfolio.name}, tipo ${portfolio.type}`}
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
