import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect legacy Spanish routes from original WP site
  const legacyRedirects: Record<string, string> = {
    '/descripcion-quienes-somos': '/about',
    '/mision-descripcion':        '/about#mission',
    '/vision-descripcion':        '/about#vision',
    '/cumplimiento-descripcion':  '/about#compliance',
    '/servicios-descripcion':     '/services',
    '/oro':                       '/products/oro',
    '/diamante':                  '/products/esmeralda',
    '/metales-preciosos':         '/products/oro',
    '/conversor-de-divisas':      '/contact',
    '/contacto':                  '/contact',
  }

  if (legacyRedirects[pathname]) {
    return NextResponse.redirect(
      new URL(legacyRedirects[pathname], request.url),
      { status: 301 },
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icons|og|images).*)',
  ],
}
