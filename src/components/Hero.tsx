import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const title = "Senior Developer & AI Engineer";

  return (
    <section className="hero section-container">
      <div className="hero-bg-logo">
        <img src="https://bytemares.com/assets/media/logo.png" alt="" />
      </div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="welcome-text font-mono">/init richard_oneil</span>
          <h1 className="main-title">
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.5, duration: 0.1 }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="cursor"
            >
              _
            </motion.span>
          </h1>
          <p className="hero-description">
            Three decades of expertise designing and building high-volume enterprise systems. 
            Focused on <span className="glow-text">.NET Core</span>,{" "}
            <span className="glow-text">Vue.js</span>, and{" "}
            <span className="glow-text">Ruby on Rails</span>.
          </p>
          <div className="cta-container">
            <a href="#projects" className="cta-button primary">View Projects</a>
            <a href="#blog" className="cta-button secondary">Read Blog</a>
          </div>
        </motion.div>
      </div>
      <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 8rem;
          position: relative;
        }
        .hero-bg-logo {
          position: absolute;
          right: -5%;
          top: 50%;
          transform: translateY(-50%);
          width: 50%;
          opacity: 0.05;
          filter: grayscale(1) invert(1) blur(2px);
          pointer-events: none;
          z-index: -1;
        }
        .hero-bg-logo img {
          width: 100%;
          height: auto;
        }
        .hero-content {
          position: relative;
          z-index: 1;
        }
        .welcome-text {
          color: var(--accent-blue);
          font-size: 1.1rem;
          margin-bottom: 1rem;
          display: block;
        }
        .main-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 2rem;
          max-width: 800px;
        }
        .cursor {
          color: var(--primary-neon);
          font-weight: bold;
        }
        .hero-description {
          font-size: 1.25rem;
          color: var(--text-dim);
          max-width: 600px;
          margin-bottom: 3rem;
        }
        .cta-container {
          display: flex;
          gap: 1.5rem;
        }
        .cta-button {
          padding: 0.8rem 2rem;
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-size: 0.9rem;
        }
        .cta-button.primary {
          background: var(--primary-neon);
          color: var(--bg-color);
        }
        .cta-button.primary:hover {
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
          transform: translateY(-2px);
        }
        .cta-button.secondary {
          border: 1px solid var(--accent-blue);
          color: var(--accent-blue);
        }
        .cta-button.secondary:hover {
          background: rgba(51, 122, 183, 0.1);
          border-color: var(--primary-neon);
          color: var(--primary-neon);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          .hero-description {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
