import './globals.css'
import { Inter } from 'next/font/google'
import { cx } from './utils'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: "--font-in" })
const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: "--font-mr" })

export const metadata = {
  title: 'SEO BLOB APP',
  description: 'Where the journey is shared',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable, 
          "font-mr bg-light dark:bg-dark"
          )}
      >
        {children}
      </body>
    </html>
  )
}
