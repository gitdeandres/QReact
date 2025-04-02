import { QRCodeCanvas } from 'qrcode.react';

export function QRCode ({ url, ref }) {
  return (
    <section className='h-100 w-[80%] place-items-center place-content-center !mx-auto'>
      <span id='qrcode' className='block relative' ref={ref}>
        <QRCodeCanvas
          value={url}
          title='Código QR'
          size={220}
          level={'H'}
        />
      </span>
    </section>
  )
}