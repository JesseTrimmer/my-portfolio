import projects from '../data/projects'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import '../styles/Projects.css'

function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="projects-section">
      <div className="section-header reveal">
        <span className="section-num">01</span>
        <h2 className="section-title">Selected Work</h2>
      </div>

      {featured && <FeaturedProject project={featured} />}

      <div className="projects-grid">
        {rest.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects