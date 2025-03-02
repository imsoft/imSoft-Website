import Link from "next/link";

import { MessagesSquare, Send } from "lucide-react";

interface CtaButtonsProps {
  message?: string;
}

export const CtaButtons = ({
  message = "👋%20Hola%20imSoft,%20¿cómo%20estás?%20Estoy%20interesado%20en%20conocer%20más%20sobre%20sus%20servicios.%20Me%20gustaría%20recibir%20información%20detallada%20y%20asesoría%20para%20encontrar%20la%20mejor%20solución%20para%20mi%20negocio.%20¡Gracias!🚀",
}: CtaButtonsProps) => {
  return (
    <>
      <Link
        href={`https://wa.me/523325365558?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        aria-label="Enlace para contactar vía WhatsApp"
      >
        <MessagesSquare size={16} />
        Hablemos por WhatsApp
      </Link>
      <Link
        href="mailto:contacto@imsoft.io"
        className="flex gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        aria-label="Enlace para contactar vía correo electrónico"
      >
        <Send size={16} />
        Email de contacto
      </Link>
    </>
  );
};
