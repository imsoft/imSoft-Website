"use client";

import Link from "next/link";

import { MessagesSquare, Send, LaptopMinimalCheck } from "lucide-react";
import { CtaButton } from "@/interfaces/CtaButton";

interface CtaButtonsProps {
  dictionary: CtaButton;
  showServices?: boolean;
  lang?: string;
}

export const CtaButtons = ({
  dictionary: { whatsapp, email, services, message },
  showServices = true,
  lang,
}: CtaButtonsProps) => {
  return (
    <>
      <Link
        href={`https://wa.me/523325365558?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-x-2 rounded-md items-center px-3.5 py-2.5 text-sm font-semibold shadow-sm 
        bg-blue-600 text-blue-50 
        hover:bg-blue-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        aria-label="Enlace para contactar vía WhatsApp"
      >
        <MessagesSquare size={16} />
        {whatsapp}
      </Link>
      <Link
        href="mailto:contacto@imsoft.io"
        className="flex gap-x-2 rounded-md items-center px-3.5 py-2.5 text-sm font-semibold shadow-sm 
        bg-blue-600 text-blue-50 
        hover:bg-blue-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        aria-label="Enlace para contactar vía correo electrónico"
      >
        <Send size={16} />
        {email}
      </Link>
      {showServices && (
        <Link
          href={`/${lang ?? ""}/servicios`}
          className="flex gap-x-2 rounded-md items-center px-3.5 py-2.5 text-sm font-semibold shadow-sm 
        bg-blue-600 text-blue-50 
        hover:bg-blue-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          aria-label="Enlace a la sección de servicios"
        >
          <LaptopMinimalCheck size={16} />
          {services}
        </Link>
      )}
    </>
  );
};
