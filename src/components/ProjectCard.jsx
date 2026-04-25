import { useState } from 'react'
import Lightbox from './Lightbox'
import '../styles/Projects.css'

function ProjectCard({ project, index }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  const accentClass =
    project.tagColors[0] === 'blue' ? 'blue-accent' :
    project.tagColors[0] === 'pink' ? 'pink-accent' : ''

  return (
    <>
      <article className={`project-card reveal ${accentClass}`}>
        <span className="project-num">00{index + 2}</span>
        <h3 className="project-title">{project.title}</h3>

        <div className="tag-row">
          {project.tags.map((tag, i) => (
            <span key={i} className={`tag ${project.tagColors[i] || ''}`}>{tag}</span>
          ))}
        </div>

        <p className="project-desc">{project.description}</p>

        {project.images.length > 0 && (
          <div className="card-images">
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot`}
                onClick={() => setLightboxSrc(img)}
                className="clickable-img"
              />
            ))}
          </div>
        )}

        <div className="project-links">
          {project.links.map((link, i) => (
            <a key={i} href={link.url} target={link.external ? '_blank' : '_self'} rel="noreferrer">
              {link.label} →
            </a>
          ))}
        </div>
      </article>

      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={project.title}
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </>
  )
}

export default ProjectCard