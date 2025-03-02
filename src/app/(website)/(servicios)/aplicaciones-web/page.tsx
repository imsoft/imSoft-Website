import { ServiceFeatures } from "@/components/services/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplicaciones Web Personalizadas",
  description:
    "Desarrollamos aplicaciones web seguras y escalables que mejoran la eficiencia y productividad de tu empresa.",
};

const pageInfo = {
  service: "Aplicaciones Web Personalizadas",
  title: "Automatiza y optimiza tu negocio con tecnología a medida",
  description:
    "Desarrollamos aplicaciones web seguras y escalables que mejoran la eficiencia y productividad de tu empresa.",
  features: [
    {
      name: "Desarrollo a medida",
      description:
        "Soluciones adaptadas a las necesidades y objetivos de tu negocio.",
    },
    {
      name: "Escalabilidad garantizada",
      description: "Aplicaciones preparadas para crecer junto con tu empresa.",
    },
    {
      name: "Seguridad y rendimiento",
      description:
        "Protección avanzada y optimización para garantizar velocidad y estabilidad.",
    },
    {
      name: "Integraciones flexibles",
      description:
        "Conexión con herramientas y sistemas para mejorar la eficiencia.",
    },
  ],
  message:
    "👋%20Hola%20imSoft,%20¿cómo%20estás?%20Necesito%20una%20aplicación%20web%20para%20mi%20negocio.%20🔧%20Me%20gustaría%20saber%20qué%20opciones%20tienen%20y%20cómo%20puede%20ayudarme%20a%20mejorar%20la%20eficiencia%20de%20mi%20empresa.",
};

const WebAppsPage = () => {
  return (
    <>
      <ServiceFeatures {...pageInfo} />
    </>
  );
};

export default WebAppsPage;
