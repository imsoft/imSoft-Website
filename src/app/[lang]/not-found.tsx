import Link from "next/link";
import type { Lang } from "@/types/Lang";
import { getDictionary } from "../i18n/dictionary";

const NotFoundPage = async ({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const { title, description, backHome, contactSupport } = t.notFound;

  return (
    <>
      <div className="grid min-h-full place-items-center bg-background px-6 py-48 sm:py-64 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-ring">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-primary sm:text-xl/8">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={`/${lang}`}
              className="rounded-md bg-ring px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {backHome}
            </Link>
            <Link
              href={`/${lang}/contacto`}
              className="text-sm font-semibold text-primary"
            >
              {contactSupport} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
