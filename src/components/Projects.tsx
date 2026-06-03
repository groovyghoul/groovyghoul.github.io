import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: "JobViper.Rails",
      description: "A Ruby on Rails application to track job hunt progress and explore Convention over Configuration.",
      language: "Ruby",
      link: "https://github.com/groovyghoul/JobViper.Rails"
    },
    {
      name: "JobViper",
      description: "Python console application for tracking job applications with a focus on simplicity.",
      language: "Python",
      link: "https://github.com/groovyghoul/JobViper"
    },
    {
      name: "sqeletor.nvim",
      description: "Neovim plugin template for SQL script layouts, optimizing database workflows.",
      language: "Lua",
      link: "https://github.com/groovyghoul/sqeletor.nvim"
    },
    {
      name: "rattt",
      description: "Elisp script for daily organization and task management within Emacs.",
      language: "Emacs Lisp",
      link: "https://github.com/groovyghoul/rattt"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title glow-text">Open Source Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card project-card"
          >
            <div className="project-header">
              <Terminal size={20} className="github-icon" />
              <h3>{project.name}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-footer">
              <span className="language font-mono">{project.language}</span>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Source <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .project-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }
        .github-icon {
          color: var(--text-dim);
        }
        .project-description {
          color: var(--text-dim);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }
        .language {
          font-size: 0.75rem;
          color: var(--primary-neon);
          background: rgba(0, 243, 255, 0.05);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }
        .project-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--accent-blue);
          font-family: 'JetBrains Mono', monospace;
        }
        .project-link:hover {
          color: var(--primary-neon);
        }
      `}</style>
    </section>
  );
};

export default Projects;
