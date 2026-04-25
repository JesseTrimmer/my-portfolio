import { useState } from 'react'
import Lightbox from './Lightbox'
import '../styles/Projects.css'

function FeaturedProject({ project }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [mainImg, ...otherImgs] = project.images

  return (
    <>
      <div className="featured-project reveal">
        <div className="featured-info">
          <span className="featured-badge">★ Featured Project</span>
          <h3 className="featured-title">{project.title}</h3>
          <div className="tag-row">
            {project.tags.map((tag, i) => (
              <span key={i} className={`tag ${project.tagColors[i] || ''}`}>{tag}</span>
            ))}
          </div>
          <p className="featured-desc">{project.description}</p>
          <div className="project-links">
            {project.links.map((link, i) => (
              <a key={i} href={link.url} target={link.external ? '_blank' : '_self'} rel="noreferrer">
                {link.label} →
              </a>
            ))}
          </div>
        </div>

        <div className="featured-images">
          {mainImg && (
            <div className="featured-img-main">
              <img
                src={mainImg}
                alt={`${project.title} screenshot`}
                onClick={() => setLightboxSrc(mainImg)}
                className="clickable-img"
              />
            </div>
          )}
          {otherImgs.length > 0 && (
            <div className="featured-img-secondary">
              {otherImgs.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 2}`}
                  onClick={() => setLightboxSrc(img)}
                  className="clickable-img"
                />
              ))}
            </div>
          )}
        </div>
      </div>

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

export default FeaturedProject