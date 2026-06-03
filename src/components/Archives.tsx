import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Archives: React.FC = () => {
  const archives = [
    {
      title: "Community Callout: FakeItEasy CodeRush Templates",
      source: "DevExpress Blog",
      date: "2014",
      description: "Featured by Rory Becker for creating specialized developer productivity templates for the FakeItEasy framework.",
      link: "https://community.devexpress.com/blogs/rorybecker/archive/2014/02/18/community-callout-fakeiteasy-coderush-templates.aspx"
    },
    {
      title: "Community Callout: CR_FluentPoco Plugin",
      source: "DevExpress Blog",
      date: "2014",
      description: "Recognition for developing the CR_FluentPoco plugin, automating the conversion of private fields to fluent method chains.",
      link: "https://community.devexpress.com/Blogs/rorybecker/archive/2014/04/04/community-callout-new-coderush-plugin-cr-fluentpoco.aspx"
    }
  ];

  return (
    <section id="archives" className="section-container">
      <div className="archive-header">
        <h2 className="section-title glow-text">[DEEP_STORAGE_ARCHIVES]</h2>
        <p className="archive-subtitle font-mono">Retrieved legacy community recognition and featured developer tools.</p>
      </div>
      <div className="archives-list">
        {archives.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="archive-item glass-card"
          >
            <div className="archive-meta">
              <span className="archive-date font-mono">{item.date}</span>
              <span className="archive-source font-mono">{item.source}</span>
            </div>
            <div className="archive-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="archive-link">
                Access Record <ExternalLink size={14} />
              </a>
            </div>
            <Award className="archive-icon" size={40} />
          </motion.div>
        ))}
      </div>
      <style>{`
        .archive-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .archive-subtitle {
          color: var(--accent-blue);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .archives-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .archive-item {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        .archive-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: var(--accent-blue);
          opacity: 0.5;
        }
        .archive-meta {
          display: flex;
          flex-direction: column;
          min-width: 120px;
        }
        .archive-date {
          color: var(--primary-neon);
          font-size: 1.2rem;
          font-weight: bold;
        }
        .archive-source {
          color: var(--text-dim);
          font-size: 0.7rem;
          text-transform: uppercase;
        }
        .archive-content {
          flex-grow: 1;
        }
        .archive-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }
        .archive-content p {
          color: var(--text-dim);
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        .archive-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: var(--accent-blue);
        }
        .archive-icon {
          color: var(--primary-neon);
          opacity: 0.05;
          position: absolute;
          right: -10px;
          bottom: -10px;
          transform: rotate(-15deg);
        }
        @media (max-width: 600px) {
          .archive-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Archives;
