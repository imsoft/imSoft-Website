import { ServiceFeatures } from "@/components/services/Features";

const pageInfo = {
  service: "Desarrollo de Sitios Web",
  title: "Convierte tu sitio web en una máquina de ventas",
  description:
    "Creamos sitios web rápidos, seguros y optimizados para generar más clientes y potenciar tu negocio.",
  features: [
    {
      name: "Diseño atractivo y funcional",
      description:
        "Experiencia de usuario optimizada para convertir visitantes en clientes.",
    },
    {
      name: "Velocidad y rendimiento",
      description:
        "Sitios web rápidos y eficientes para mejorar la experiencia del usuario y el SEO.",
    },
    {
      name: "Seguridad avanzada",
      description:
        "Protección contra ataques y vulnerabilidades para garantizar un sitio confiable.",
    },
    {
      name: "SEO integrado",
      description:
        "Optimización desde el primer día para posicionarte en Google.",
    },
  ],
  message:
    "👋%20Hola%20imSoft,%20¿cómo%20estás?%20Estoy%20interesado%20en%20desarrollar%20un%20sitio%20web%20para%20mi%20negocio.%20💻%20Me%20gustaría%20conocer%20opciones%20y%20características%20para%20optimizar%20mi%20presencia%20digital.%20¿Podrían%20darme%20más%20información?",
};

const WebPageDevelopmentPage = () => {
  return (
    <>
      <ServiceFeatures {...pageInfo} />
    </>
  );
};

export default WebPageDevelopmentPage;
