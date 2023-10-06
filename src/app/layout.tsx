import type { Metadata } from 'next'
import { Providers } from './providers'
import { spaceGrotesk } from '@/styles/fonts'
import '@/styles/globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Karsten Homes',
  description: 'Real estate firm.',
}

export default RootLayout
