import { useState, useEffect } from 'react'
import { photos } from '../data/photos'

export function PhotosPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <div className="pageContainer photosContainer">
      <div className="photosIntroduction">
        <div className="masonryGrid">
          {photos.map((photo, i) => (
            <div key={i} className="masonryItem" onClick={() => setLightbox(photo.src)}>
              <div className="imageWrapper">
                <img src={photo.src} alt={photo.caption} loading="lazy" />
              </div>
              <p className="caption">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" className="lightboxImg" />
        </div>
      )}
    </div>
  )
}
