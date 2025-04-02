import LinkIcon from './assets/link_alt.svg';
import DownloadIcon from './assets/Load_circle_duotone.svg';


export function Button ({ children, download, onClick }) {
  return (
    <button
      type='button'
      className='bg-(--blue) rounded-xl h-13 bottom-2 min-w-[9rem] w-[30%]'
      onClick={ onClick } 
    >
      <span>{ children }</span>
      <span><img className='inline-block' src={ download ? DownloadIcon : LinkIcon } alt="Logo" /></span>
    </button>
  )
}