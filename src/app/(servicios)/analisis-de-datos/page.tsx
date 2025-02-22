import { ServiceFeatures } from "@/components/services/Features";

const pageInfo = {
  service: "Análisis de Datos Inteligente",
  title: "Convierte información en crecimiento estratégico",
  description:
    "Extrae valor de tus datos y transforma cada decisión en una oportunidad para mejorar tu negocio.",
  features: [
    {
      name: "Decisiones basadas en datos",
      description:
        "Toma decisiones estratégicas con información precisa y en tiempo real.",
    },
    {
      name: "Optimización de procesos",
      description:
        "Mejora la eficiencia operativa y reduce costos con análisis inteligente.",
    },
    {
      name: "Predicción y tendencias",
      description:
        "Anticipa cambios en el mercado y adelántate a la competencia.",
    },
    {
      name: "Reportes detallados",
      description:
        "Obtén visualizaciones claras y comprensibles para impulsar tu negocio.",
    },
  ],
  message:
    "👋%20Hola%20imSoft,%20¿cómo%20estás?%20Quiero%20conocer%20más%20sobre%20sus%20servicios%20de%20análisis%20de%20datos.%20📊%20Me%20interesa%20entender%20cómo%20puedo%20aprovechar%20mis%20datos%20para%20mejorar%20mis%20estrategias%20y%20tomar%20mejores%20decisiones.",
};

const DataAnalysisPage = () => {
  return (
    <>
      <ServiceFeatures {...pageInfo} />
    </>
  );
};

export default DataAnalysisPage;
