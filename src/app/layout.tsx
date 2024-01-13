import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


import Navbar from './Components/Navbar/Navbar'
import NavbarRight from './Components/Navbar/NavbarRight'
import Footer from './Components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CEHRSR',
  description: 'Conveying Electronic Health Records and Synopsis Repository',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
      {/* <Navbar/> */}
      <NavbarRight/>
      {children}
        
        <Footer/>
      </body>
    </html>
  )
}
