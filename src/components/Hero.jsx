import '../styles/hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-label">Available for work · Full-Stack &amp; Freelance</div>
      <h1>Building things<br />for the <em>web.</em></h1>
      <p className="hero-sub">
        I'm Jesse — a full-stack developer based in Madisonville, TN. I build
        because I love it. There's something that clicks when an idea becomes
        a real, working thing you can open in a browser.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-fill">View My Work</a>
        <a href="#contact" className="btn">Get In Touch</a>
      </div>
      <div className="hero-corner">Madisonville, TN &nbsp;·&nbsp; Open to Remote</div>
    </section>
  )
}

export default Hero