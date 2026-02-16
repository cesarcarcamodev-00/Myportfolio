import { siteConfig } from '../data/config'
import './Experience.css'

function Experience() {
  const { experience, education } = siteConfig

  return (
    <div className="experience">
      <div className="experience-header">
        <h1 className="section-title">Experience & Education</h1>
        <p className="experience-subtitle">
          My professional journey
        </p>
      </div>

      <div className="experience-section">
        <h2 className="experience-section-title">Work Experience</h2>
        <div className="timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <div>
                  <h3 className="role">{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <div className="timeline-meta">
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              
              {exp.tasks && exp.tasks.length > 0 && (
                <ul className="tasks">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              )}
              
              <div className="technologies">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="education-section">
        <h2 className="experience-section-title">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="degree">{edu.degree}</h3>
            <p className="school">{edu.school}</p>
            <span className="year">{edu.year}</span>
            {edu.description && <p className="edu-description">{edu.description}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
