import { ServiceFeatures } from "@/components/services/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posicionamiento SEO Estratégico",
  description:
    "Aumenta tu visibilidad en Google y atrae más clientes con estrategias SEO efectivas y personalizadas.",
};

const pageInfo = {
  service: "Posicionamiento SEO Estratégico",
  title: "Haz que tu negocio aparezca en los primeros resultados",
  description:
    "Aumenta tu visibilidad en Google y atrae más clientes con estrategias SEO efectivas y personalizadas.",
  features: [
    {
      name: "Optimización On-Page",
      description:
        "Mejora la estructura, velocidad y contenido de tu sitio para un mejor ranking.",
    },
    {
      name: "Estrategias de contenido",
      description:
        "Crea artículos y páginas optimizadas para atraer tráfico orgánico constante.",
    },
    {
      name: "SEO técnico avanzado",
      description:
        "Corrección de errores, indexación y mejoras para que Google entienda mejor tu web.",
    },
    {
      name: "Link Building inteligente",
      description:
        "Consigue enlaces de calidad para aumentar la autoridad de tu sitio.",
    },
  ],
  message:
    "👋%20Hola%20imSoft,%20¿cómo%20estás?%20Quiero%20mejorar%20el%20posicionamiento%20de%20mi%20negocio%20en%20Google.%20🔍%20Me%20gustaría%20saber%20cómo%20pueden%20ayudarme%20a%20aumentar%20mi%20tráfico%20y%20visibilidad%20en%20los%20buscadores.",
};

const SeoPositioningPage = () => {
  return (
    <>
      <ServiceFeatures {...pageInfo} />
    </>
  );
};

export default SeoPositioningPage;
