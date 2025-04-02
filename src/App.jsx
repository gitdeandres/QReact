import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from './Input.jsx'
import { Logo } from './Logo.jsx'
import { QRButton } from './QRButton.jsx'

const App = () => {
  const [url, setUrl] = useState('')
  const navigate = useNavigate()

  const handleGenerate = () => {
    if (!url) return
    navigate('/qr', { state: { url } })
  }

  return (
    <>
      <Logo />
      <div className='relative text-center w-full'>
        <Input value={url} onChange={(e) => setUrl(e.target.value)} />
        <QRButton onClick={ handleGenerate } />
      </div>
    </>
  )
}

export default App
