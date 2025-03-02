import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <div className="grid min-h-full place-items-center bg-white px-6 py-48 sm:py-64 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            ¡Oops! No encontramos esta página
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Parece que esta página no existe o ha sido movida. No te preocupes,
            te ayudamos a volver al camino correcto.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Volver al inicio
            </Link>
            <Link href="#" className="text-sm font-semibold text-gray-900">
              Contactar soporte <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
