function Contact(){
    const urlZap = "https://wa.me//5541991675316?text=Olá,%20vim%20pelo%20seu%20site%20e%20queria%20mais%20informações%20sobre%20seus%20serviços"
    return(
        <div className='bg-zinc-700 flex justify-center border-b border-sky-300'>
            <div className=' p-16 flex  md:w-9/12 lg:w-6/12 text-zinc-100 bg-sky-300 flex-col items-center gap-8 '>
              <h2 className='text-5xl font-bold '>Vamos conversar</h2>
              <p className='text-xl text-center'>Faça alguma pergunta ou só deixe <br /> uma mensagem pra dizer oi :)</p>
              <button className='font-bold border p-4 hover:bg-zinc-700 transition'><a href={urlZap} target="_blank">WhatsApp</a></button>
            </div>
          </div>
    )
}

export {Contact}