export function Input ({ value, onChange }) {
  return (
    <input
      type='url'
      name='url'
      placeholder='Enter an url'
      className='w-full h-15 border-2 border-solid border-(--blue) focus-visible:outline-(--white) focus-visible:outline-solid rounded-2xl !p-8 !pr-[28%] bg-(--dark)'
      value={ value }
      onChange={ onChange }
      autoComplete='off'
    />
  )
}