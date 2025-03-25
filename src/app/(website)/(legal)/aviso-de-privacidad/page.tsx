import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de privacidad de imSoft",
  robots: {
    index: false,
    follow: true,
  },
};

const PrivacyNoticePage = () => {
  return (
    <>
      <main aria-label="Página del Aviso de Privacidad de imSoft">
        <div className="relative overflow-hidden bg-background py-16">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1 aria-label="Encabezado del Aviso de Privacidad">
                <span className="block text-center text-lg font-semibold text-primary-600">
                  imSoft
                </span>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-primary sm:text-4xl">
                  Aviso de Privacidad
                </span>
              </h1>
            </div>
            <div className="prose prose-lg prose-blue max-w-screen-lg mx-auto mt-6 text-secondary-foreground">
              <p aria-label="Introducción sobre la responsabilidad del uso de datos personales">
                Brandon Uriel Garcia Ramos mejor conocido como imSoft, con
                domicilio en Guadalajara, Jalisco, México y portal de internet
                imsoft.io/aviso-de-privacidad, es el responsable del uso y
                protección de sus datos personales, y al respecto le informamos
                lo siguiente:
              </p>
              <h2 aria-label="Fines del uso de los datos personales">
                <strong className="text-primary">
                  ¿Para qué fines utilizaremos sus datos personales?
                </strong>
              </h2>
              <p>
                Los datos personales que recabamos de usted, los utilizaremos
                para las siguientes finalidades que son necesarias para el
                servicio que solicita:
              </p>
              <p>
                Respuesta a mensajes del formulario de contacto, Prestación de
                cualquier servicio solicitado.
              </p>
              <h2 aria-label="Datos personales recabados">
                <strong className="text-primary">
                  ¿Qué datos personales utilizaremos para estos fines?
                </strong>
              </h2>
              <p>
                Para llevar a cabo las finalidades descritas en el presente
                aviso de privacidad, utilizaremos los siguientes datos
                personales:
              </p>
              <p>Datos de identificación y contacto, Datos laborales.</p>
              <h2 aria-label="Ejercicio de los derechos ARCO">
                <strong className="text-primary">
                  ¿Cómo puede acceder, rectificar o cancelar sus datos
                  personales, u oponerse a su uso o ejercer la revocación de
                  consentimiento?
                </strong>
              </h2>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de
                usted, para qué los utilizamos y las condiciones del uso que les
                damos (Acceso). Asimismo, es su derecho solicitar la corrección
                de su información personal en caso de que esté desactualizada,
                sea inexacta o incompleta (Rectificación); que la eliminemos de
                nuestros registros o bases de datos cuando considere que la
                misma no está siendo utilizada adecuadamente (Cancelación); así
                como oponerse al uso de sus datos personales para fines
                específicos (Oposición). Estos derechos se conocen como derechos
                ARCO.
              </p>
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, debe
                enviar una petición vía correo electrónico a contacto@imsoft.io
                y deberá contener:
              </p>
              <ul
                role="list"
                className="list-disc"
                aria-label="Lista de requisitos para ejercer derechos ARCO"
              >
                <li>Nombre completo del titular.</li>
                <li>Domicilio.</li>
                <li>Teléfono.</li>
                <li>Correo electrónico usado en este sitio web.</li>
                <li>Copia de una identificación oficial adjunta.</li>
                <li>Asunto «Derechos ARCO».</li>
              </ul>
              <h2 aria-label="Plazo de respuesta para solicitudes">
                <strong className="text-primary">
                  ¿En cuántos días le daremos respuesta a su solicitud?
                </strong>
              </h2>
              <p>5 días.</p>
              <h2 aria-label="Medio de comunicación para respuestas">
                <strong className="text-primary">
                  ¿Por qué medio le comunicaremos la respuesta a su solicitud?
                </strong>
              </h2>
              <p>contacto@imsoft.io.</p>
              <h2 aria-label="Tecnologías de rastreo en el sitio web">
                <strong className="text-primary">
                  El uso de tecnologías de rastreo en nuestro portal de internet
                </strong>
              </h2>
              <p>
                Le informamos que en nuestra página de internet utilizamos
                cookies, web beacons u otras tecnologías, a través de las cuales
                es posible monitorear su comportamiento como usuario de
                internet, así como brindarle un mejor servicio y experiencia al
                navegar en nuestra página.
              </p>
              <h2 aria-label="Modificaciones al aviso de privacidad">
                <strong className="text-primary">
                  ¿Cómo puede conocer los cambios en este aviso de privacidad?
                </strong>
              </h2>
              <p>
                El presente aviso de privacidad puede sufrir modificaciones,
                cambios o actualizaciones derivadas de nuevos requerimientos
                legales; de nuestras propias necesidades por los productos o
                servicios que ofrecemos; de nuestras prácticas de privacidad; de
                cambios en nuestro modelo de negocio, o por otras causas.
              </p>
              <p aria-label="Última fecha de actualización del aviso de privacidad">
                Última actualización de este aviso de privacidad: 21/02/2025.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyNoticePage;
