import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from './Input.jsx'
import { Logo } from './Logo.jsx'
import { QRButton } from './QRButton.jsx'

const App = () => {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const isValidUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUrl(url)) {
      setError('Por favor ingresa una URL válida');
      return;
    }

    // continuar con la lógica...
    handleGenerate()
  };

  const handleGenerate = () => {
    if (!url) return
    navigate('/qr', { state: { url } })
  }

  return (
    <>
      <Logo />
      <div className='relative text-center w-full'>
        <Input value={url} onChange={handleChange} />
        {error && <p className="absolute w-full text-red-700 text-sm">{error}</p>}
        <QRButton onClick={ handleSubmit } />
      </div>
    </>
  )
}

export default App
