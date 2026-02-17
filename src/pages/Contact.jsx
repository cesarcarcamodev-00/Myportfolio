import { useState } from 'react'
import { siteConfig } from '../data/config'
import './Contact.css'

function Contact() {
  const { email, location, availability } = siteConfig

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Prepare the data
    const formDataToSubmit = new FormData(e.target);

    // 2. Send the request via fetch
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.log("Error", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Fetch error", error);
      alert("Submission failed. Check your internet connection.");
    }
  };

  const contactInfo = [
    { icon: '✉', label: 'Email', value: email },
    { icon: '◈', label: 'Location', value: location },
    { icon: '◉', label: 'Availability', value: availability },
  ]

  return (
    <div className="contact page">
      <div className="container">
        <div className="contact-header">
          <h1 className="section-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p className="info-description">
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you'd like to collaborate or just say hello.
            </p>

            <div className="info-items">
              {contactInfo.map((item) => (
                <div key={item.label} className="info-item">
                  <span className="info-icon">{item.icon}</span>
                  <div className="info-details">
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form"  onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="658c63f2-f7a4-4f6c-8f98-b026e18cbe79" />
            <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
