import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import NeuralBackground from './components/NeuralBackground'

const About = () => (
  <section className="about-section animate-fade-in">
    <p>
      I’m a Computer Science student at UC Irvine, where I am doing research at Professor Al Faruque’s embedded systems lab.
      My current research project is adapting a Transformer for multivariate time series data with a masking head.
      I am also on the backend team for Humanity Unleashed, an open source project for developing an AI policy generator
      powered by an economics transformer. Check out our paper here!
    </p>
    <p>
      A few weeks ago, I joined the Mechanistic Interpretability research community online, and since then I joined
      PauseAI’s AI Safety project as a research analyst.
    </p>
    <p>
      I have previously interned at Etsy, Fuerte, and BlackRock.
    </p>
    <p>
      I’m a software engineer, a machine learning enthusiast, and an amateur seamstress.
      There are a lot of other things I can say to describe myself. If you are interested, check out fun stuff about me.
    </p>
  </section>
)

const PagePlaceholder = ({ title }: { title: string }) => (
  <section className="about-section animate-fade-in">
    <h1>{title}</h1>
    <p style={{ marginTop: '2rem' }}>coming soon</p>
  </section>
)

function App() {
  return (
    <Router>
      <NeuralBackground />
      <main className="container animate-fade-in">
        <div className="decoration-line"></div>

        <section className="hero">
          <h1>Mitali Mittal</h1>
          <h2>Computer Science @ UC Irvine</h2>
        </section>

        <div className="content-grid">
          <nav className="side-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
            <NavLink to="/publications" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Publications</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blog" element={<PagePlaceholder title="Blog" />} />
            <Route path="/projects" element={<PagePlaceholder title="Projects" />} />
            <Route path="/publications" element={<PagePlaceholder title="Publications" />} />
          </Routes>

          <aside className="sidebar">
            <div className="card">
              <h3>Contact</h3>
              <div className="contact-item">
                <a href="mailto:mitaliactive@gmail.com"><span className="contact-label">Email</span></a>
              </div>
              <div className="contact-item">
                <a href="https://www.linkedin.com/in/mitali-m/" target="_blank" rel="noopener noreferrer"><span className="contact-label">LinkedIn</span></a>
              </div>
              <div className="contact-item">
                <a href="https://x.com/http_mitali" target="_blank" rel="noopener noreferrer"><span className="contact-label">X</span></a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </Router>
  )
}

export default App