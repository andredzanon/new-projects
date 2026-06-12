import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Hero() {
  const { title, hook, stats } = profileData;

  return (
    <header id="hero" className="hero-sec">
      <div className="container">
        <div className="hero-content-wrapper" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-grid">
            <div className="hero-text-content">
              <span className="hero-tag">
                <Code size={14} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline' }} />
                Especialização em IA & Ciências de Dados
              </span>
              <div className="hero-title-container">
                <h1 className="hero-title">{title}</h1>
              </div>
              <p className="hero-hook">{hook}</p>
              <p className="hero-description">
                De técnico e desenvolvedor de software a Diretor de TI municipal.
                Liderei equipes, digitalizei secretarias inteiras e implantei projetos complexos
                sob pressão. Agora, estou canalizando essa visão estratégica de volta à engenharia,
                focado na entrega contínua e na criação de soluções com Inteligência Artificial.
              </p>
              <div className="hero-ctas">
                <a href="#projects" className="btn-primary">
                  Ver Projetos <ArrowRight size={16} style={{ marginLeft: '8px', verticalAlign: 'middle', display: 'inline' }} />
                </a>
                <a href="#sandbox" className="btn-secondary">
                  Abrir Terminal IA
                </a>
              </div>
            </div>

            <div className="hero-image-content">
              <div className="hero-image-container">
                <img 
                  src="/André profissional.png" 
                  alt="André Profissional" 
                  className="hero-profile-img" 
                />
              </div>
            </div>
          </div>

          <div className="stats-bar glass-panel" style={{ marginTop: '4rem' }}>
            {stats.map((stat, idx) => (
              <div className="stat-item" key={idx}>
                <div className="stat-val">{stat.value}</div>
                <div className="stat-lbl">{stat.label}</div>
                <div className="stat-det">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
