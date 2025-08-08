import Image from "next/image"
import ghub from '../../images/github-icon.svg'
import linkedin from '../../images/linkedIn-icon.svg'

function Footer() {
    const urlGit = 'https://github.com/HenriqueAlgauer'
    const urlLinkedIn = 'https://www.linkedin.com/in/henrique-machado-algauer-3a850726a/'
    return (
        <footer className='p-8 flex flex-col gap-4 justify-center items-center text-zinc-100  right-0'>
            <div className='sm:hidden flex gap-4'>
                <a href={urlGit} target="_blank"><Image src={ghub} height={50} width={50} alt="css-icon" /></a>
                <a href={urlLinkedIn} target="_blank"><Image src={linkedin} height={50} width={50} alt="css-icon" /></a>
            </div>
            <p>Copyright ©2023 Henrique Alagauer </p>
        </footer>
    )
}

export { Footer }