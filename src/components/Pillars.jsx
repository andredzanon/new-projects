import React, { useState } from 'react';
import { Briefcase, Activity, Code, ChevronRight } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Pillars() {
  const [activeTab, setActiveTab] = useState('gestao');
  const { pillars } = profileData;

  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  const getIcon = (id, size) => {
    switch (id) {
      case 'gestao':
        return <Briefcase size={size} />;
      case 'analise':
        return <Activity size={size} />;
      case 'dev':
        return <Code size={size} />;
      default:
        return <Code size={size} />;
    }
  };

  return (
    <section id="pillars">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">02. Competências</span>
          <h2 className="section-title">Pilares de Atuação</h2>
        </div>

        <div className="pillars-nav">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`pillar-tab ${activeTab === pillar.id ? 'active' : ''}`}
              style={{
                color: activeTab === pillar.id ? pillar.color : 'var(--text-main)',
                borderColor: activeTab === pillar.id ? pillar.color : 'var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: pillar.color }}>
                  {getIcon(pillar.id, 24)}
                </div>
                <div>
                  <div className="pillar-tab-title">{pillar.title}</div>
                  <div className="pillar-tab-role">{pillar.tagline}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div
          className="pillar-content-panel glass-panel"
          style={{ borderTop: `4px solid ${activePillar.color}` }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span style={{ color: activePillar.color }}>
              {getIcon(activePillar.id, 20)}
            </span>
            <h3 className="pillar-pane-title">{activePillar.title}</h3>
          </div>
          <div className="pillar-pane-tagline">{activePillar.tagline}</div>
          <p className="pillar-pane-desc">{activePillar.description}</p>

          <h4 style={{ color: 'var(--text-bright)', marginBottom: '1rem', fontSize: '0.95rem', fontFamily: 'var(--font-mono)' }}>
            // Competências de Destaque
          </h4>
          
          <div className="pillar-skills-list">
            {activePillar.skills.map((skill, idx) => (
              <div className="pillar-skill-item" key={idx} style={{ color: activePillar.color }}>
                <ChevronRight size={16} />
                <span style={{ color: 'var(--text-bright)' }}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
