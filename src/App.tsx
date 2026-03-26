import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import NeuralBackground from './components/NeuralBackground'
import ProjectCard, { Project } from './components/ProjectCard'
import BlogPost from './components/BlogPost'

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
      notes: "Winner of the IrvineHacks Sustainability Track!",
      tags: ["Python", "Flora API", "React"],
      link: "https://devpost.com/software/ecoscape?ref_content=my-projects-tab&ref_feature=my_projects"
    },
    {
      title: "UCI BioSci Research Explorer",
      description: "Streamlined grant discovery and research collaboration; soon expanding to School of Medicine! ",
      notes: "Login with UCI credentials to use this tool", 
      tags: ["NLP", "Python", "JavaScript"],
      link: "https://research.bio.uci.edu/research-explorer/"
    },
  ];

  return (
    <section className="projects-grid-container animate-fade-in">
      <div className="project-grid">
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </section>
  );
}

const BlogPage = () => {
  const posts = [
    {
      title: 'SAE Feature Matchmaking (Layer-to-Layer)',
      url: 'https://www.lesswrong.com/posts/zLFD8PHoC8tthMopn/sae-feature-matchmaking-layer-to-layer-1',
      excerpt: 'About \'Mechanistic Permutability: Match Features Across Layers\', an interesting paper on matching features detected with Spare Autoencoders across multiple layers of the Transformer neural network. ',
      publishedAt: '2024-02-15'
    },
    {
      title: 'Paying attention to Attention Sinks',
      url: 'https://www.lesswrong.com/posts/mMhxFAwxjL8tnYgsY/paying-attention-to-attention-sinks',
      excerpt: 'Researcher found that transformers contain a "Dark Subspace" to store information that isn\'t intended for the output layer. The attention sink concept is a specific manifestation of this, where the model learns to dump the remaining attention from the Softmax into the first ([BOS]) token.',
      publishedAt: '2024-06-03'
    },
    {
      title: 'Thoughts and experiences on using AI for learning',
      url: 'https://www.lesswrong.com/posts/K3dvSxxYKNdDjXCmS/thoughts-and-experiences-on-using-ai-for-learning',
      excerpt: 'As this is my first blog post, I begin with an introduction of myself to establish my background. I am finishing my last year of my undergraduate studies, with a degree in Computer Science. My primary concern, and the thesis of this post, is the potential for epistemic failure caused by outsourcing foundational cognitive tasks to Large Language Models (LLMs).',
      publishedAt: '2024-09-01'
    }
  ]

  return (
    <section className="blog-grid-container animate-fade-in">
      <h1>Blog</h1>
      <div className="blog-grid">
        {posts.map((post, i) => (
          <BlogPost key={i} title={post.title} url={post.url} excerpt={post.excerpt} />
        ))}
      </div>
    </section>
  )
}

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
            {/* <NavLink to="/publications" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Publications</NavLink> */}
          </nav>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/publications" element={<PagePlaceholder title="Publications" />} /> */}
          </Routes>

          <aside className="sidebar">
            <div className="card">
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