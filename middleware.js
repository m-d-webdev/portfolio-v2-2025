import { NextResponse } from 'next/server';


const locales = ['en', 'fr', 'ar'];

export function middleware(request) {


  const pathname = request.nextUrl.pathname;
  const isStatic = pathname.startsWith("/media")
    || pathname.startsWith("/lotties")
    || pathname.startsWith("/locales")
    || pathname.startsWith("/icones")
    || pathname.startsWith("/sitemap.xml")
    || pathname.startsWith("/sitemap-0.xml")
    || pathname.startsWith("/robots.txt")
    || pathname.startsWith("/api")
  if (isStatic) return NextResponse.next();


  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    console.log("pathnameHasLocale ---------------");

    return NextResponse.next();
  }

  const defVal = request.cookies?.get("i18next")?.value || "en";
  if (request.cookies?.get("i18next")?.value) {
    console.log("We are testing => This is the middleware ,i18next =>  ", request.cookies?.get("i18next").value);
  }
  request.nextUrl.pathname = `/${defVal}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};