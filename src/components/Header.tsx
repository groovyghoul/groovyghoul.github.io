import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-wrapper">
          <img src="/logo.png" alt="Bytemares Logo" className="logo-img" />
          <div className="logo-container">
            <span className="logo-text">richard o'neil // bytemares</span>
            <span className="tagline">now with nudity</span>
          </div>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--glass-border);
        }
        .header-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0.8rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .logo-img {
          height: 32px;
          width: auto;
          filter: drop-shadow(0 0 5px var(--primary-neon));
        }
        .logo-container {
          display: flex;
          flex-direction: column;
        }
        .logo-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-neon);
          text-shadow: var(--neon-glow);
          line-height: 1;
        }
        .tagline {
          font-size: 0.7rem;
          color: var(--text-dim);
          font-family: 'JetBrains Mono', monospace;
          margin-top: 0.2rem;
        }
        .nav {
          display: flex;
          gap: 2rem;
        }
        .nav a {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          color: var(--text-main);
          text-transform: lowercase;
        }
        .nav a:hover {
          color: var(--primary-neon);
          text-shadow: var(--neon-glow);
        }
        @media (max-width: 600px) {
          .nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
