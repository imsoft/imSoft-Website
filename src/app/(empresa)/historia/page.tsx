import Image from "next/image";
import { Metadata } from "next";
import { CtaButtons } from "@/components/CtaButtons";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "Conoce la historia de imSoft, una empresa de tecnología con propósito y pasión por la innovación. Descubre cómo hemos crecido y evolucionado para ayudar a más negocios a alcanzar su máximo potencial.",
};

const HistoryPage = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base/7 font-semibold text-blue-600">
              Nuestra historia
            </p>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Innovación con propósito, tecnología con impacto
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  imSoft nació con una visión clara: ayudar a empresas y
                  emprendedores a aprovechar la tecnología para crecer y
                  destacar en el mercado. Lo que comenzó como un sueño, pronto
                  se convirtió en un equipo apasionado por la innovación y la
                  eficiencia digital.
                </p>
                <p className="mt-8">
                  Desde el primer día, nos hemos enfocado en crear soluciones
                  que realmente marquen la diferencia. No solo desarrollamos
                  software, creamos herramientas que impulsan negocios y
                  transforman ideas en resultados reales.
                </p>
              </div>
              <div>
                <p>
                  Cada proyecto ha sido un desafío, pero también una oportunidad
                  para aprender, mejorar y crecer junto a nuestros clientes.
                  Creemos en la tecnología como un puente hacia nuevas
                  oportunidades, y nuestro compromiso es hacer que cada solución
                  sea intuitiva, eficiente y escalable.
                </p>
                <p className="mt-8">
                  El futuro de imSoft es claro: seguir innovando, seguir
                  aprendiendo y seguir creando soluciones digitales que ayuden a
                  más negocios a alcanzar su máximo potencial. Nos emociona lo
                  que está por venir, y queremos que seas parte de esta
                  historia.
                </p>
              </div>
            </div>
            <div className="mt-10 flex gap-x-6">
              <CtaButtons />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="Historia de imSoft"
              src="https://res.cloudinary.com/https-imsoft-io/image/upload/v1740207259/imsoft-images/pictures/historia-imsoft.jpg"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              width={1440}
              height={1024}
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
