import { InnerDescription } from '../components/ExperienceItem'

export function HomePage() {
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
