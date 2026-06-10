import React from 'react';
import { profileData } from '../data/profileData';

export default function About() {
  const { about } = profileData;

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">01. Jornada</span>
          <h2 className="section-title">Sobre Mim</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <p>{about.text1}</p>
            <p>{about.text2}</p>
            <p>{about.text3}</p>
          </div>

          <div className="about-profile">
            <div className="about-terminal-mock">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="terminal-title">about_me.sh</div>
                <div></div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">whoami</span>
                  <div className="terminal-output">Analista & Estrategista</div>
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">cat UTFPR_focus.log</span>
                  <div className="terminal-output">
                    UX Research, Big Data & Human-Computer Interaction
                  </div>
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">sysctl -a | grep impact</span>
                  <div className="terminal-output">
                    ponto_ufpr: 100% OK<br />
                    erp_araucaria: 10+ Sectors OK<br />
                    hybrid_work: Active (2/3 Split)
                  </div>
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">echo $CURRENT_DESIRE</span>
                  <div className="terminal-output" style={{ color: 'var(--accent-dev)' }}>
                    "Voltar a construir sistemas inovadores usando Inteligência Artificial."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
