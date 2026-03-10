import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import NeuralBackground from './components/NeuralBackground'
import ProjectCard, { Project } from './components/ProjectCard'

const About = () => (
  <section className="about-section animate-fade-in">
    <p>
      I’m a Computer Science student at UC Irvine, and I'm interested in Machine Learning, Math, and Interpretability.
    </p>
    <p>
      Last year, I joined the Mechanistic Interpretability research community online, and since then I have taken the AI Safety Technical Fellowship, the AI Safety Research Incubator, and the BlueDot AGI Strategy Course. I have also implemented a few papers using NDIF's new nnterp python library.
    </p>
    <p>
      I was previously a SWE intern at Etsy, Fuerte, and BlackRock. I'm excited to pursure SWE full time after my graduation this Spring!
    </p>
    <p>
      I’m a software engineer and a machine learning enthusiast, and recently I developed an interest in philosophy.
    </p>
  </section>
)


const Projects = () => {
  const projects: Project[] = [
    {
      title: "EcoScape",
      description: "Create customized garden designs based on user's location and environmental conditions. After designing their garden, they are shown a sustainability score- a heuristic to evaluate the environmental impact of their design.",
      tags: ["Python", "Flora API", "React"],
      link: "https://devpost.com/software/ecoscape?ref_content=my-projects-tab&ref_feature=my_projects"
    },
    {
      title: "UCI BioSci Research Explorer",
      description: "Streamlined grant discovery and research collaboration; soon expanding to School of Medicine! ",
      tags: ["NLP", "Python", "JavaScript"],
      link: "https://research.bio.uci.edu/research-explorer/"
    },
    // {
    //   title: "Embedded Multivariate Analysis",
    //   description: "Research project on adapting attention mechanisms for time-series data in embedded systems.",
    //   tags: ["Embedded", "Time-Series", "ML"],
    //   github: "https://github.com/mital-i"
    // }
  ];

  return (
    <section className="projects-grid-container animate-fade-in">
      <div className="project-grid">
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </section>
  );
}

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
          <div className="hero-content">
            <img src="/Mitali_Mittal_Headshot.png" alt="Mitali Mittal" className="headshot" />
            <div className="hero-text">
              <h1>Mitali Mittal</h1>
              <h2>Computer Science @ UC Irvine</h2>
            </div>
          </div>
        </section>

        <div className="content-grid">
          <nav className="side-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
            <NavLink to="/publications" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Publications</NavLink>
            <NavLink to="/readinglist" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Reading List</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blog" element={<PagePlaceholder title="Blog" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<PagePlaceholder title="Publications" />} />
            <Route path="/readinglist" element={<PagePlaceholder title="Reading List" />} />
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