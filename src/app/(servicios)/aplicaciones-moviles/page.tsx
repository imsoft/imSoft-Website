import { ServiceFeatures } from "@/components/services/Features";

const pageInfo = {
  service: "Aplicaciones Móviles Personalizadas",
  title: "Conecta con tus clientes en cualquier momento y lugar",
  description:
    "Transforma tu negocio con una aplicación móvil intuitiva, rápida y diseñada para fidelizar clientes y aumentar ventas.",
  features: [
    {
      name: "Experiencia optimizada",
      description:
        "Diseño intuitivo y fluido para ofrecer la mejor experiencia de usuario.",
    },
    {
      name: "Notificaciones en tiempo real",
      description:
        "Mantén a tus clientes informados y comprometidos con alertas personalizadas.",
    },
    {
      name: "Integración con sistemas",
      description:
        "Conecta tu app con plataformas de pago, bases de datos y más.",
    },
    {
      name: "Rendimiento y seguridad",
      description:
        "Apps rápidas, seguras y optimizadas para cualquier dispositivo móvil.",
    },
  ],
  message:
    "👋%20Hola%20imSoft,%20¿cómo%20estás?%20Me%20interesa%20desarrollar%20una%20aplicación%20móvil.%20📱%20Quisiera%20conocer%20detalles%20sobre%20el%20proceso%20de%20desarrollo,%20funcionalidades%20y%20costos.",
};

const MobileAppsPage = () => {
  return (
    <>
      <ServiceFeatures {...pageInfo} />
    </>
  );
};

export default MobileAppsPage;
