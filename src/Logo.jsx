import LogoSmallIcon from './assets/logo_small.svg';
import LogoIcon from './assets/logo.svg';


export function Logo ({ small, children }) {
  return (
    <section className='relative w-full'>
      <img className='!mx-auto' src={ small ? LogoSmallIcon : LogoIcon } alt="Logo" />
      { children }
    </section>
  )
}