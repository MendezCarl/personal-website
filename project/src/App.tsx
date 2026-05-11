import { useState, useEffect } from 'react'
import './App.css'
import type { Page } from './types'
import { Sidebar } from './components/Sidebar'
import { LocalTime } from './components/LocalTime'
import { HomePage } from './pages/HomePage'
import { WorkPage } from './pages/WorkPage'
import { ExperiencesPage } from './pages/ExperiencesPage'
import { PhotosPage } from './pages/PhotosPage'
import { EntriesPage } from './pages/EntriesPage'

const pageComponents: Record<Page, React.FC> = {
  Home: HomePage,
  Work: WorkPage,
  Experiences: ExperiencesPage,
  Photos: PhotosPage,
  Entries: EntriesPage,
}

function App() {
  const [page, setPage] = useState<Page>('Home')
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    document.body.style.backgroundColor = dark ? '#1a1a1a' : '#ffffff'
  }, [dark])

  const PageComponent = pageComponents[page]

  return (
    <div className={`layout${dark ? ' dark' : ''}`}>
      <Sidebar page={page} setPage={setPage} dark={dark} onToggleDark={() => setDark(d => !d)} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <button className="menuToggle" onClick={() => setSidebarOpen(s => !s)} aria-label="Toggle navigation menu">
        ☰
      </button>
      <div className="contentArea">
        <main className="main">
          <div className="pageContainer">
            <h1 className="siteName">Carlos Mendez</h1>
            <p className="pageTitle">{page}</p>
            <PageComponent />
          </div>
        </main>
        <footer className="footer">
          <div className="footerInner">
            <p>&copy; 2026 Carlos Mendez</p>
            <LocalTime />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
