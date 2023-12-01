import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prowling Gryphon Studios',
  description: 'Personal homepage of David Prepsl',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="retro">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
