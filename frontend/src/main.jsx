import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownToLine, Braces, Database, Globe2, Menu, Server, Sparkles, X } from "lucide-react";
import { fallbackPortfolio } from "./data";
import "./styles.css";

const API_URL = import.meta.env.VITE_API_URL;
const CV_URL = `${import.meta.env.BASE_URL}Mateus_Ferreira_CV.docx`;

function App() {
  const [portfolio, setPortfolio] = useState(fallbackPortfolio);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!API_URL) return;
    fetch(`${API_URL}/api/portfolio`)
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then(setPortfolio)
      .catch(() => setPortfolio(fallbackPortfolio));
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Mateus Ferreira home" onClick={closeMenu}>
          <span className="brand-mark">MF</span>
          <span>Mateus Ferreira</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Capabilities</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-cta" href={CV_URL} download onClick={closeMenu}>Download CV</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Full Stack Developer · Brazil</div>
            <h1>I turn complex processes into <span>clear, reliable software.</span></h1>
            <p className="hero-lede">{portfolio.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href="#experience">View my experience</a>
              <a className="button secondary" href={CV_URL} download><ArrowDownToLine size={18} /> Download CV</a>
            </div>
            <div className="hero-meta">
              <span>{portfolio.location}</span>
              <span>{portfolio.availability}</span>
            </div>
          </div>

          <div className="system-card" aria-label="Core engineering areas">
            <div className="system-head">
              <span>engineering.profile</span>
              <span className="live-label">ACTIVE</span>
            </div>
            <div className="system-core">
              <div className="orbit orbit-one"><span><Server size={22} /></span></div>
              <div className="orbit orbit-two"><span><Database size={20} /></span></div>
              <div className="core-logo"><Braces size={35} /></div>
            </div>
            <div className="system-list">
              <div><span>01</span><strong>Backend systems</strong><small>Java · Spring Boot · Python</small></div>
              <div><span>02</span><strong>Digital products</strong><small>React · TypeScript · APIs</small></div>
              <div><span>03</span><strong>Automation</strong><small>Data · Bots · Integrations</small></div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Professional focus">
          <span>REST APIs</span><span>Spring Boot</span><span>React</span><span>Automation</span><span>PostgreSQL</span><span>Cloud & DevOps</span>
        </section>

        <section id="experience" className="section-pad content-section">
          <div className="section-intro">
            <div><span className="section-index">01</span><p className="kicker">Professional experience</p></div>
            <h2>Software built for real operations.</h2>
            <p>From research environments to global industry, I work across the full delivery cycle: requirements, development, integration, testing and continuous improvement.</p>
          </div>
          <div className="timeline">
            {portfolio.experience.map((job) => (
              <article className="experience-card" key={job.company}>
                <div className="job-time">{job.period}</div>
                <div className="job-main">
                  <div className="job-title-row">
                    <div><h3>{job.role}</h3><p>{job.company} · {job.unit}</p></div>
                    <Globe2 size={22} aria-hidden="true" />
                  </div>
                  <p className="job-description">{job.description}</p>
                  <ul>{job.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="tags">{job.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-pad capabilities-section">
          <div className="section-intro compact">
            <div><span className="section-index">02</span><p className="kicker">Capabilities</p></div>
            <h2>One engineer, multiple layers.</h2>
          </div>
          <div className="capability-grid">
            {portfolio.capabilities.map((capability, index) => (
              <article className="capability-card" key={capability.title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-pad education-section">
          <div className="education-copy">
            <span className="section-index">03</span>
            <p className="kicker">Education & growth</p>
            <h2>Building on solid foundations, learning what comes next.</h2>
            <p>My path combines practical software training with current studies in Artificial Intelligence.</p>
            <div className="language-note"><Sparkles size={18} /><span><strong>Languages</strong> Portuguese — native · English — professional written communication</span></div>
          </div>
          <div className="education-list">
            {portfolio.education.map((item) => (
              <article key={item.program}>
                <div><h3>{item.program}</h3><p>{item.school}</p></div>
                <span>{item.status}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="closing section-pad">
          <div>
            <p className="kicker">Open to international opportunities</p>
            <h2>Let’s build software that moves work forward.</h2>
          </div>
          <a className="button primary light" href={CV_URL} download>Get my CV</a>
        </section>
      </main>

      <footer>
        <span>Mateus Ferreira Salustiano</span>
        <span>Full Stack Developer · Campinas, Brazil</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
