import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight } from 'lucide-react';

const BlogPreview: React.FC = () => {
  const categories = [
    { name: "MongoDB", count: "Guides on NoSQL optimization", link: "https://www.bytemares.com/categories.html#mongodb-ref" },
    { name: "Docker", count: "Containerization workflows", link: "https://www.bytemares.com/categories.html#docker-ref" },
    { name: "TypeScript", count: "Modern JS development", link: "https://www.bytemares.com/categories.html#typescript-ref" },
    { name: "ASP.NET", count: "Enterprise web solutions", link: "https://www.bytemares.com/categories.html#asp.net-ref" }
  ];

  return (
    <section id="blog" className="section-container">
      <div className="blog-header">
        <h2 className="section-title glow-text">Latest from Bytemares</h2>
        <div className="blog-logo-divider">
          <img src="/logo.png" alt="" />
        </div>
        <p className="blog-subtitle">Technical deep dives, DevOps guides, and software engineering insights.</p>
      </div>
      <div className="blog-categories">
        {categories.map((cat, index) => (
          <motion.a 
            key={cat.name}
            href={cat.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card category-card"
          >
            <div className="cat-info">
              <BookOpen size={18} className="cat-icon" />
              <div>
                <h3>{cat.name}</h3>
                <p>{cat.count}</p>
              </div>
            </div>
            <ChevronRight size={20} className="arrow-icon" />
          </motion.a>
        ))}
      </div>
      <div className="blog-footer">
        <a href="https://www.bytemares.com" target="_blank" rel="noopener noreferrer" className="visit-blog">
          Visit Bytemares.com <ChevronRight size={16} />
        </a>
      </div>
      <style>{`
        .blog-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .blog-logo-divider {
          display: flex;
          justify-content: center;
          margin: 3rem 0;
          opacity: 0.8;
        }
        .blog-logo-divider img {
          height: 180px;
          width: auto;
          filter: drop-shadow(0 0 20px var(--primary-neon));
        }
        .blog-subtitle {
          color: var(--text-dim);
          max-width: 600px;
          margin: 0 auto;
        }
        .blog-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .category-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
        }
        .cat-info {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .cat-icon {
          color: var(--accent-blue);
        }
        .category-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }
        .category-card p {
          font-size: 0.85rem;
          color: var(--text-dim);
        }
        .arrow-icon {
          color: var(--text-dim);
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .category-card:hover .arrow-icon {
          transform: translateX(5px);
          color: var(--primary-neon);
        }
        .blog-footer {
          margin-top: 3rem;
          text-align: center;
        }
        .visit-blog {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          color: var(--primary-neon);
          font-weight: 600;
          padding: 0.5rem 1rem;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }
        .visit-blog:hover {
          border-color: var(--primary-neon);
          background: rgba(0, 243, 255, 0.05);
          box-shadow: 0 0 15px rgba(0, 243, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default BlogPreview;
