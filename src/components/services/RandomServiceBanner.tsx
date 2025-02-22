"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  { name: "Análisis de Datos", href: "/analisis-de-datos" },
  { name: "Aplicaciones Móviles", href: "/aplicaciones-moviles" },
  { name: "Aplicaciones Web", href: "/aplicaciones-web" },
  { name: "Campañas en Google Ads", href: "/campanas-en-google-ads" },
  { name: "Desarrollo de Sitios Web", href: "/desarrollo-de-sitios-web" },
  { name: "Posicionamiento SEO", href: "/posicionamiento-seo" },
  { name: "Tiendas en Línea", href: "/tienda-en-linea" },
];

const RandomServiceBanner = () => {
  const [randomService, setRandomService] = useState(services[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * services.length);
    setRandomService(services[randomIndex]);
  }, []);

  return (
    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
      Descubre más sobre {randomService.name}, da clic{" "}
      <Link href={randomService.href} className="font-semibold text-blue-600">
        <span aria-hidden="true" className="absolute inset-0" />
        aquí <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
};

export default RandomServiceBanner;
