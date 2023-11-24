import { NextRequest, NextResponse } from 'next/server'
import { Routes } from '@/routes/routes'
import { NextURL } from 'next/dist/server/web/next-url'

function maintenanceUrl(request: NextRequest): NextURL {
  const url = request.nextUrl
  url.pathname = Routes.maintenance

  return url
}

export const config = {
  matcher: ['/', '/maintenance'],
}

/**
 * @param request The request send to the server to authenticate the user.
 * Authentication is only staging environment.
 */
export function middleware(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_ENV === 'production' || process.env.NODE_ENV === 'development') {
    /**
     * # TODO Refactor this code.
     */
    return NextResponse.redirect(maintenanceUrl(request))
  }

  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = atob(auth).toString().split(':')

    if (user === process.env.BASIC_AUTH_USER && pwd === process.env.BASIC_AUTH_PASSWORD) {
      return NextResponse.redirect(maintenanceUrl(request))
    }
  }

  const url = request.nextUrl
  url.pathname = '/api/basic-auth'

  return NextResponse.rewrite(url)
}
