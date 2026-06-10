import React, { useState, useEffect } from 'react';
import { Terminal, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="#hero" className="nav-logo">
          <Terminal size={18} style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} />
          <span>~/</span>transition.sh
        </a>
        
        <div className="nav-links">
          <a href="#about" className="nav-link">Sobre</a>
          <a href="#pillars" className="nav-link">Pilares</a>
          <a href="#projects" className="nav-link">Projetos</a>
          <a href="#timeline" className="nav-link">Trajetória</a>
          <a href="#sandbox" className="nav-link">AI Sandbox</a>
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="btn-contact">
            Fale Comigo
          </a>
        </div>
      </div>
    </nav>
  );
}
