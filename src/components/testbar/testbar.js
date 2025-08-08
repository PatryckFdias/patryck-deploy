import Image from "next/image"
import ghub from '../../images/github-icon.svg'
import linkedin from '../../images/linkedIn-icon.svg'

const navLinks = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Services',
        link: '/services'
    },
    {
        title: 'Contact',
        link: '/contact'
    }

]
const TestBar = () => {
    const urlGit = 'https://github.com/HenriqueAlgauer'
    const urlLinkedIn = 'https://www.linkedin.com/in/henrique-machado-algauer-3a850726a/'


    return (
        <div className='bg-green-700 fixed h-full'>
            <div className='px-4 '>
                <div className='flex items-center flex-col justify-between'>
                    <div className="flex item-center ">
                        <a href="/" className=''>Navbar</a>
                    </div>
                    <div className='hidden md:block'>
                        <div className=' flex flex-col items-baseline '>
                            {navLinks.map((link, index) => (
                                <a key={index} className="text-gray-700 hover:bg-gray-600 hover:text-white py-2 rounded-md text-md font-md" href={link.link}>{link.title}</a>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/*navLinks*/}
        </div>
        /* <div className='flex flex-col gap-4'>
            <a href={urlGit} target="_blank"><Image src={ghub} height={50} width={50} alt="css-icon" /></a>
            <a href={urlLinkedIn} target="_blank"><Image src={linkedin} height={50} width={50} alt="css-icon" /></a>
        </div> */

    )
}

export { TestBar }