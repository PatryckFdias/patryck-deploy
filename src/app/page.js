import { Portfolio } from "@/components/portfolio/portfolio"
import { Contact } from "@/components/contact/contact"
import { Welcome } from "@/components/welcome/welcome"
import { Footer } from "@/components/footer/footer"
// import { TestBar } from "@/components/testbar/testbar"

export default function Home() {
  
  return (
    <div className='h-full bg-zinc-700 container-2xl flex justify-between '>
       <div className='sm:pl-20 w-full '>
         <main className='w-full'>
           <Welcome/>
           <Portfolio/>
           <Contact/>
         </main>
         <Footer/>
       </div>
     </div>
  )
}
