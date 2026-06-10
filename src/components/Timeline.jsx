import React from 'react';
import { profileData } from '../data/profileData';

export default function Timeline() {
  const { timeline } = profileData;

  return (
    <section id="timeline">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">04. Linha do Tempo</span>
          <h2 className="section-title">Evolução Profissional</h2>
        </div>

        <div className="timeline-list">
          {timeline.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-header-info">
                <span className="timeline-period">{item.period}</span>
                <span className="timeline-role">{item.role}</span>
                <span className="timeline-company">// {item.company}</span>
              </div>
              <div className="timeline-card glass-panel">
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
