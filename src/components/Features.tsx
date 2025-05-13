"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CtaButtons } from "./CtaButtons";
import { CtaButton } from "@/interfaces/CtaButton";

interface FeatureSectionProps {
  dictionary: {
    headline: string;
    title: string;
    description: string;
    features: {
      name: string;
      description: string;
    }[];
  };
  ctaButtons: CtaButton;
}

export const FeaturesSection = ({ dictionary, ctaButtons }: FeatureSectionProps) => {
  const { headline, title, description, features } = dictionary;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const iconAnimation = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <div className="bg-background py-8 sm:py-10" aria-label="Sección de características y beneficios">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            className="col-span-2"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-base/7 font-semibold text-blue-500" aria-label="Encabezado de la sección de características">
              {headline}
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl" aria-label="Subtítulo de la sección de características">
              {title}
            </p>
            <p className="mt-6 text-base/7 text-foreground" aria-label="Descripción de la sección de características">
              {description}
            </p>
            <div className="mt-8 flex gap-x-6" aria-label="Botones para contactar a imSoft">
              <CtaButtons dictionary={ctaButtons} />
            </div>
          </motion.div>

          <motion.dl
            className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-foreground sm:grid-cols-2 lg:gap-y-16"
            aria-label="Lista de características de imSoft"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative pl-9"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                aria-label={`Característica: ${feature.name}`}
              >
                <motion.dt
                  className="font-semibold text-primary-foreground flex items-center"
                  aria-label={`Nombre de la característica: ${feature.name}`}
                >
                  <motion.div
                    className="absolute left-0 top-1"
                    variants={iconAnimation}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                  >
                    <Check aria-hidden="true" className="size-5 text-blue-600" />
                  </motion.div>
                  <span className="text-primary">{feature.name}</span>
                </motion.dt>
                <motion.dd
                  className="mt-2"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                  aria-label={`Descripción de la característica: ${feature.description}`}
                >
                  {feature.description}
                </motion.dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </div>
  );
};
