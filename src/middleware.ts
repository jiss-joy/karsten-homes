import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/'],
}

/**
 * @param request The request send to the server to authenticate the user.
 * Authentication is only staging environment.
 */
export function middleware(request: NextRequest) {
  console.log(process.env.NODE_ENV)

  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development')
    return NextResponse.next()

  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = atob(auth).toString().split(':')

    if (user === process.env.BASIC_AUTH_USER && pwd === process.env.BASIC_AUTH_PASSWORD) {
      return NextResponse.next()
    }
  }

  const url = request.nextUrl
  url.pathname = '/api/basic-auth'

  return NextResponse.rewrite(url)
}
