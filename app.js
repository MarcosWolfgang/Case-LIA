/**
 * LIA UFSCar · Painel Estratégico de Oportunidades
 * Processo Seletivo Novos Founders · Marcos Wolfgang
 * ORDENAÇÃO ESTRITA POR ORDEM DE VENCIMENTO / CRONOLOGIA
 * 
 * 100% Nativo / Zero Dependências Externas / Suporte file:/// Nativo
 */

(function () {
  'use strict';

  // Base de Dados Estruturada das 6 Organizações
  // ORDENAÇÃO ESTRITA POR ORDEM DE VENCIMENTO:
  // 1: Meridian Estratégia (01/10 - Amanhã)
  // 2: Senda Patrimonial (02/10 - Sexta)
  // 3: Violeta Financeira (Semana de 05/10)
  // 4: Brava Consultoria (07/10)
  // 5: Prisma Estratégica (15/10)
  // 6: Aerion Sistemas Aeroespaciais (16/10)
  const OPPORTUNITIES_DATA = [
    {
      id: "meridian",
      deadlineOrder: 1,
      category: "alta",
      org: "Meridian Estratégia",
      contactPerson: "Raul",
      sector: "Consultoria de Gestão Estratégica",
      deadline: "01/10/2026",
      status: "Oficina Confirmada",
      priority: "Alta",
      priorityBadgeClass: "high",
      decision: "Confirmar oficina presencial de uma única manhã com feedback de consultores seniores.",
      justification: "Imersão de 1 manhã com consultores seniores; zero demanda de desenvolvimento de software em 2026.",
      dedication: "4 membros na oficina presencial (Organização: Membros 1 e 3).",
      nextActionFormatted: "Confirmar presença formal por e-mail e propor data entre 06 e 08/10 até <strong>01/10/2026 (Amanhã)</strong>.",
      nextActionAndOwner: "Confirmar presença e propor data (06 a 08/10) · Resp: Membro 5 (RI) + Membro 1 (Operações)",
      keyCondition: "Foco estrito em diagnóstico corporativo; exclusão expressa de desenvolvimento posterior de software.",
      letterSubject: "Confirmação da Oficina Prática na Meridian | LIA UFSCar",
      letterBody: `Olá, Raul, tudo bem?

Agradecemos muito o convite e a oportunidade desde o nosso encontro sobre carreira! Avaliamos a proposta internamente e confirmamos com entusiasmo a realização da oficina prática presencial.

Sabendo que sua equipe estará dedicada a clientes após 09 de outubro, propomos realizar a dinâmica na manhã do dia 07/10 (ou entre os dias 06 e 08/10, na data que melhor acomodar a agenda dos consultores).

Conforme solicitado pelo programa, estruturei os pontos operacionais da nossa participação:

1. Organização e contato: Serei o ponto focal de comunicação da Liga, coordenando a logística e os alinhamentos prévios junto à equipe de operações.

2. Participação da equipe: Levaremos uma delegação de 4 integrantes para a imersão presencial, mantendo os outros 2 membros dedicados às entregas de desenvolvimento na universidade. Os participantes terão o compromisso de replicar os aprendizados internamente.

3. Aprendizagens pretendidas: Nosso objetivo pedagógico central é exercitar a estruturação de hipóteses em diagnósticos de negócios, a formulação de perguntas investigativas a gestores e a tomada de decisão orientada a dados sob o feedback de consultores seniores.

Fico à disposição para alinharmos os detalhes finais e confirmarmos a data exata.

Atenciosamente,
Marcos Wolfgang
Founder | LIA UFSCar`
    },
    {
      id: "senda",
      deadlineOrder: 2,
      category: "alta",
      org: "Senda Patrimonial",
      contactPerson: "Theo",
      sector: "Assessoria de Investimentos (Mercado Financeiro)",
      deadline: "02/10/2026",
      status: "Piloto Técnico Aprovado",
      priority: "Alta",
      priorityBadgeClass: "high",
      decision: "Executar piloto de 4 semanas de busca interna e realizar palestra sobre carreira em IA em outubro.",
      justification: "Projeto prioritário em IA e finanças sob estrito cumprimento da Regra de Ouro (teto de 1 projeto técnico).",
      dedication: "2 membros dedicados (Membro 1 · Ops e Membro 2 · Dev) em piloto de 4 semanas.",
      nextActionFormatted: "Enviar alinhamento detalhado do piloto e agendar call com equipe de formação até <strong>02/10/2026</strong> (antes da viagem do Theo).",
      nextActionAndOwner: "Call de 20 min com Theo e equipe de formação até 02/10 · Resp: Membro 5 (RI) + Membro 1 (Operações)",
      keyCondition: "Uso exclusivo de dados sintéticos/higienizados (zero dados reais / sigilo CVM) e tutor técnico da Senda designado.",
      letterSubject: "Parceria LIA UFSCar & Próximos Passos do Piloto",
      letterBody: `Olá, Theo, tudo bem?

Foi excelente o nosso contato por meio do grupo universitário! Avaliamos internamente a proposta e confirmamos nosso total interesse em estruturar o piloto de 4 semanas voltado à busca de materiais e orientações internas, além de viabilizar a conversa sobre carreira e IA com nossos integrantes antes da sua viagem.

O formato sugerido, reunindo dois integrantes dedicados da Liga com os dois assessores em treinamento da Senda, atende perfeitamente à nossa metodologia de trabalho em duplas. Para assegurar total conformidade regulatória e a privacidade dos clientes, combinamos previamente atuar exclusivamente com bases sintéticas e dados higienizados pela sua equipe.

Como você mencionou que viaja na segunda quinzena de outubro, nosso objetivo é validar essas diretrizes até 02/10. Conseguimos agendar uma breve conversa de 20 minutos com você e o responsável pela equipe de formação nos próximos dias?

Um abraço,
Marcos Wolfgang
Founder | LIA UFSCar`
    },
    {
      id: "violeta",
      deadlineOrder: 3,
      category: "baixa",
      org: "Violeta Financeira",
      contactPerson: "Alumni & Equipe UX",
      sector: "Fintech de Pagamentos",
      deadline: "Semana de 05/10/2026",
      status: "Bate-Papo & Aula UX (Janela 2027)",
      priority: "Baixa",
      priorityBadgeClass: "low",
      decision: "Realizar bate-papo de 30 min e aula remota de UX com alumni; postergar projeto de churn para 2027.",
      justification: "Foco técnico único alocado na Senda; preservação de canal com alumni para o 1º sem/2027.",
      dedication: "1 membro institucional (Membro 5 conduz a call de 30 min com apoio do Membro 2).",
      nextActionFormatted: "Agendar bate-papo de 30 min e confirmar data da aula de UX na <strong>semana de 05/10/2026</strong>.",
      nextActionAndOwner: "Agendar call de 30 min e aula de UX na semana de 05/10 · Resp: Membro 5 (RI) + Membro 2 (Técnico)",
      keyCondition: "Projeto técnico de churn direcionado para o <strong>1º semestre de 2027</strong> após seleção interna da fintech.",
      letterSubject: "Conexão LIA UFSCar & Violeta Financeira | Experiência do Cliente",
      letterBody: `Olá! É gratificante ver profissionais formados pela UFSCar à frente de desafios complexos de experiência do usuário no mercado de tecnologia.

Agradecemos imensamente a aproximação! Confirmamos nosso total interesse em realizar a call de 30 minutos na semana de 05 de outubro e em estruturar a aula remota sobre pesquisa com usuários para os membros da Liga.

Em relação ao estudo aprofundado de abandono de ajuda no aplicativo, como um projeto desse porte demanda ao menos três meses de testes de campo e aprovações formais de acesso a usuários, enxergamos a nossa conversa de outubro como o alinhamento ideal para compreender o desafio. Assim, poderemos estruturar uma proposta técnica consistente para a seleção interna de projetos da Violeta em novembro, viabilizando a execução para o primeiro semestre de 2027.

Quais opções de dias e horários na próxima semana ficam mais convenientes para você e para a pesquisadora realizarmos esse primeiro alinhamento?

Um abraço,
Marcos Wolfgang
Founder | LIA UFSCar`
    },
    {
      id: "brava",
      deadlineOrder: 4,
      category: "media",
      org: "Brava Consultoria",
      contactPerson: "Helena",
      sector: "Estratégia e Execução Corporativa",
      deadline: "07/10/2026",
      status: "Mentoria em Contraproposta (2 Vagas)",
      priority: "Média",
      priorityBadgeClass: "medium",
      decision: "Aceitar mentoria analítica de 6 semanas mediante contraproposta formal de turma reduzida.",
      justification: "Capacitação metodológica com formação de multiplicadores sem sobrecarregar a grade horária na UFSCar.",
      dedication: "2 membros na mentoria de 6 semanas (Membros 3 e 4 atuam como multiplicadores).",
      nextActionFormatted: "Confirmar os 2 participantes à Helena e checar compatibilidade de horários com suporte até <strong>07/10/2026</strong>.",
      nextActionAndOwner: "Confirmar turma de 2 multiplicadores até 07/10 · Resp: Membro 3 (Técnico) + Membro 4 (Operações)",
      keyCondition: "Turma restrita a 2 membros para blindar a grade na UFSCar e difusão em reuniões quinzenais.",
      letterSubject: "Formação em Metodologia Estratégica | LIA UFSCar & Brava",
      letterBody: `Olá, Helena, tudo bem?

Muito obrigado pela oportunidade e pela abertura para aproximar a Brava dos nossos estudantes. Reconhecemos a excelência metodológica da consultoria e enxergamos enorme valor no ciclo formativo de 6 semanas.

Avaliando a rotina acadêmica deste semestre e a dedicação exigida pelas leituras semanais, gostaríamos de propor a composição da turma com 2 integrantes titulares e dedicados. Essa dupla terá presença integral e assumirá a responsabilidade formal de difundir os frameworks aprendidos com o restante da Liga em workshops quinzenais.

Acredita que esse formato atende às expectativas dos consultores que conduzirão as sessões? Se fizer sentido, estamos prontos para nos conectar com a analista indicada e calibrar os horários de início para a segunda quinzena de outubro.

Um abraço,
Marcos Wolfgang
Founder | LIA UFSCar`
    },
    {
      id: "prisma",
      deadlineOrder: 5,
      category: "baixa",
      org: "Prisma Estratégica",
      contactPerson: "Bianca",
      sector: "Consultoria Internacional de Gestão",
      deadline: "15/10/2026",
      status: "Relacionamento Institucional",
      priority: "Baixa",
      priorityBadgeClass: "low",
      decision: "Realizar call de 20 min e enviar deck institucional da Liga; declinar formalmente do desafio corporativo.",
      justification: "Construção de canal institucional e blindagem de foco técnico ao declinar do desafio concorrente.",
      dedication: "1 membro institucional (Membro 5 conduz call de 20 min; Membro 6 elabora deck até 15/10).",
      nextActionFormatted: "Submeter deck institucional consolidado com histórico e governança da LIA até <strong>15/10/2026</strong>.",
      nextActionAndOwner: "Enviar deck institucional consolidado até 15/10 · Resp: Membro 5 (RI) + Membro 6 (Growth)",
      keyCondition: "Declínio formal da competição de novembro para não dispersar o foco da entrega técnica da Senda.",
      letterSubject: "Apresentação Institucional LIA UFSCar & Próximos Passos",
      letterBody: `Olá, Bianca, tudo bem?

Foi uma honra receber o contato da Prisma por intermédio da nossa professora na UFSCar! Acompanhamos a relevância global da consultoria e valorizamos muito a oportunidade de estreitar laços institucionais.

Conforme solicitado, estamos finalizando a elaboração do documento com a história da LIA, o perfil técnico dos integrantes e nossas linhas de atuação, com envio garantido até 15 de outubro. Temos também total interesse em realizar a conversa de 20 minutos nesta primeira semana do mês para apresentar nossa liderança e conhecer os objetivos do programa.

A respeito do desafio estudantil de novembro, em função dos compromissos operacionais e formativos já firmados para este semestre, optamos por concentrar nossos esforços na consolidação de um canal institucional de longo prazo com a Prisma, preservando a qualidade das nossas entregas atuais.

Fico à disposição para confirmarmos o melhor horário para o nosso breve encontro inicial.

Atenciosamente,
Marcos Wolfgang
Founder | LIA UFSCar`
    },
    {
      id: "aerion",
      deadlineOrder: 6,
      category: "baixa",
      org: "Aerion Sistemas Aeroespaciais",
      contactPerson: "Beatriz",
      sector: "Indústria Aeroespacial e Defesa",
      deadline: "16/10/2026",
      status: "Visita Técnica de Campo (Nov/2026)",
      priority: "Baixa",
      priorityBadgeClass: "low",
      decision: "Aceitar visita técnica de campo à fábrica em novembro; postergar projeto de 5 meses para 2027.",
      justification: "Abertura de canal em polo industrial aeroespacial; visita em nov/2026 pavimenta projeto robusto para 2027.",
      dedication: "1 membro de growth (Membro 6 consolida checklist de dúvidas até 16/10).",
      nextActionFormatted: "Enviar manifesto formal de interesse e checklist de dúvidas técnicas sobre os manuais até <strong>16/10/2026</strong>.",
      nextActionAndOwner: "Enviar manifesto e checklist de dúvidas técnicas até 16/10 · Resp: Membro 5 (RI) + Membro 6 (Growth)",
      keyCondition: "Visita de campo sem compromisso de dev em 2026; projeto longo reservado para a janela de 2027.",
      letterSubject: "Manifesto de Interesse e Visita Técnica | LIA UFSCar & Aerion",
      letterBody: `Olá, Beatriz, tudo bem?

Foi um privilégio conversar com você durante sua visita à UFSCar! A abordagem de ouvir os operadores de montagem antes de implementar soluções tecnológicas chamou muito a nossa atenção pela responsabilidade de engenharia.

Confirmamos formalmente o interesse da Liga em participar da visita técnica exploratória em novembro. Compreendemos que vivenciar a rotina do chão de fábrica e conversar com os especialistas de qualidade e produção é a etapa preparatória indispensável para dimensionar o desafio.

Até 16 de outubro, enviaremos o compilado com as dúvidas prioritárias e os pontos de investigação que gostaríamos de aprofundar a respeito das instruções de montagem. Essa imersão nos dará os subsídios necessários para estruturar um plano de trabalho sob medida para a janela de 2027, quando a complexidade de um projeto de cinco meses terá a dedicação que merece.

Seguimos à disposição para definir os termos e a data da visita!

Atenciosamente,
Marcos Wolfgang
Founder | LIA UFSCar`
    }
  ];

  // Estado da Aplicação
  let currentFilter = 'todas';
  let searchQuery = '';
  let activeLetterId = 'meridian';
  let currentViewMode = 'cards'; // 'cards' ou 'table'

  /**
   * Cópia para Clipboard 100% Segura em file:///
   */
  function copyToClipboard(text, successCallback, errorCallback) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => { if (successCallback) successCallback(); })
        .catch(() => { fallbackCopyText(text, successCallback, errorCallback); });
    } else {
      fallbackCopyText(text, successCallback, errorCallback);
    }
  }

  function fallbackCopyText(text, successCallback, errorCallback) {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.top = "-9999px";
      textArea.style.left = "-9999px";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        if (successCallback) successCallback();
      } else {
        if (errorCallback) errorCallback();
      }
    } catch (err) {
      if (errorCallback) errorCallback();
    }
  }

  function showToast(message) {
    const toast = document.getElementById("toastBox");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  /**
   * Alternar Modo de Visualização (Cards vs Tabela)
   */
  function setViewMode(mode) {
    currentViewMode = mode;
    const cardsGrid = document.getElementById("opportunitiesGrid");
    const tableWrap = document.getElementById("opportunitiesTableContainer");
    const btnCards = document.getElementById("btnViewCards");
    const btnTable = document.getElementById("btnViewTable");

    if (mode === 'cards') {
      if (cardsGrid) cardsGrid.style.display = 'grid';
      if (tableWrap) tableWrap.style.display = 'none';
      if (btnCards) btnCards.classList.add('active');
      if (btnTable) btnTable.classList.remove('active');
    } else {
      if (cardsGrid) cardsGrid.style.display = 'none';
      if (tableWrap) tableWrap.style.display = 'block';
      if (btnCards) btnCards.classList.remove('active');
      if (btnTable) btnTable.classList.add('active');
    }
  }

  /**
   * Renderização dos Cards das Organizações (Modo Cards)
   */
  function renderOpportunitiesCards(sorted) {
    const container = document.getElementById("opportunitiesGrid");
    if (!container) return;

    container.innerHTML = sorted.map(item => {
      const isUrgent = item.id === 'meridian' || item.id === 'senda';
      return `
      <article class="opportunity-card-dark" id="card-${item.id}">
        <!-- Topo: Nome, Setor e Badge de Prazo Sóbria (Zero Emojis) -->
        <div class="card-head-row">
          <div class="card-title-group">
            <span class="card-rank-label">#0${item.deadlineOrder} • Ordem de Vencimento</span>
            <h3 class="card-org-title">${item.org}</h3>
            <span class="card-sector-sub">${item.sector}</span>
          </div>
          ${isUrgent ? `
            <span class="card-deadline-badge urgent-${item.id === 'meridian' ? 'red' : 'amber'}">
              ${item.id === 'meridian' ? 'Vence 01/10 (Amanhã)' : 'Vence 02/10 (Sexta)'}
            </span>
          ` : `
            <span class="card-deadline-badge neutral">
              Prazo: ${item.deadline}
            </span>
          `}
        </div>

        <!-- Exatamente os 4 Tópicos Diretos e Espaçados -->
        <div class="card-topics-group">
          <!-- 1. Decisão Estratégica -->
          <div class="topic-item">
            <span class="topic-label">Decisão Estratégica</span>
            <p class="topic-text">${item.decision}</p>
          </div>

          <!-- 2. Alocação da Equipe -->
          <div class="topic-item">
            <span class="topic-label">Alocação da Equipe</span>
            <p class="topic-text">${item.dedication}</p>
          </div>

          <!-- 3. Próxima Ação & Prazo -->
          <div class="topic-item">
            <span class="topic-label">Próxima Ação &amp; Prazo</span>
            <p class="topic-text">${item.nextActionFormatted}</p>
          </div>

          <!-- 4. Condição Inegociável / Pendência -->
          <div class="topic-item">
            <span class="topic-label">Condição Inegociável / Pendência</span>
            <p class="topic-text topic-condition">${item.keyCondition}</p>
          </div>
        </div>

        <!-- Rodapé Fixo com Botão -->
        <div class="card-footer-action">
          <button class="btn-open-letter-primary" data-id="${item.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Ver Carta Institucional
          </button>
        </div>
      </article>
      `;
    }).join('');

    // Eventos dos Botões "Ver Carta Institucional"
    container.querySelectorAll(".btn-open-letter-primary").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        openLetterModal(id);
      });
    });
  }

  /**
   * Renderização da Tabela Executiva Consolidada (Modo Tabela)
   * 8 Colunas Exigidas + Botão de Ação Direta
   */
  function renderOpportunitiesTable(sorted) {
    const container = document.getElementById("opportunitiesTableContainer");
    if (!container) return;

    container.innerHTML = `
      <table class="executive-table">
        <thead>
          <tr>
            <th style="width: 14%;">Organização</th>
            <th style="width: 11%;">Status</th>
            <th style="width: 8%;">Prioridade</th>
            <th style="width: 18%;">Justificativa</th>
            <th style="width: 17%;">Próxima Ação &amp; Responsável</th>
            <th style="width: 10%;">Prazo</th>
            <th style="width: 12%;">Pendências / Condições</th>
            <th style="width: 10%;">Dedicação da Equipe</th>
            <th style="width: 6%; text-align: center;">Ação</th>
          </tr>
        </thead>
        <tbody>
          ${sorted.map(item => {
            const isUrgent = item.id === 'meridian' || item.id === 'senda';
            return `
            <tr id="row-${item.id}">
              <td>
                <strong>${item.org}</strong>
                <div class="cell-sub">${item.sector}</div>
              </td>
              <td>
                <span class="badge-status-table ${isUrgent ? (item.id === 'meridian' ? 'urgent-red' : 'urgent-amber') : 'neutral'}">
                  ${item.status}
                </span>
              </td>
              <td>
                <span class="badge-priority ${item.priorityBadgeClass}">
                  ${item.priority}
                </span>
              </td>
              <td>${item.justification}</td>
              <td>
                <div>${item.nextActionAndOwner}</div>
              </td>
              <td>
                <span class="badge-status-table ${isUrgent ? (item.id === 'meridian' ? 'urgent-red' : 'urgent-amber') : 'neutral'}">
                  ${item.deadline}
                </span>
              </td>
              <td>
                <div style="font-size: 11.5px; color: #cbd5e1;">${item.keyCondition}</div>
              </td>
              <td>
                <div style="font-size: 11.5px; color: #94a3b8;">${item.dedication}</div>
              </td>
              <td style="text-align: center;">
                <button class="btn-table-action" data-id="${item.id}" title="Ver Carta Institucional">
                  Carta
                </button>
              </td>
            </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;

    // Eventos dos Botões "Carta" na Tabela
    container.querySelectorAll(".btn-table-action").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        openLetterModal(id);
      });
    });
  }

  /**
   * Renderização das Organizações (Aplica Filtros e Mantém Sincronia de Ambos os Modos)
   */
  function renderOpportunities() {
    const cardsContainer = document.getElementById("opportunitiesGrid");
    const tableContainer = document.getElementById("opportunitiesTableContainer");
    if (!cardsContainer || !tableContainer) return;

    const filtered = OPPORTUNITIES_DATA.filter(item => {
      const matchesFilter = (currentFilter === 'todas') || (item.category === currentFilter);

      const matchesSearch = !searchQuery || 
        item.org.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.decision.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyCondition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.justification.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nextActionAndOwner.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });

    // TRAVAMENTO ESTRITO DA ORDEM POR VENCIMENTO CRONOLÓGICO
    const sorted = [...filtered].sort((a, b) => a.deadlineOrder - b.deadlineOrder);

    if (sorted.length === 0) {
      const emptyHtml = `
        <div style="text-align: center; padding: 36px; background: #1e293b; border-radius: 8px; border: 1px dashed #334155; width: 100%; box-sizing: border-box;">
          <p style="font-size: 13.5px; font-weight: 600; color: #94a3b8;">Nenhuma organização encontrada para o filtro atual.</p>
          <button class="btn-reset-filters" style="margin-top: 10px; padding: 6px 14px; background: #0284c7; color: #ffffff; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 600;">Limpar Filtros</button>
        </div>
      `;
      cardsContainer.innerHTML = emptyHtml;
      tableContainer.innerHTML = emptyHtml;

      document.querySelectorAll(".btn-reset-filters").forEach(btn => {
        btn.addEventListener("click", () => {
          currentFilter = 'todas';
          searchQuery = '';
          const searchInput = document.getElementById("searchInput");
          if (searchInput) searchInput.value = '';
          updateFilterButtons();
          renderOpportunities();
        });
      });
      return;
    }

    renderOpportunitiesCards(sorted);
    renderOpportunitiesTable(sorted);
    setViewMode(currentViewMode);
  }

  /**
   * Central de Cartas Institucionais
   */
  function renderLettersSection() {
    const menuContainer = document.getElementById("lettersMenu");
    if (!menuContainer) return;

    const sortedLetters = [...OPPORTUNITIES_DATA].sort((a, b) => a.deadlineOrder - b.deadlineOrder);

    menuContainer.innerHTML = sortedLetters.map(item => `
      <button class="letter-menu-btn-dark ${item.id === activeLetterId ? 'active' : ''}" data-id="${item.id}">
        <span class="menu-btn-org">#0${item.deadlineOrder} • ${item.org}</span>
        <span class="menu-btn-sub">Prazo: ${item.deadline}</span>
      </button>
    `).join('');

    menuContainer.querySelectorAll(".letter-menu-btn-dark").forEach(btn => {
      btn.addEventListener("click", () => {
        activeLetterId = btn.getAttribute("data-id");
        renderLettersSection();
        displaySelectedLetter();
      });
    });

    displaySelectedLetter();
  }

  function displaySelectedLetter() {
    const opp = OPPORTUNITIES_DATA.find(o => o.id === activeLetterId) || OPPORTUNITIES_DATA[0];
    const orgTitle = document.getElementById("letterViewerOrg");
    const subject = document.getElementById("letterViewerSubject");
    const content = document.getElementById("letterViewerContent");
    const copyBtn = document.getElementById("btnCopyActiveLetter");

    if (orgTitle) orgTitle.textContent = `${opp.org} — [Prazo: ${opp.deadline}]`;
    if (subject) subject.textContent = `Assunto: ${opp.letterSubject}`;
    if (content) content.textContent = opp.letterBody;

    if (copyBtn) {
      copyBtn.onclick = () => {
        copyToClipboard(opp.letterBody, () => {
          showToast(`Carta para ${opp.org} copiada!`);
        }, () => {
          showToast("Selecione e copie o texto manualmente.");
        });
      };
    }
  }

  /**
   * Modal de E-mail
   */
  function openLetterModal(id) {
    const opp = OPPORTUNITIES_DATA.find(o => o.id === id);
    if (!opp) return;

    const modal = document.getElementById("letterModal");
    const title = document.getElementById("modalLetterTitle");
    const dest = document.getElementById("modalEmailDest");
    const subj = document.getElementById("modalLetterSubject");
    const text = document.getElementById("modalLetterText");
    const copyBtn = document.getElementById("btnModalCopy");

    if (title) title.textContent = `Carta Institucional — ${opp.org}`;
    if (dest) dest.innerHTML = `<strong>Para:</strong> ${opp.contactPerson} (${opp.org})`;
    if (subj) subj.innerHTML = `<strong>Assunto:</strong> ${opp.letterSubject}`;
    if (text) text.textContent = opp.letterBody;

    if (copyBtn) {
      copyBtn.onclick = () => {
        copyToClipboard(opp.letterBody, () => {
          showToast("Mensagem copiada para a área de transferência!");
        }, () => {
          showToast("Selecione o texto manualmente no modal.");
        });
      };
    }

    if (modal) modal.classList.add("active");
  }

  function closeModals() {
    document.querySelectorAll(".modal-overlay").forEach(modal => {
      modal.classList.remove("active");
    });
  }

  function updateFilterButtons() {
    document.querySelectorAll(".filter-pill-dark").forEach(btn => {
      if (btn.getAttribute("data-filter") === currentFilter) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  /**
   * Navegação Entre as 3 Abas Principais
   */
  function switchView(viewName) {
    const painelView = document.getElementById("painelView");
    const equipeView = document.getElementById("equipeView");
    const lettersView = document.getElementById("lettersView");
    const tabPainel = document.getElementById("tabPainel");
    const tabEquipe = document.getElementById("tabEquipe");
    const tabLetters = document.getElementById("tabLetters");

    if (tabPainel) tabPainel.classList.remove("active");
    if (tabEquipe) tabEquipe.classList.remove("active");
    if (tabLetters) tabLetters.classList.remove("active");

    if (painelView) painelView.style.display = "none";
    if (equipeView) equipeView.style.display = "none";
    if (lettersView) {
      lettersView.classList.remove("active");
      lettersView.style.display = "none";
    }

    if (viewName === "painel") {
      if (painelView) painelView.style.display = "block";
      if (tabPainel) tabPainel.classList.add("active");
    } else if (viewName === "equipe") {
      if (equipeView) equipeView.style.display = "flex";
      if (tabEquipe) tabEquipe.classList.add("active");
    } else if (viewName === "cartas") {
      if (lettersView) {
        lettersView.classList.add("active");
        lettersView.style.display = "block";
      }
      if (tabLetters) tabLetters.classList.add("active");
    }
  }

  /**
   * Alternância de Visualização da Agenda (Semanas vs Calendário Mensal)
   */
  let currentAgendaMode = 'weeks';

  function setAgendaMode(mode) {
    currentAgendaMode = mode;
    const btnWeeks = document.getElementById("btnAgendaWeeks");
    const btnMonth = document.getElementById("btnAgendaMonth");
    const weeksContainer = document.getElementById("agendaWeeksContainer");
    const monthContainer = document.getElementById("agendaMonthContainer");

    if (btnWeeks) btnWeeks.classList.toggle("active", mode === 'weeks');
    if (btnMonth) btnMonth.classList.toggle("active", mode === 'month');

    if (weeksContainer) weeksContainer.style.display = mode === 'weeks' ? 'grid' : 'none';
    if (monthContainer) monthContainer.style.display = mode === 'month' ? 'block' : 'none';
  }

  /**
   * Realce de Card ou Linha ao Clicar na Agenda de Marcos ou Calendário
   */
  function focusOnCard(id) {
    const opp = OPPORTUNITIES_DATA.find(o => o.id === id);
    if (opp) {
      // Se a categoria do card estiver filtrada, restaura a visualização completa
      if (currentFilter !== 'todas' && opp.category !== currentFilter) {
        currentFilter = 'todas';
        updateFilterButtons();
        renderOpportunities();
      }
      // Se houver busca ativa que oculte o card, limpa o campo
      if (searchQuery) {
        searchQuery = '';
        const searchInput = document.getElementById("searchInput");
        if (searchInput) searchInput.value = '';
        renderOpportunities();
      }
    }

    setTimeout(() => {
      const target = currentViewMode === 'cards' 
        ? document.getElementById(`card-${id}`) 
        : document.getElementById(`row-${id}`);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("card-highlight-glow");
        setTimeout(() => {
          target.classList.remove("card-highlight-glow");
        }, 2200);
      }
    }, 60);
  }

  /**
   * Inicialização e Listeners
   */
  function init() {
    renderOpportunities();
    renderLettersSection();

    // Alternador de Visualização da Agenda (Semanas vs Calendário)
    const btnAgendaWeeks = document.getElementById("btnAgendaWeeks");
    const btnAgendaMonth = document.getElementById("btnAgendaMonth");
    if (btnAgendaWeeks) {
      btnAgendaWeeks.addEventListener("click", () => setAgendaMode('weeks'));
    }
    if (btnAgendaMonth) {
      btnAgendaMonth.addEventListener("click", () => setAgendaMode('month'));
    }

    // Eventos da Agenda (Mini-Cards Semanais)
    document.querySelectorAll(".agenda-event-row").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        switchView("painel");
        focusOnCard(id);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const id = card.getAttribute("data-id");
          switchView("painel");
          focusOnCard(id);
        }
      });
    });

    // Eventos do Modo Calendário (Tags de Compromissos/Entregas)
    document.querySelectorAll(".cal-event-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        const id = tag.getAttribute("data-id");
        if (id) {
          switchView("painel");
          focusOnCard(id);
        }
      });
    });

    // Seletor de Modo de Visualização (Cards vs Tabela)
    const btnViewCards = document.getElementById("btnViewCards");
    const btnViewTable = document.getElementById("btnViewTable");
    if (btnViewCards) {
      btnViewCards.addEventListener("click", () => setViewMode('cards'));
    }
    if (btnViewTable) {
      btnViewTable.addEventListener("click", () => setViewMode('table'));
    }

    // Filtros por Botões Pills
    document.querySelectorAll(".filter-pill-dark").forEach(btn => {
      btn.addEventListener("click", () => {
        currentFilter = btn.getAttribute("data-filter");
        updateFilterButtons();
        renderOpportunities();
      });
    });

    // Busca Instantânea
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderOpportunities();
      });
    }

    // Abas de Navegação (3 Abas)
    const tabPainel = document.getElementById("tabPainel");
    const tabEquipe = document.getElementById("tabEquipe");
    const tabLetters = document.getElementById("tabLetters");
    if (tabPainel) tabPainel.addEventListener("click", () => switchView("painel"));
    if (tabEquipe) tabEquipe.addEventListener("click", () => switchView("equipe"));
    if (tabLetters) tabLetters.addEventListener("click", () => switchView("cartas"));

    // Modais
    document.querySelectorAll(".modal-close-x, .modal-close-btn").forEach(btn => {
      btn.addEventListener("click", closeModals);
    });

    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModals();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModals();
    });

    // Modal de Governança (Botão no Cabeçalho)
    const btnGovInfo = document.getElementById("btnGovInfo");
    const govModal = document.getElementById("govInfoModal");
    if (btnGovInfo && govModal) {
      btnGovInfo.addEventListener("click", () => {
        govModal.classList.add("active");
      });
    }

    // Exportar PDF / Imprimir
    const btnPrint = document.getElementById("btnPrint");
    if (btnPrint) {
      btnPrint.addEventListener("click", () => {
        window.print();
      });
    }

    console.log(
      "%cLIA UFSCar · Painel Estratégico de Oportunidades Ativo\n" +
      "Processo Seletivo Novos Founders · Marcos Wolfgang\n" +
      "Matriz de Equipe (6 Membros) · Modo Cards & Modo Tabela · Zero Emojis",
      "color: #38bdf8; font-weight: bold; font-size: 12px;"
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
