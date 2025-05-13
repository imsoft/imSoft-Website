"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ServicesSectionProps {
  dictionary: {
    title: string;
    description: string;
    services: {
      title: string;
      description: string;
      imageUrl: string;
      href: string;
    }[];
  };
  lang: string;
}

export const ServicesSection = ({
  dictionary: { title, description, services },
  lang,
}: ServicesSectionProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverZoom = {
    hover: { scale: 1.05 },
  };

  return (
    <div
      className="bg-background py-10 sm:py-12"
      aria-label="Sección de servicios de imSoft"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2
            className="text-balance mt-20 text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="mt-2 text-lg/8 text-foreground"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-start justify-between"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            >
              <motion.div
                className="relative w-full overflow-hidden rounded-2xl"
                whileHover="hover"
              >
                <Link
                  href={`/${lang}${service.href}`}
                  aria-label={`Imagen del servicio: ${service.title}`}
                  className="block"
                >
                  <motion.div variants={hoverZoom} transition={{ duration: 0.4, ease: "easeOut" }}>
                    <Image
                      alt={`${service.title} - imSoft`}
                      src={service.imageUrl}
                      className="aspect-video w-full rounded-2xl bg-secondary object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      width={3603}
                      height={2402}
                      aria-label={`Imagen representativa del servicio: ${service.title}`}
                    />
                  </motion.div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </Link>
              </motion.div>

              <motion.div
                className="max-w-xl"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 + 0.2 }}
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-primary group-hover:text-blue-600">
                    <Link
                      href={`/${lang}${service.href}`}
                      aria-label={`Enlace al servicio: ${service.title}`}
                    >
                      <span className="absolute inset-0" />
                      {service.title}
                    </Link>
                  </h3>
                  <p
                    className="mt-3 line-clamp-3 text-sm/6 text-foreground"
                    aria-label={`Descripción del servicio: ${service.description}`}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
