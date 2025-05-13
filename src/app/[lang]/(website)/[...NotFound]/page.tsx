import Link from "next/link";

const NotFoundPage = async () => {
  return (
    <div className="grid min-h-full place-items-center bg-background px-6 py-48 sm:py-64 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
          Oops! We couldn&apos;t find this page
        </h1>
        <p className="mt-6 text-lg font-medium text-primary sm:text-xl/8">
          It looks like this page doesn&apos;t exist or has been moved. Don&apos;t worry,
          we&apos;ll help you get back on track.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href={`/`}
            className="rounded-md bg-blue-600 dark:bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
