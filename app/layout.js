import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from "./auth-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prowling Gryphon Studios',
  description: 'Personal homepage of David Prepsl',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
