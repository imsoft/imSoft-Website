import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es", "ru", "zh"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getLocale(request: any): string {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) return locales[0];

  const acceptedLocales = acceptLanguage
    .split(",")
    .map((lang: string) => lang.split(";")[0].trim());
  for (const locale of acceptedLocales) {
    if (locales.includes(locale)) {
      return locale;
    }
  }

  return locales[0];
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml|studio|studio/.*|api/.*).*)",
  ],
};
