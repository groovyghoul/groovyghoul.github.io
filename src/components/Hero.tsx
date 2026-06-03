import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const title = "Senior Developer & AI Engineer";

  return (
    <section className="hero section-container">
      <div className="hero-bg-logo">
        <img src="/logo.png" alt="" />
      </div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <div className="logo-hud-container">
            <div className="logo-hud-frame">
              <div className="corner corner-tl"></div>
              <div className="corner corner-tr"></div>
              <div className="corner corner-bl"></div>
              <div className="corner corner-br"></div>
              <div className="scanline-bar"></div>
              <img src="/logo.png" alt="Bytemares Logo" className="hero-main-logo-img" />
            </div>
          </div>

          <div className="hero-text-content">
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
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 8rem;
          position: relative;
          text-align: center;
        }
        .hero-bg-logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          opacity: 0.03;
          filter: grayscale(1) invert(1) blur(4px);
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
          width: 100%;
        }
        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        /* HUD Logo Frame */
        .logo-hud-container {
          margin-bottom: 3rem;
          position: relative;
          padding: 20px;
          animation: float 6s ease-in-out infinite;
        }
        .logo-hud-frame {
          position: relative;
          padding: 2rem;
          background: rgba(0, 243, 255, 0.03);
          border: 1px solid rgba(0, 243, 255, 0.1);
          border-radius: 4px;
          box-shadow: inset 0 0 20px rgba(0, 243, 255, 0.05);
        }
        .hero-main-logo-img {
          height: 180px;
          width: auto;
          filter: drop-shadow(0 0 20px var(--primary-neon));
          animation: 
            pulse-glow 4s ease-in-out infinite,
            glitch 8s step-end infinite;
          position: relative;
        }
        
        /* Corner Brackets */
        .corner {
          position: absolute;
          width: 15px;
          height: 15px;
          border-color: var(--primary-neon);
          border-style: solid;
          opacity: 0.6;
          animation: glitch-opacity 8s step-end infinite;
        }
        .corner-tl { top: -2px; left: -2px; border-width: 2px 0 0 2px; }
        .corner-tr { top: -2px; right: -2px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: -2px; left: -2px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: -2px; right: -2px; border-width: 0 2px 2px 0; }
        
        /* HUD Scanline */
        .scanline-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary-neon);
          opacity: 0.2;
          box-shadow: 0 0 10px var(--primary-neon);
          animation: scan 4s linear infinite;
          pointer-events: none;
          z-index: 2;
        }

        .hero-text-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 900px;
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
        }
        .cursor {
          color: var(--primary-neon);
          font-weight: bold;
        }
        .hero-description {
          font-size: 1.25rem;
          color: var(--text-dim);
          max-width: 700px;
          margin-bottom: 3rem;
        }
        .cta-container {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
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

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 20px var(--primary-neon)); }
          50% { filter: drop-shadow(0 0 35px var(--primary-neon)); }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          5% { opacity: 0.2; }
          95% { opacity: 0.2; }
          100% { top: 100%; opacity: 0; }
        }
        
        @keyframes glitch {
          0%, 85%, 90%, 100% { transform: translate(0); filter: drop-shadow(0 0 20px var(--primary-neon)); }
          86% { transform: translate(4px, -2px); filter: drop-shadow(-5px 0 red) drop-shadow(5px 0 blue); }
          87% { transform: translate(-4px, 2px); }
          88% { transform: translate(2px, 1px); filter: drop-shadow(0 0 20px var(--primary-neon)); }
          89% { transform: translate(-1px, -1px); }
        }

        @keyframes glitch-opacity {
          0%, 85%, 90%, 100% { opacity: 0.6; }
          86% { opacity: 0.2; }
          87% { opacity: 0.9; }
          88% { opacity: 0.4; }
          89% { opacity: 1; }
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          .hero-description {
            font-size: 1.1rem;
          }
          .hero-main-logo-img {
            height: 120px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
