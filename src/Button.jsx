import LinkIcon from './assets/link.svg';
import DownloadIcon from './assets/download.svg';


export function Button ({ children, download, onClick }) {
  return (
    <button
      type='button'
      className='bg-(--blue) rounded-xl h-13 bottom-2 min-w-[9rem] w-[30%] cursor-pointer'
      onClick={ onClick } 
    >
      <span>{ children }</span>
      <span><img className='inline-block' src={ download ? DownloadIcon : LinkIcon } alt="Logo" /></span>
    </button>
  )
}