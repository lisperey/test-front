
import './globals.css';
import { HeaderLogo } from '@/components/header-logo';
import { Header } from '@/components/header';
import { FilterContextProvider } from './contexts/filter-context';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { FilterBar } from '@/components/filter-bar';


const regular = Plus_Jakarta_Sans({
  weight: ['600','700','800'],
  subsets: ['latin']

})

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
      <body className={regular.className}>
        <FilterContextProvider>
          <HeaderLogo/>
          <Header/>
          <FilterBar/>
          <HeaderLogo/>
          {children}
        </FilterContextProvider> 
      </body>
    </html>
  )
}
