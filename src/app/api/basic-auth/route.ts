import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse('Authentication Failed!', {
    status: 401,
    headers: {
      'WWW-authenticate': 'Basic realm="Secure Area"',
    },
  })
}
