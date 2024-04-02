import nlwUniteIcon from '@/assets/nlw-unite-icon.svg'

export function Header() {
  return(
    <header className='flex gap-5 items-center'>
      <img src={nlwUniteIcon} alt="" />

      <nav className='flex gap-5 items-center'> 
        <a href="#" className='font-medium text-sm text-zinc-300'>Eventos</a>
        <a href="#" className='font-medium text-sm'>Participantes</a>
      </nav>
    </header>
  )
}