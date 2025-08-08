import { Contact } from "@/components/contact/contact"
import { Footer } from "@/components/footer/footer"

export default function Contato() {
    return (
        <div className='flex flex-col'>
            <Contact className='' />
            <div className="absolute bottom-0 right-0 left-0">
                <Footer />
            </div>
        </div>
    )
}