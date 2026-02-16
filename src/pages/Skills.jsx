import { siteConfig } from '../data/config'
import './Skills.css'

function Skills() {
  const { skills } = siteConfig

  return (
    <div className="skills page">
      <div className="container">
        <div className="skills-header">
          <h1 className="section-title">Skills & Expertise</h1>
          <p className="skills-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skills.categories.map((category, index) => (
            <div 
              key={category.title} 
              className="skill-category"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-header">
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h2 className="tools-title">Development Tools</h2>
          <div className="tools-grid">
            {skills.tools.map((tool, index) => (
              <div 
                key={tool} 
                className="tool-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
