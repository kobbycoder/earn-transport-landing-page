import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Earn Transport',
  description: 'Seamlessly do more, Efficiently earn more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
