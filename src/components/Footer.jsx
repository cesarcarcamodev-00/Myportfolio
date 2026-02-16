import { siteConfig } from '../data/config'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { name, social } = siteConfig

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 70
      const top = element.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => handleNavClick(e, 'home')}>
              <span>&lt;{name}/&gt;</span>
            </a>
            <p className="footer-tagline">Building the future, one line at a time.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
              <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
              <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              {social.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="social-link"
                  target={link.name === 'Email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  {link.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
