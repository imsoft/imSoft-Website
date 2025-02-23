import { ServiceFeatures } from "@/components/services/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiendas en Línea Optimizadas",
  description:
    "Lleva tu negocio al mundo digital con una tienda en línea segura, rápida y diseñada para maximizar tus ventas.",
};

const pageInfo = {
  service: "Tiendas en Línea Optimizadas",
  title: "Vende 24/7 con una tienda en línea poderosa",
  description:
    "Lleva tu negocio al mundo digital con una tienda en línea segura, rápida y diseñada para maximizar tus ventas.",
  features: [
    {
      name: "Proceso de compra optimizado",
      description:
        "Facilita la experiencia de compra con un diseño intuitivo y eficiente.",
    },
    {
      name: "Pagos seguros y flexibles",
      description:
        "Acepta múltiples métodos de pago con transacciones seguras y confiables.",
    },
    {
      name: "Gestión de inventario",
      description:
        "Administra productos, stock y pedidos en tiempo real desde cualquier dispositivo.",
    },
    {
      name: "SEO y visibilidad",
      description:
        "Aparece en los primeros resultados de búsqueda y atrae más clientes.",
    },
  ],
  message:
    "👋%20Hola%20imSoft,%20¿cómo%20estás?%20Quiero%20información%20sobre%20la%20creación%20de%20una%20tienda%20en%20línea.%20🛒%20Me%20interesa%20vender%20mis%20productos%20digitalmente%20y%20necesito%20conocer%20los%20planes%20y%20funcionalidades%20que%20ofrecen.",
};

const EcommercePage = () => {
  return (
    <>
      <ServiceFeatures {...pageInfo} />
    </>
  );
};

export default EcommercePage;
