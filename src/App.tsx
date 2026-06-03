import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Archives from './components/Archives';
import BlogPreview from './components/BlogPreview';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="grid-bg"></div>
      <div className="scanlines"></div>
      
      <Header />
      
      <main>
        <div id="about">
          <Hero />
        </div>
        
        <Skills />
        
        <Experience />
        
        <Projects />

        <Archives />
        
        <BlogPreview />
      </main>

      <footer className="footer section-container">
        <p className="font-mono">© {new Date().getFullYear()} Richard O'Neil // bytemares</p>
        <div className="social-links">
          <a href="https://github.com/groovyghoul" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/richardoneil/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.bytemares.com" target="_blank" rel="noopener noreferrer">Bytemares</a>
        </div>
      </footer>

      <style>{`
        .app-container {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
        }
        main {
          padding-bottom: 10rem;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--glass-border);
          padding-top: 4rem;
          padding-bottom: 4rem;
          color: var(--text-dim);
          font-size: 0.9rem;
        }
        .social-links {
          display: flex;
          gap: 2rem;
        }
        .social-links a {
          color: var(--text-dim);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          text-transform: uppercase;
        }
        .social-links a:hover {
          color: var(--primary-neon);
        }
        @media (max-width: 600px) {
          .footer {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
