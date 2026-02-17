import { siteConfig } from '../data/config'
import './Home.css'

function Home() {
  const { name, title, hero, role } = siteConfig

  const handleClick = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 70
      const top = element.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="home page">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-line"></span>
            <span className="greeting-text">{hero.greeting}</span>
          </div>
          
          <h1 className="hero-name">
            <span className="name-main">{name}</span>
            <span className="name-accent">{title}</span>
          </h1>
          
          <p className="hero-title">{role}</p>
          
          <p className="hero-description">
            {hero.description}
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" onClick={(e) => handleClick(e, 'projects')}>View My Work</a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => handleClick(e, 'contact')}>Get In Touch</a>
          </div>
          
          <div className="hero-stats">
            {hero.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
            </div>
            <pre className="code-content">
              <code>
{`const developer = {
  name: '${name}',
  skills: ['.NET', 'Blazor', 'React.js'],
  passion: 'Building great apps',
  available: true,
  coffee: Infinity
};

while (alive) {
  code();
  learn();
  create();
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
