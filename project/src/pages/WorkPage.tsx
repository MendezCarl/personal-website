import { ExperienceItem } from '../components/ExperienceItem'
import { workExperiences } from '../data/experiences'

export function WorkPage() {
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
