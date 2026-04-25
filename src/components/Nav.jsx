import '../styles/Nav.css'

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">JT.dev</div>
      <ul className="nav-links">
        <li><a href="#projects">Work</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav