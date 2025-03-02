import { Metadata } from "next";
import { ServicesSection } from "@/components/services/Services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de diseño y desarrollo web, diseño gráfico, marketing digital y consultoría de marca.",
};

const ServicesPage = () => {
  return (
    <>
      <ServicesSection />
    </>
  );
};

export default ServicesPage;
