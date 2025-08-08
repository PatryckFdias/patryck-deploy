import Image from "next/image"
import Link from "next/link"
import ghub from '../../images/github-icon.svg'
import linkedin from '../../images/linkedIn-icon.svg'
import logo from '../../images/ha-logo.png'


const Aside = () => {
  const urlGit = 'https://github.com/HenriqueAlgauer'
  const urlLinkedIn = 'https://www.linkedin.com/in/henrique-machado-algauer-3a850726a/'

  return (
    <div className='hidden sm:block'>

      <aside className='h-full bg-zinc-700 fixed flex flex-col justify-between p-4 border-r border-sky-300'>
        <div>
          <Link href='/'> <Image src={logo} width={40} height={40} alt="logo" /></Link>
          {/* <button class="relative group">
              <div class="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-sky-300 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
              <div class="bg-zinc-700 h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
              <div class="bg-zinc-700 h-[1px] rounded"></div>
              <div class="bg-zinc-700 h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
              </div>
              </div>
            </button> */}
        </div>
        <div className='flex flex-col gap-4'>
          <a href={urlGit} target="_blank"><Image src={ghub} height={50} width={50} alt="css-icon" /></a>
          <a href={urlLinkedIn} target="_blank"><Image src={linkedin} height={50} width={50} alt="css-icon" /></a>
        </div>
      </aside>
    </div>
  )
}

export { Aside }