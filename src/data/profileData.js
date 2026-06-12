export const profileData = {
  name: "Gestor & Analista de Sistemas",
  title: "Quero trazer a visão estratégica para o desenvolvimento das soluções!",
  hook: "Passei os últimos anos transformando serviços públicos por meio da tecnologia. Agora, estou direcionando minha experiência para a construção de soluções impulsionadas por Inteligência Artificial.",

  stats: [
    { label: "Usuários Impactados", value: "30k+", detail: "UFPR e Município" },
    { label: "Sistemas Implantados", value: "100%", detail: "Ponto Eletrônico UFPR, Chatbot, " },
    { label: "Serviços Municipais Digitais", value: "10+", detail: "Fluxos de ERP em Araucária" },
    { label: "Foco Atual", value: "IA", detail: "Especialização IA p/ Negócios" }
  ],

  about: {
    text1: "Minha trajetória na tecnologia começou no suporte técnico e atendimento ao cliente. Essa primeira experiência me ensinou a escutar com empatia, a ser resolutivo e a traduzir a dor do usuário em requisitos práticos do sistema. Com essa base, me formei como Bacharel em Sistemas de Informação na UTFPR, onde me aprofundei em IHC (Interação Humano-Computador) e Big Data para desenhar softwares mais inteligentes e humanos.",
    text2: "Após a faculdade, atuei como desenvolvedor de software, e criei um sistema completo para acompanhamento de marcas e patentes. Lá aprendi a negociar cronogramas, modelar banco de dados e controlar entregas. Em 2019, ingressei no serviço público federal na UFPR, e passei de técnico a Diretor de TI na PROGEPE, liderando a digitalização de processos no auge da pandemia de COVID-19.",
    text3: "Atualmente, como Analista de Sistemas e Diretor na Prefeitura de Araucária, coordeno integrações complexas de ERP e participei da transição para a nova Secretaria de Ciência, Inovação e Tecnologia. Sinto falta do impacto prático da engenharia de software pura. Por isso, estou me especializando em Ciência de Dados com Inteligência Artificial, buscando retornar à execução técnica onde a palavra 'ágil' toma uma nova proporção: desenvolvendo, testando e subindo pipelines modernos de IA no mesmo dia."
  },

  pillars: [
    {
      id: "gestao",
      title: "Gestão Estratégica",
      color: "var(--accent-gestao)",
      tagline: "Coordenação de esforços em larga escala",
      description: "Liderança de equipes técnicas de TI, negociação de escopos contratuais (ERP municipal), implantação de mudanças culturais (home office híbrido) e gestão de crise sob restrições críticas (pandemia).",
      skills: ["Planejamento de ERP", "Gestão de Equipes", "Contratação Pública / Licitações", "Mudança Cultural & Teams"]
    },
    {
      id: "analise",
      title: "Análise de Sistemas",
      color: "var(--accent-analise)",
      tagline: "Traduzindo complexidade em fluxos eficientes",
      description: "Modelagem de processos públicos de ponta a ponta (licenças ambientais, inspeção municipal, carteirinhas PNE), arquitetura de integração de dados e engenharia de requisitos focada na experiência do usuário (UTFPR).",
      skills: ["Modelagem de Processos", "Integração de ERP", "Arquitetura de Software", "IHC (UX) & Requisitos"]
    },
    {
      id: "dev",
      title: "Desenvolvimento & IA",
      color: "var(--accent-dev)",
      tagline: "Construindo soluções robustas e inovadoras",
      description: "Criação de sistemas funcionais ponta a ponta. Atualmente focado na integração de modelos de Inteligência Artificial para automação, análise preditiva e otimização de fluxos de negócios.",
      skills: ["React & Node.js", "Modelos de IA (LLMs)", "Ciência de Dados", "CI/CD & Automação"]
    }
  ],

  timeline: [
    {
      period: "Início",
      role: "Suporte Técnico & Atendimento",
      company: "Primeiros Passos",
      description: "Desenvolvimento de soft skills essenciais: empatia, conciliação e resolução imediata de problemas, observando de perto a experiência do usuário final."
    },
    {
      period: "Graduação",
      role: "Estudante de Análise de Sistemas",
      company: "UTFPR",
      description: "Foco acadêmico em Interação Humano-Computador (IHC) e Big Data, desenvolvendo pesquisa voltada para a melhoria de ferramentas analíticas."
    },
    {
      period: "Mercado",
      role: "Desenvolvedor de Software",
      company: "Escritório de Marcas & Patentes",
      description: "Desafio de aprender um novo ecossistema. Responsável pela negociação do cronograma e programação completa da versão V1 do sistema de acompanhamento de marcas e patentes."
    },
    {
      period: "2019 - 2021",
      role: "Técnico de Informática",
      company: "PROGEPE / UFPR",
      description: "Ingresso por concurso público. Atuação no suporte, infraestrutura e administração dos servidores locais da Pró-Reitoria de Gestão de Pessoas."
    },
    {
      period: "2021 - 2022",
      role: "Diretor de TI da PROGEPE",
      company: "UFPR",
      description: "Promoção a Diretor. Liderou a implantação nacional do ponto eletrônico na pandemia. Migrou a infraestrutura de dados para nuvem (O365) e implementou o modelo híbrido via Teams."
    },
    {
      period: "2022 - Atual",
      role: "Analista de Sistemas & Diretor de TI",
      company: "Prefeitura de Araucária",
      description: "Único analista concursado inicialmente. Modelagem de processos digitais (Ambiental, Saúde, Governo). Liderou a transição para a nova Secretaria de Ciência, Inovação e Tecnologia e gestão de sistemas complexos."
    },
    {
      period: "Futuro Próximo",
      role: "Especialização em IA & Retorno Técnico",
      company: "Uninter / Transição de Carreira",
      description: "Pós-graduação em Ciência de Dados e IA para Negócios. O objetivo é atuar na engenharia prática de IA, criando ferramentas automatizadas e integrando modelos inteligentes no dia a dia do desenvolvimento."
    }
  ],

  projects: [
    {
      id: "ponto-ufpr",
      title: "Implantação do Ponto Eletrônico UFPR",
      category: "Gestão / Análise",
      description: "Projeto de alta complexidade feito no auge da pandemia de COVID-19. Coordenou a elaboração do projeto, modelagem de regras de ponto para servidores públicos federais e o início da execução em toda a universidade.",
      tags: ["Gestão de Crise", "Modelagem de Regras", "Liderança", "UFPR"],
      accentColor: "var(--accent-gestao)"
    },
    {
      id: "erp-araucaria",
      title: "Portal de Processos Digitais & Integração ERP",
      category: "Análise / Gestão",
      description: "Modelagem de fluxos de tarefas para digitalização completa de certidões, processos de meio ambiente, solicitações de agricultura e carteirinhas PNE para a Saúde. Eliminação do uso de papel em trâmites internos.",
      tags: ["Modelagem BPMN", "Integração de ERP", "Secretaria de Tecnologia"],
      accentColor: "var(--accent-analise)"
    },
    {
      id: "marcas-patentes",
      title: "Sistema de Marcas e Patentes V1",
      category: "Desenvolvimento",
      description: "Desenvolvimento completo do sistema de acompanhamento de processos processuais e prazos legais de patentes. Incluiu desde a negociação de cronograma com o cliente final até a entrega da versão operacional V1.",
      tags: ["React/Node", "Banco de Dados", "Negociação de Escopo"],
      accentColor: "var(--accent-dev)"
    },
    {
      id: "cloud-progepe",
      title: "Migração Cloud & Infraestrutura Teams",
      category: "Gestão / Infraestrutura",
      description: "Liderança técnica na migração de servidores físicos locais para Office 365. Mapeamento patrimonial em SharePoint e reestruturação de comunicação em larga escala via Teams, permitindo modelo híbrido estável (2 dias presenciais / 3 home office).",
      tags: ["Office 365", "SharePoint", "Gestão de Mudança", "TI Verde"],
      accentColor: "var(--accent-gestao)"
    },
    {
      id: "ia-business",
      title: "Laboratório de IA & Automação de Negócios",
      category: "Desenvolvimento / IA",
      description: "Prototipagem de sistemas que usam agentes de IA para processamento de dados e análise corporativa. Focado em pipelines ágeis de CI/CD para deploy rápido de novos prompts e funcionalidades integradas.",
      tags: ["Python", "OpenAI APIs", "Continuous Deployment", "Data Science"],
      accentColor: "var(--accent-dev)"
    }
  ],

  terminalCommands: {
    help: "Comandos disponíveis:\n  help        - Mostra esta lista de comandos\n  skills      - Exibe a lista de habilidades técnicas e de gestão\n  timeline    - Resume a trajetória profissional em ordem cronológica\n  motivation  - Explica o porquê da transição de gestão de volta ao código/IA\n  contact     - Mostra e-mail e canais de comunicação",
    skills: "Habilidades Técnicas:\n  [Programação]     React, Node.js, Python, SQL, REST APIs, Git\n  [Análise/UX]      Modelagem de Processos (BPMN), Engenharia de Requisitos, IHC, UX/UI\n  [Gestão de TI]    Liderança Ágil, Gestão de ERPs Públicos, Implantação de Cloud (O365)\n  [Inteligência Art.] Prompt Engineering, Modelos de Linguagem (LLMs), Ciência de Dados",
    timeline: "Resumo do Arco de Carreira:\n  1. Suporte Técnico   -> Empatia e tradução de requisitos\n  2. UTFPR (Acadêmico) -> Análise de Sistemas e IHC\n  3. Dev de Software   -> Codificação e negociação do primeiro sistema (Marcas)\n  4. Diretor de TI     -> Liderança de impacto na UFPR e Prefeitura de Araucária\n  5. Transição Técnica -> Foco em Inteligência Artificial e Produto",
    motivation: "Por que voltar a construir?\n  \"Como diretor de TI, passei anos coordenando ERPs e gerenciando pessoas. No entanto,\n  a revolução dos LLMs e da IA redefiniu a velocidade do desenvolvimento técnico.\n  Quero aplicar minhas habilidades analíticas e de gestão no fio da navalha do código,\n  construindo microsserviços inteligentes com releases rápidos de alta frequência.\"",
    contact: "Canais de Comunicação:\n  [E-mail]     placeholder@email.com\n  [LinkedIn]   linkedin.com/in/seu-perfil-placeholder\n  [GitHub]     github.com/seu-github-placeholder\n  [Status]     Aberto a propostas técnicas em IA e Engenharia de Software"
  }
};
