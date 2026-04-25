import '../styles/Skills.css'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'HTML / CSS / JS', 'Vite', 'Component architecture'],
  },
  {
    title: 'Backend',
    items: ['Node.js / Express', 'MongoDB / Mongoose', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Desktop & Other',
    items: ['Electron (Windows)', 'Third-party API integration', 'Async JavaScript', 'Browser game development'],
  },
  {
    title: 'Deployment',
    items: ['Vercel', 'Render', 'GitHub Pages', 'MongoDB Atlas'],
  },
  {
    title: 'Tooling',
    items: ['Git / GitHub', 'npm / yarn', 'VS Code', 'Postman'],
  },
  {
    title: 'Professional',
    items: ['Freelance client work', 'Project scoping & proposals', 'CMS integration', 'Technical documentation'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">Skills &amp; Tools</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group reveal">
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills