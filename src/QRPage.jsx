import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './app.css'
import { Button } from './Button.jsx'
import { Logo } from './Logo.jsx'
import { QRCode } from './QR.jsx'
import { Back } from './Back.jsx'

const QRPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const canvasRef = useRef(null)
  const url = location.state?.url

  useEffect(() => {
    if (!url) {
      navigate('/')
    }
  }, [url, navigate])

  if (!url) return null

  const handleDownload = () => {
    const canvas = canvasRef.current?.querySelector('canvas')
    if (canvas) {
      const link = document.createElement('a')
      link.download = 'qr_code.png'
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  const handleShare = async () => {
    const canvas = canvasRef.current?.querySelector('canvas')
    if (!canvas || !navigator.canShare || !navigator.share) {
      alert('Tu navegador no soporta compartir esta imagen')
      return
    }

    canvas.toBlob(async (blob) => {
      const file = new File([blob], 'qr_code.png', { type: 'image/png' })
      try {
        await navigator.share({
          files: [file],
          title: 'Código QR',
          text: 'Aquí tienes el código QR generado',
        })
      } catch (err) {
        console.error('Error al compartir:', err)
      }
    })
  }

  return (
    <>
      <Logo small><Back onClick={() => navigate('/')}/></Logo>
      <QRCode url={url} ref={canvasRef}/>
      <section className='flex flex-wrap justify-center gap-x-[2em] gap-y-[2em]'>
        <Button download onClick={ handleDownload }>Download</Button>
        <Button share onClick={ handleShare }>Share</Button>
      </section>
    </>
  )
}

export default QRPage
