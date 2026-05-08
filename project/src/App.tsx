import { useState, useEffect } from 'react'
import './App.css'

const PAGES = ['Home', 'Work', 'University', 'Research', 'Teaching', 'Photos'] as const
type Page = typeof PAGES[number]

function Nav({ page, setPage, dark, onToggleDark }: { page: Page; setPage: (p: Page) => void; dark: boolean; onToggleDark: () => void }) {
  return (
    <nav className="nav">
      {PAGES.map(p => (
        <a key={p} href="#" onClick={e => { e.preventDefault(); setPage(p) }} className={p === page ? 'active' : ''}>
          {p}
        </a>
      ))}
      <button className="darkToggle" onClick={onToggleDark} aria-label="Toggle dark mode">
        {dark ? '☀' : '☾'}
      </button>
    </nav>
  )
}

type Experience = {
  role: string
  company: string
  date: string
  descriptions: string[]
}

const workExperiences: Experience[] = [
  {
    role: 'role title',
    company: 'company name',
    date: 'date',
    descriptions: ['description of responsibilities and achievements']
  },
  {
    role: 'role title',
    company: 'company name',
    date: 'date',
    descriptions: ['description of responsibilities and achievements']
  },
  {
    role: 'role title',
    company: 'company name',
    date: 'date',
    descriptions: ['description of responsibilities and achievements']
  },
]

const universityExperiences: Experience[] = [
  {
    role: 'Computer Science',
    company: 'University of Florida',
    date: '2023 - Present',
    descriptions: ['Data Structures and Algorithms, Linear Algebra']
  }
]

const researchExperiences: Experience[] = [
  {
    role: 'Research Assistant',
    company: 'UF SmartSystem Lab',
    date: 'May 2025 - Present',
    descriptions: ['research summary']
  }
]

const teachingExperiences: Experience[] = [
  {
    role: 'Undergraduate Teaching Assistant for COP3503C',
    company: 'UF CISE',
    date: 'Jan 2026 - May 2026',
    descriptions: ['description']
  },
  {
    role: 'Undergraduate Teaching Assistant for COP3502C online',
    company: 'department',
    date: 'Aug 2025 - Dec 2025',
    descriptions: ['description']
  }
]

function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <div className="experienceItem">
      <div className="experienceHeader">
        <p style={{ fontWeight: 500 }}>{exp.role}</p>
        {' '}@{' '}
        <p>{exp.company}</p>
        <p style={{ marginLeft: 'auto' }}>{exp.date}</p>
      </div>
      {exp.descriptions.map((d, i) => (
        <p key={i} className="experienceDesc">{d}</p>
      ))}
    </div>
  )
}

function InnerDescription({ children }: { children: React.ReactNode }) {
  return <div className="innerDescription">{children}</div>
}

function HomePage() {
  return (
    <div className="introduction">
      <div className="links">
        <a href="https://github.com/MendezCarl">github</a>
        <a href="https://www.linkedin.com/in/carlomen/">linkedin</a>
        <a href="#">resume</a>
      </div>
      <br></br>
      <div className="description">
        <div style={{ marginBottom: '2em' }}>
          <p className="sectionTitle">about me <br /></p>
          <p>I'm a computer science major at the University of Florida. I have always had a interest in computers and now focus on becoming a better scientist/programmer. You can find me either coding, hanging out with friends/family, or gaming.</p>
        </div>
        <hr />
        <div style={{ marginBottom: '2em' }}>
          <p className="sectionTitle">my experiences <br /></p>
          <p>I am currently interning at Streamline technologies as a software engineering intern. At the University of Florida I am a undergraduate teaching assistant for Programming fundamentals 2 working on class content and course organization. I am also a undergraduate research assistant in the Unversity of Florida Smart System lab contributing to r&d in lab projects.</p>
        </div>
        <hr />
        <div style={{ marginBottom: '2em' }}>
          <p className="sectionTitle">my interests <br /></p>
          <InnerDescription>
            <p>I enjoy many sports but my most played/watched are soccer(football), basketball, tennis, and badminton. I also enjoy playing rts or multiplayer games like minecraft, rocket league, etc.</p>
          </InnerDescription>
        </div>
      </div>
    </div>
  )
}

function WorkPage() {
  return (
    <div className="introduction">
      <div className="description">
        {workExperiences.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} />
        ))}
      </div>
    </div>
  )
}

function UniversityPage() {
  return (
    <div className="introduction">
      <div className="description">
        {universityExperiences.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} />
        ))}
      </div>
    </div>
  )
}

function ResearchPage() {
  return (
    <div className="introduction">
      <div className="description">
        {researchExperiences.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} />
        ))}
      </div>
    </div>
  )
}

function TeachingPage() {
  return (
    <div className="introduction">
      <div className="description">
        {teachingExperiences.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} />
        ))}
      </div>
    </div>
  )
}

const photos = [
  { src: '', caption: 'photo caption' },
  { src: '', caption: 'photo caption' },
  { src: '', caption: 'photo caption' },
]

function PhotosPage() {
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
                <div className="skeleton" />
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

const pageComponents: Record<Page, React.FC> = {
  Home: HomePage,
  Work: WorkPage,
  University: UniversityPage,
  Research: ResearchPage,
  Teaching: TeachingPage,
  Photos: PhotosPage,
}

function App() {
  const [page, setPage] = useState<Page>('Home')
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const PageComponent = pageComponents[page]

  return (
    <div className={`layout${dark ? ' dark' : ''}`}>
      <header className="header">
        <Nav page={page} setPage={setPage} dark={dark} onToggleDark={() => setDark(d => !d)} />
      </header>
      <main className="main">
        <div className="pageContainer">
          <h1 className="siteName">Carlos Mendez</h1>
          <p className="pageTitle">{page}</p>
          <PageComponent />
        </div>
      </main>
      <footer className="footer">
        <p>built with react</p>
      </footer>
    </div>
  )
}

export default App
