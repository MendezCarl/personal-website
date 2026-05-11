import { useState, useEffect } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = document.querySelector('.layout')
    if (!el) return

    const update = () => {
      const maxScroll = el.scrollHeight - el.clientHeight
      setProgress(maxScroll > 0 ? (el.scrollTop / maxScroll) * 100 : 0)
      setVisible(maxScroll > 0)
    }

    const ro = new ResizeObserver(update)
    ro.observe(el)
    update()
    el.addEventListener('scroll', update)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [])

  if (!visible) return null

  return (
    <div className="scrollProgress">
      <div className="scrollProgressThumb" style={{ top: `${progress}%` }} />
    </div>
  )
}
