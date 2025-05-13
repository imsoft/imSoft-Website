"use client";

import { motion } from "framer-motion";
import SocialMediaBar from "./SocialMediaBar";
import Link from "next/link";
import { CtaButtons } from "./CtaButtons";
import { Logo } from "./Logo";
import { CtaButton } from "@/interfaces/CtaButton";

interface FooterProps {
  dictionary: {
    cta: {
      title: string;
      subtitle: string;
      description: string;
    };
    navigation: {
      sections: {
        company: string;
        services: string;
        legal: string;
      };
      links: {
        name: string;
        href: string;
      }[];
      services: {
        name: string;
        href: string;
      }[];
      legal: {
        name: string;
        href: string;
      }[];
    };
    copyright: string;
  };
  ctaButtons: CtaButton;
  lang: string;
}

export const Footer = ({
  dictionary: { cta, navigation, copyright },
  ctaButtons,
  lang,
}: FooterProps) => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverZoom = {
    hover: { scale: 1.05 },
  };

  return (
    <>
      <footer className="bg-background" aria-label="Pie de página del sitio">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-9 sm:pt-24 lg:px-8 lg:pt-32">
          <motion.div
            className="mx-auto max-w-7xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.hgroup
              aria-label="Llamado a la acción para impulsar negocios"
              className="mb-6"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h2
                className="text-base/7 font-semibold text-blue-500"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {cta.title}
              </motion.h2>
              <motion.p
                className="mt-2 text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                {cta.subtitle}
              </motion.p>
            </motion.hgroup>

            <motion.p
              className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-foreground"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              {cta.description}
            </motion.p>

            <motion.div
              className="mt-8"
              aria-label="Botones de contacto"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <motion.div
                whileHover="hover"
                className="flex items-center justify-center gap-x-6"
                whileTap={{ scale: 0.95 }}
                variants={hoverZoom}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <CtaButtons dictionary={ctaButtons} />
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="mt-24 border-t border-border pt-12 xl:grid xl:grid-cols-3 xl:gap-8">
            <Logo
              light="https://res.cloudinary.com/https-imsoft-io/image/upload/v1740964322/imsoft-images/imsoft/logotipo-imsoft-blue.png"
              dark="https://res.cloudinary.com/https-imsoft-io/image/upload/v1740964323/imsoft-images/imsoft/logotipo-imsoft-white.png"
              width={150}
              height={40}
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div></div>
                <div className="mt-0">
                  <h3 className="text-sm/6 font-semibold text-foreground">
                    {navigation.sections.company}
                  </h3>
                  <ul
                    role="list"
                    className="mt-6 space-y-4"
                    aria-label="Botones de contacto"
                  >
                    {navigation.links.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={`/${lang}${item.href}`}
                          className="text-sm/6 text-muted-foreground hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-foreground">
                    {navigation.sections.services}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={`/${lang}${item.href}`}
                          className="text-sm/6 text-muted-foreground hover:text-primary"
                          aria-label={`Enlace al servicio de ${item.name}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-foreground">
                    {navigation.sections.legal}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={`/${lang}${item.href}`}
                          className="text-sm/6 text-muted-foreground hover:text-primary"
                          aria-label={`Enlace a ${item.name}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 md:flex md:items-center md:justify-between">
            <div className="flex gap-x-6 md:order-2">
              <SocialMediaBar
                iconStyle={"text-muted-foreground hover:text-primary"}
              />
            </div>
            <p className="mt-8 text-sm/6 text-muted-foreground md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} {copyright}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
