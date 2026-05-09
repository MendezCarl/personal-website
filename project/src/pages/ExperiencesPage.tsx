import { ExperienceItem } from '../components/ExperienceItem'
import { universityExperiences, researchExperiences, teachingExperiences } from '../data/experiences'

export function ExperiencesPage() {
  return (
    <div className="introduction">
      <div className="description">
        <p className="sectionTitle">University</p>
        {universityExperiences.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} bulletLabel="Relevant Coursework:" />
        ))}
        <p className="sectionTitle" style={{ marginTop: '1.5em' }}>Research</p>
        {researchExperiences.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} />
        ))}
        <p className="sectionTitle" style={{ marginTop: '1.5em' }}>Teaching</p>
        {teachingExperiences.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} />
        ))}
      </div>
    </div>
  )
}
