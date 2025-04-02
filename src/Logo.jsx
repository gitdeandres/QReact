import LogoSmallIcon from './assets/Logo-small.svg';
import LogoIcon from './assets/Logo.svg';


export function Logo ({ small, children }) {
  return (
    <section className='relative w-full'>
      <img className='!mx-auto' src={ small ? LogoSmallIcon : LogoIcon } alt="Logo" />
      { children }
    </section>
  )
}