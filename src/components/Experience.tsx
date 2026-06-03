import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Info-Tech Research Group",
      role: "Senior Developer and AI Engineer",
      period: "Feb 2026 – Present",
      description: "Driving the development of AI-driven products and Service Desk insights. Leveraging advanced technologies to build intelligent solutions for IT research and advisory services."
    },
    {
      company: "Garvin-Allen Solutions Ltd.",
      role: "Software Architect / Team Lead",
      period: "2015 – 2025",
      description: "Directed the architectural shift of the AIS platform to .NET Core and Vue.js. Introduced microservice queues for performance engineering, ensuring 2-second load times. Modernized storage with MongoDB and PostgreSQL. Established CI/CD workflows and mentored junior developers."
    },
    {
      company: "Garvin-Allen Solutions Ltd.",
      role: "Senior Software Developer",
      period: "2010 – 2015",
      description: "Designed and implemented mission-critical modules for underwriting, claims, billing, and reinsurance. Led high-stakes third-party API integrations (LexisNexis, TransUnion, Authorize.Net). Transitioned the team from waterfall to Scrum."
    },
    {
      company: "Garvin-Allen Solutions Ltd.",
      role: "Software Developer",
      period: "2002 – 2010",
      description: "Migrated legacy 16-bit/32-bit Delphi systems to .NET. Architected initial relational schemas for Interbase and SQL Server that scaled for 20+ years. Developed early web-facing portals using ASP.NET."
    },
    {
      company: "Keyin College",
      role: "Software Development Instructor",
      period: "2000 – 2001",
      description: "Taught introductory courses in software development, database design, and Linux. Designed curriculum to help students build foundational programming and system administration skills."
    },
    {
      company: "Fenety Marketing",
      role: "Software Developer",
      period: "1994 – 2000",
      description: "Developed software systems for call tracking and lead management. Implemented custom CRM-style applications using Visual Basic and SQL Server."
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title glow-text">Career Timeline</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="timeline-item"
          >
            <div className="timeline-marker">
              <div className="marker-inner"></div>
            </div>
            <div className="glass-card timeline-content">
              <span className="period font-mono">{exp.period}</span>
              <h3>{exp.role}</h3>
              <h4 className="company">{exp.company}</h4>
              <p className="description">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 2rem;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--primary-neon), var(--accent-blue));
          opacity: 0.3;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }
        .timeline-marker {
          position: absolute;
          left: -2.4rem;
          top: 0.5rem;
          width: 12px;
          height: 12px;
          background: var(--bg-color);
          border: 2px solid var(--primary-neon);
          border-radius: 50%;
          z-index: 1;
        }
        .marker-inner {
          width: 100%;
          height: 100%;
          background: var(--primary-neon);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary-neon);
        }
        .timeline-content {
          padding: 1.5rem 2rem;
        }
        .period {
          font-size: 0.8rem;
          color: var(--primary-neon);
          display: block;
          margin-bottom: 0.5rem;
        }
        .company {
          color: var(--accent-blue);
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        .description {
          color: var(--text-dim);
          font-size: 0.9rem;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

export default Experience;
