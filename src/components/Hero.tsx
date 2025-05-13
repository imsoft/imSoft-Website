"use client";

import { motion } from "framer-motion";
import { CtaButton } from "@/interfaces/CtaButton";
import { CtaButtons } from "./CtaButtons";
import RandomServiceBanner from "./services/RandomServiceBanner";
import { RandomServiceBannerDictionary } from "@/interfaces/RandomServiceBanner";

interface HeroSectionProps {
  dictionary: {
    title: string;
    description: string[];
  };
  ctaButtons: CtaButton;
  randomServiceBanner: RandomServiceBannerDictionary;
  lang: string;
}

export const HeroSection = ({
  dictionary,
  ctaButtons,
  randomServiceBanner,
  lang,
}: HeroSectionProps) => {
  const { title, description } = dictionary;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="bg-background transition-colors duration-300"
      aria-label="Sección principal del sitio"
    >
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-8 sm:py-6 lg:py-7">
          {/* Animación para RandomServiceBanner */}
          <motion.div
            className="hidden sm:mb-8 sm:flex sm:justify-center"
            aria-label="Banner de servicio destacado"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <RandomServiceBanner dictionary={randomServiceBanner} lang={lang} />
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.h1
              className="mb-8 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl"
              aria-label="Mensaje principal del sitio"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {title}
            </motion.h1>

            {description.map((line, i) => (
              <motion.p
                key={i}
                className="text-pretty text-lg font-medium text-secondary-foreground sm:text-xl/8"
                aria-label="Descripción de los servicios de imSoft"
                variants={fadeInUp}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.2 + i * 0.1,
                }}
              >
                {line}
              </motion.p>
            ))}

            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              aria-label="Botones de acción principal"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <CtaButtons dictionary={ctaButtons} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
