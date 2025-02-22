import { ServiceFeatures } from "@/components/services/Features";

const pageInfo = {
  service: "Campañas en Google Ads",
  title: "Atrae clientes en el momento exacto con anuncios optimizados",
  description:
    "Llega a tu audiencia ideal y maximiza tus conversiones con estrategias de Google Ads que realmente funcionan.",
  features: [
    {
      name: "Segmentación precisa",
      description:
        "Anuncios dirigidos a las personas correctas en el momento adecuado.",
    },
    {
      name: "Optimización continua",
      description:
        "Ajustamos tu campaña para mejorar el rendimiento y reducir costos.",
    },
    {
      name: "Anuncios atractivos",
      description:
        "Copywriting y diseño optimizados para aumentar clics y conversiones.",
    },
    {
      name: "Resultados medibles",
      description:
        "Datos en tiempo real para analizar, ajustar y mejorar tu ROI.",
    },
  ],
  message:
    "👋%20Hola%20imSoft,%20¿cómo%20estás?%20Estoy%20interesado%20en%20campañas%20de%20Google%20Ads%20para%20mi%20negocio.%20📢%20Quisiera%20saber%20cómo%20pueden%20ayudarme%20a%20atraer%20más%20clientes%20y%20optimizar%20mi%20inversión%20en%20publicidad.",
};

const GoogleAdsCampaignsPage = () => {
  return (
    <>
      <ServiceFeatures {...pageInfo} />
    </>
  );
};

export default GoogleAdsCampaignsPage;
