import './globals.css'
import { Aside } from '@/components/aside/aside'
import { Navbar } from '@/components/nav/navbar'

export const metadata = {
  title: 'Henrique Algauer',
  description: 'Personal Web Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className='bg-zinc-700 font-mono scrollbar-none flex flex-col justify-between'>
        <Aside />
        <div className='sm:pl-20'>
          <Navbar />
        </div>
        {children}
        
      </body>
    </html>
  )
}
