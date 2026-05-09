import type { Experience } from '../types'

export function ExperienceItem({ exp, bulletLabel }: { exp: Experience; bulletLabel?: string }) {
  const nonEmpty = exp.descriptions.filter(d => d)
  return (
    <div className="experienceItem">
      <div className="experienceHeader" style={{ marginBottom: 0 }}>
        <p style={{ fontWeight: 500 }}>{exp.role}</p>
        {' '}@{' '}
        <p>{exp.company}</p>
        <p style={{ marginLeft: 'auto' }}>{exp.date}</p>
      </div>
      {nonEmpty.length > 0 && (
        <>
          {bulletLabel && <p className="bulletLabel">{bulletLabel}</p>}
          <ul className="experienceDesc">
            {nonEmpty.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export function InnerDescription({ children }: { children: React.ReactNode }) {
  return <div className="innerDescription">{children}</div>
}
