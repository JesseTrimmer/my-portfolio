import '../styles/Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header reveal">
        <span className="section-num">04</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-inner reveal">
        <p>
          I'm actively looking for new opportunities. Whether you have a role in mind,
          a project you'd like help with, or just want to connect — my inbox is open.
        </p>
        <div className="contact-email">
          <span className="contact-email-label">Email</span>
          <span className="contact-email-address">trimmerjesse@gmail.com</span>
        </div>
        <div className="contact-row">
          <a href="https://www.linkedin.com/in/jesse-trimmer" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
          <a href="https://github.com/JesseTrimmer" target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>
      </div>

      <footer className="footer">
        <span>Jesse Trimmer · Full-Stack Developer</span>
        <span>Built by hand · Madisonville, TN · 2026</span>
      </footer>
    </section>
  )
}

export default Contact