export const Header = () => {
  return (
    <>
      <header className="py-8" aria-label="Encabezado del blog de imSoft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-balance text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl"
              aria-label="Título del blog: Nuestro Blog"
            >
              Nuestro Blog
            </h2>
            <p className="mt-2 text-lg/8 text-foreground">
              Descubre estrategias, tendencias y consejos para potenciar tu
              negocio con tecnología.
            </p>
          </div>
        </div>
      </header>
    </>
  );
};
