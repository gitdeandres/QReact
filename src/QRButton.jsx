export function QRButton ({ onClick }) {
  return (
    <button
      type='button'
      className='absolute right-2 top-[50%] translate-y-[-50%] bg-(--blue) rounded-xl h-13 min-w-fit w-[25%]'
      onClick={ onClick }
    >
      <span className='align-middle'>QR Code</span>
    </button>
  )
}