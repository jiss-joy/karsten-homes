import { NextRequest, NextResponse } from 'next/server'

const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production'
}

export const config = {
  matcher: ['/'],
}

export function middleware(request: NextRequest) {
  if (isProduction()) return NextResponse.next()

  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = atob(auth).toString().split(':')
    console.log(process.env.BASIC_AUTH_USER, process.env.BASIC_AUTH_PASSWORD)

    if (
      user === process.env.BASIC_AUTH_USER &&
      pwd === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next()
    }
  }

  const url = request.nextUrl
  url.pathname = '/api/basic-auth'

  return NextResponse.rewrite(url)
}
