import { siteConfig } from '../data/config'
import './Projects.css'

function Projects() {
  const { projects } = siteConfig

  return (
    <div className="projects">
      <div className="projects-header">
        <h1 className="section-title">Featured Projects</h1>
        <p className="projects-subtitle">
          Selected projects I have worked on that are fully deployed.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
