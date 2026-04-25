import { useEffect } from 'react'
import '../styles/Lightbox.css'

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>✕</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default Lightbox