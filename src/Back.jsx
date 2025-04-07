import BackIcon from './assets/back.svg';


export function Back ({ onClick }) {
  return (
    <button
      type='button'
      className='absolute left-2 top-[50%] translate-y-[-50%] bg-(--blue) rounded-xl h-13 w-[14%] cursor-pointer'
      onClick={onClick}
    >
      <img className='align-middle !mx-auto' src={ BackIcon } alt="Back" />
    </button>
  )
}