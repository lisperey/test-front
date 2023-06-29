import './globals.css'
import { Plus_Jakarta_Sans} from 'next/font/google'
import { HeaderLogo } from '@/components/header-logo'
import { Header } from '@/components/header'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>
        <HeaderLogo/>
        <Header/>
        {children}
      </body>
    </html>
  )
}
