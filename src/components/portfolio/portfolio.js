import gitBrowser from '../../gifs/github.gif'
import adviceGenerator from '../../gifs/advice-generator.gif'
import nodeNotes from '../../gifs/nodeNotes.gif'
import solid from '../../gifs/solidApi.gif'
import spotify from '../../gifs/spotifyTailwind.gif'
import php from '../../gifs/projetophp.gif'


import Image from 'next/image'

const cards = [
    {
        image: php,
        title: 'Sistema Interno de Loja em PHP - MVC',
        linkGHub: 'https://github.com/HenriqueAlgauer/testPHP/tree/main/testMVC-Login',
        linkPage: 'https://github.com/HenriqueAlgauer/testPHP/tree/main/testMVC-Login',
        info: 'Projeto da faculdade, feito em dupla de um sistema interno de uma loja de roupas. É possível cadastrar produtos, efetuar vendas (com verificação de estoque do produto), uma venda gera um registro na tabela "financeiro". Foi imposto MVC como padrão arquitetural. Utilizado Bootstrap para estilização.',
        techs: ['PHP', 'BootStrap', 'JavaScript', 'MySQL',]
    },
    {
        image: nodeNotes,
        title: 'Node Notes - Aplicação Full Stack',
        linkGHub: 'https://github.com/HenriqueAlgauer/node-notes',
        linkPage: 'https://github.com/HenriqueAlgauer/front-node-notes',
        info: 'Projeto Full Stack com uma Web API em NodeJs com Express, KnexJS como query builder, Sqlite como BD para desenvolvimento, foi utilizado JWT para autenticação. O React App  foi criado com Vite e estilizado com Styled Components',
        techs: ['ReactJS', 'Styled Components', 'Vite', 'JavaScript', 'NodeJS', 'Express', 'KnexJS', 'Sqlite', 'BCryptJS']
    },
    {
        image: solid,
        title: 'Rest API - "gympass"',
        linkGHub: 'https://github.com/HenriqueAlgauer/solid-api',
        linkPage: 'https://github.com/HenriqueAlgauer/solid-api',
        info: 'Web api feita em NodeJS com Fastify como framework, a arquitetura é orientada a testes, com "repositórios in-memory", para facilitar os testes feitos com Vitest. Utilizado  Docker com uma imagem de Postgres como BD',
        techs: ['NodeJS', 'TypeScript', 'Fastify', 'Prisma ORM', 'Vitest', 'Docker', 'Zod', 'PostgreSql', 'BCryptJS']
    },
    {
        image: gitBrowser,
        title: 'Buscador de usuário GitHub API',
        linkGHub: 'https://github.com/HenriqueAlgauer/buscador-git',
        linkPage: 'https://github.com/HenriqueAlgauer/buscador-git',
        info: 'Projeto que consome a API do GitHub e rotorna o informações do usuário, 10 repositórios com a quantidade de forks, stars, views e a linguagem e também os últimos 10 eventos do tipo CreateEvent e PushEvent.',
        techs: ['HTML', 'CSS', 'JavaScript']
    },
    {
        image: spotify,
        title: 'Clone Spotify com Tailwind',
        linkGHub: 'https://github.com/HenriqueAlgauer/spotify-tailwind/',
        linkPage: 'https://github.com/HenriqueAlgauer/spotify-tailwind/',
        info: 'Clone do Spotify feito em React com TypeScript, foi utilizado o NextJS como framework, para estilização foi escolhido TailwindCSS por conta da sua faciliade de implementação, manutenabilidade e uma imensa versatilidade.',
        techs: ['ReactJS', 'NextJS', 'TailwindCSS', 'TypeScript']
    },
    {
        image: adviceGenerator,
        title: 'Advice Generator API',
        linkGHub: 'https://github.com/HenriqueAlgauer/advice-generator',
        linkPage: 'https://github.com/HenriqueAlgauer/advice-generator',
        info: 'Projeto basicão que consome uma API pública que retorna conselhos aleatórios. ',
        techs: ['HTML', 'CSS', 'JavaScript']
    },
]


function Portfolio() {
    return (
        <div className='bg-zinc-700 px-8 sm:px-36 py-28 border-y border-sky-300'>
            <div className='mb-20'>
                <h2 className='mb-8 text-sky-300 font-bold text-6xl'>Portfólio</h2>
                <p className='text-xl text-sky-300'>Aqui estão alguns projetos que desenvolvi.
                    <br />
                    <br />
                    Você pode observá-los na galeria ou ver a estrutura do projeto no Github.
                </p>
            </div>
            <div className='lg:grid flex flex-col lg:grid-cols-2 gap-12 justify-between'>
                {cards.map((card, index) => {
                    return (
                        <div key={index} className='font-bold bg-zinc-700 text-sky-300  w-full h-full flex flex-col border border-sky-300' >
                            <div className="flex items-center justify-center xl:h-96">
                                <Image className='p-4' src={card.image} width={600} height={300} alt='js logo' />
                            </div>
                            <div className='p-4 border-t flex flex-col gap-4 border-sky-300'>
                                <div className='my-4'>
                                    <h2>{card.title}</h2>
                                    <p className='my-4'>{card.info}</p>
                                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 ">
                                        <a target="_blank" href={card.linkGHub} className='border hover:bg-sky-300 hover:text-zinc-700 mr-4 text-center transition-all delay-100 border-sky-300 p-2'>Repositório GitHub</a>
                                        <a target="_blank" href={card.linkPage} className='border hover:bg-sky-300 hover:text-zinc-700 mr-4 text-center transition-all delay-100 border-sky-300 p-2'>Página do Projeto</a>
                                    </div>
                                </div>
                                <div className='flex gap-4 flex-wrap '>
                                    {card.techs.map((tech, index) => {
                                        return (
                                            <>
                                                <p key={index} className=' border border-sky-300 p-2'>{tech}</p>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export { Portfolio }