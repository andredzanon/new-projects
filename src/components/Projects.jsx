import React, { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Projects() {
  const [filter, setFilter] = useState('Todos');
  const { projects } = profileData;

  const categories = ['Todos', 'Gestão', 'Análise', 'Desenvolvimento'];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'Todos') return true;
    return project.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">03. Portfólio</span>
          <h2 className="section-title">Projetos em Destaque</h2>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              className="project-card glass-panel"
              key={project.id}
              style={{
                borderColor: `rgba(255, 255, 255, 0.05)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = project.accentColor;
                e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.2), 0 0 15px ${project.accentColor}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="project-top">
                <div className="project-header-row">
                  <span
                    className="project-category"
                    style={{ color: project.accentColor, borderColor: project.accentColor }}
                  >
                    {project.category}
                  </span>
                  <Layers size={18} style={{ color: project.accentColor }} />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span className="project-tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
