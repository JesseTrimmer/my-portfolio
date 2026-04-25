import '../styles/About.css'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header reveal">
        <span className="section-num">03</span>
        <h2 className="section-title">About</h2>
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            I'm Jesse, a developer based in <strong>Madisonville, TN</strong>. Coding
            is something I genuinely love — there's a feeling I get when something
            I built actually works, when an idea goes from nothing to something real
            you can click and interact with. That feeling is what keeps me going.
          </p>
          <p>
            I'm drawn to building things that feel <strong>complete and considered</strong> —
            not just functional, but thoughtful. Whether it's a full-stack web app,
            a desktop tool, or a silly browser game, I care about the details.
            I want the thing I made to feel good to use.
          </p>
          <p>
            I'm currently looking for opportunities where I can keep growing, keep building,
            and work on things that matter — remote or close to home in East Tennessee.
          </p>
          <div className="about-cta">
  <a href="#contact" className="btn">Let's talk →</a>
</div>
        </div>
        <div className="about-stats reveal">
          <div className="stat">
            <div className="stat-num">7</div>
            <div className="stat-label">Projects shipped</div>
          </div>
          <div className="stat">
            <div className="stat-num">FS</div>
            <div className="stat-label">Full-stack — front to back to desktop</div>
          </div>
          <div className="stat">
            <div className="stat-num">∞</div>
            <div className="stat-label">Things left to build</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About