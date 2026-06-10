import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Github = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">06. Contato</span>
          <h2 className="section-title">Fale Comigo</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-panel">
            <p className="contact-info-desc">
              Estou ativamente buscando oportunidades técnicas e de produto em Engenharia de Software e IA,
              além de parcerias de inovação em TI. Se você deseja conversar sobre agilidade real,
              arquitetura de sistemas ou novos modelos de IA, sinta-se à vontade para entrar em contato!
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-lbl">E-MAIL</div>
                  <a href="mailto:placeholder@email.com" className="contact-val">
                    placeholder@email.com
                  </a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="contact-lbl">LINKEDIN</div>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-val">
                    linkedin.com/in/seu-perfil-placeholder
                  </a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <Github size={20} />
                </div>
                <div>
                  <div className="contact-lbl">GITHUB</div>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-val">
                    github.com/seu-github-placeholder
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form glass-panel">
            <h3 style={{ color: 'var(--text-bright)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
              // Enviar Mensagem
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-control"
                  placeholder="Seu nome"
                />
              </div>

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-control"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-control"
                  placeholder="Sua proposta ou mensagem..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', width: '100%' }}>
                Enviar Dados <Send size={16} />
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Mensagem simulada enviada com sucesso (Campos validados)!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
