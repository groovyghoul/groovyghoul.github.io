import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Layers } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills }: { title: string, icon: any, skills: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card skill-category"
  >
    <div className="category-header">
      <Icon className="category-icon" size={24} />
      <h3>{title}</h3>
    </div>
    <ul className="skill-list">
      {skills.map(skill => (
        <li key={skill} className="skill-item">
          <span className="skill-dot"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title glow-text">Technical Arsenal</h2>
      <div className="skills-grid">
        <SkillCategory 
          title="Languages & Frameworks" 
          icon={Code} 
          skills={["C# / .NET Core", "ASP.NET MVC", "JavaScript", "Vue.js", "Ruby", "Python", "Lua"]} 
        />
        <SkillCategory 
          title="Backend & Infrastructure" 
          icon={Database} 
          skills={["RESTful APIs", "Azure Pipelines", "CI/CD", "AWS exposure", "Infrastructure as Code", "Node.js"]} 
        />
        <SkillCategory 
          title="Data Systems" 
          icon={Layers} 
          skills={["PostgreSQL", "SQL Server", "MongoDB (NoSQL)", "Interbase / Firebird", "Redis"]} 
        />
        <SkillCategory 
          title="Architecture & Tools" 
          icon={Terminal} 
          skills={["Micro-services", "Clean Architecture", "Neovim", "JetBrains Rider", "Agile / Scrum", "Docker"]} 
        />
      </div>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .category-icon {
          color: var(--primary-neon);
        }
        .skill-list {
          list-style: none;
        }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-dim);
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .skill-dot {
          width: 4px;
          height: 4px;
          background: var(--accent-blue);
          border-radius: 50%;
        }
        .skill-category:hover .skill-dot {
          background: var(--primary-neon);
          box-shadow: 0 0 5px var(--primary-neon);
        }
      `}</style>
    </section>
  );
};

export default Skills;
