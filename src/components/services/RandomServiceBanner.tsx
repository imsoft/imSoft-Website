"use client";

import { RandomServiceBannerDictionary } from "@/interfaces/RandomServiceBanner";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Service {
  name: string;
  href: string;
}

interface RandomServiceBannerProps {
  dictionary: RandomServiceBannerDictionary;
  lang: string;
}

const RandomServiceBanner = ({
  dictionary,
  lang,
}: RandomServiceBannerProps) => {
  const { text, linkText, services } = dictionary;
  const [randomService, setRandomService] = useState<Service>(services[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * services.length);
    setRandomService(services[randomIndex]);
  }, [services]);

  return (
    <div
      className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-border hover:ring-foreground/20 transition-colors duration-300"
      aria-label="Banner promocional de un servicio aleatorio"
    >
      {text}{" "}
      <span aria-label={`Servicio destacado: ${randomService.name}`}>
        {randomService.name}
      </span>
      , da clic{" "}
      <Link
        href={`/${lang}${randomService.href}`}
        className="font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-300"
        aria-label={`Enlace al servicio: ${randomService.name}`}
      >
        <span aria-hidden="true" className="absolute inset-0" />
        {linkText} <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
};

export default RandomServiceBanner;
