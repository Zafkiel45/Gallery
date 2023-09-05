import './globals.scss'
import { Inter } from 'next/font/google'

const inria_sans = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Image Gallery',
  description: 'A image gallery create with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inria_sans.className}>{children}</body>
    </html>
  )
}
