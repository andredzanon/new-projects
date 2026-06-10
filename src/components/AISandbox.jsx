import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function AISandbox() {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const { terminalCommands } = profileData;

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmedCmd = inputVal.trim().toLowerCase();
      let response = '';

      if (trimmedCmd) {
        if (terminalCommands[trimmedCmd]) {
          response = terminalCommands[trimmedCmd];
        } else {
          response = `Erro: Comando '${inputVal}' não encontrado.\nDigite 'help' para ver os comandos disponíveis.`;
        }

        setHistory((prev) => [
          ...prev,
          { command: inputVal, output: response }
        ]);
      }
      setInputVal('');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="sandbox">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">05. Sandbox de Inovação</span>
          <h2 className="section-title">Terminal Interativo</h2>
        </div>

        <p style={{ marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Explore minhas competências técnicas e motivacionais interagindo diretamente com
          esta interface de linha de comando. Digite comandos abaixo para diagnosticar meu perfil de transição.
        </p>

        <div className="sandbox-card glass-panel" onClick={focusInput} style={{ cursor: 'text' }}>
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="terminal-title">
              <Terminal size={14} style={{ marginRight: '6px', display: 'inline', verticalAlign: 'middle' }} />
              diagnose_copilot.sh
            </div>
            <div></div>
          </div>

          <div className="sandbox-terminal-body">
            <div className="sandbox-welcome">
              [SISTEMA INICIALIZADO COM SUCESSO]<br />
              Copiloto de Perfil de Carreira v1.0.0. Especialização: IA & Ciência de Dados.<br />
              Digite <span style={{ color: 'var(--accent-dev)' }}>'help'</span> no prompt para listar os comandos de consulta disponíveis.
            </div>

            <div className="sandbox-cmd-history">
              {history.map((item, idx) => (
                <div className="sandbox-cmd-entry" key={idx}>
                  <div className="sandbox-cmd-line">{item.command}</div>
                  <div className="sandbox-cmd-output">{item.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            <div className="sandbox-input-line">
              <span className="sandbox-prompt-lbl">visitor@portfolio:~$ </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleCommand}
                className="sandbox-input"
                aria-label="Terminal Command Input"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
