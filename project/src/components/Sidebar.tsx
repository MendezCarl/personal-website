import { PAGES } from '../types'
import type { Page } from '../types'

export function Sidebar({ page, setPage, dark, onToggleDark, open, onClose }: {
  page: Page
  setPage: (p: Page) => void
  dark: boolean
  onToggleDark: () => void
  open: boolean
  onClose: () => void
}) {
  return (
    <>
      {open && <div className="sidebarOverlay" onClick={onClose} />}
      <aside className={`sidebar${open ? ' open' : ''}`}>
        <nav className="sidebarNav">
          {PAGES.map(p => (
            <a key={p} href="#" onClick={e => { e.preventDefault(); setPage(p); onClose() }} className={p === page ? 'active' : ''}>
              {p}
            </a>
          ))}
        </nav>
        <span className={`darkToggleText sidebarDarkToggle ${dark ? 'light' : 'dark'}`} onClick={onToggleDark}>
          {dark ? 'light' : 'dark'}
        </span>
      </aside>
    </>
  )
}
