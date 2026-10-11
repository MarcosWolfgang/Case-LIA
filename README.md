# LIA UFSCar · Painel Estratégico de Oportunidades & Governança

Documentação oficial da solução desenvolvida para a dinâmica prática do Processo Seletivo Novos Founders 2026 da Liga de Inteligência Artificial da UFSCar (LIA UFSCar).

---

## 1. Identificação

- **Candidato:** Marcos Wolfgang
- **Processo Seletivo:** Novos Founders 2026
- **Área de Interesse:** Relações Institucionais & Growth
- **Instituição:** LIA UFSCar (Universidade Federal de São Carlos)

---

## 2. Finalidade da Solução

O **Painel Estratégico de Oportunidades & Governança** é uma aplicação web executiva projetada para solucionar integralmente os desafios de tomada de decisão, gestão de capacidade e relacionamento institucional apresentados no case prático da LIA UFSCar.

### Pilares Estratégicos da Solução

1. **Gestão Cronológica das 6 Organizações:**
   - Acompanhamento unificado das oportunidades: Meridian Estratégia, Senda Patrimonial, Violeta Financeira, Brava Consultoria, Prisma Estratégica e Aerion Sistemas Aeroespaciais.
   - Ordenação rigorosa por proximidade de vencimento (a partir de 01/10/2026), garantindo clareza operacional para os primeiros dias do ciclo.

2. **Matriz de Capacidade da Equipe (6 Membros · 10h a 14h/semana):**
   - Mapeamento transparente da dedicação de cada um dos 6 integrantes da Liga (Membros 1 a 6), assegurando equilíbrio de carga horária entre 10h e 14h semanais.
   - Aplicação da diretriz de teto de no máximo duas frentes simultâneas por membro, prevenindo sobrecargas e blindando o desempenho acadêmico na UFSCar.

3. **Protocolo de Blindagem para Reuniões Externas:**
   - Regra estrita de presença de no máximo 2 integrantes por reunião externa ou call de alinhamento institucional.
   - Blindagem do time técnico para que os desenvolvedores mantenham foco em entregas de código, enquanto a liderança de RI e Operações assume os pontos focais externos.

4. **Conversão Consciente de Pipeline (4 em 2026 e 2 em 2027):**
   - **4 Frentes Ativas em 2026:**
     - *Senda Patrimonial:* Piloto técnico de 4 semanas em busca interna com dados sintéticos/higienizados (foco técnico único da Liga).
     - *Meridian Estratégia:* Oficina presencial prática de 1 manhã com delegação de 4 membros (sem demanda de software posterior).
     - *Brava Consultoria:* Formação metodológica de 6 semanas com 2 multiplicadores internos.
     - *Violeta Financeira:* Call institucional de 30 min e aula remota de UX com alumni.
   - **2 Frentes Qualificadas para 2027:**
     - *Prisma Estratégica:* Envio de deck institucional até 15/10 e construção de canal institucional de longo prazo, declinando formalmente da competição concorrente de novembro.
     - *Aerion Aeroespacial:* Manifesto e checklist técnico até 16/10 para visita técnica exploratória em nov/2026, qualificando um projeto robusto de 5 meses para o 1º semestre de 2027.
   - Cumprimento integral da Regra de Ouro: teto de 1 único projeto técnico em desenvolvimento simultâneo no ciclo.

5. **Central de Cartas Institucionais Prontas:**
   - Redação formal completa das 6 mensagens direcionadas a cada tomador de decisão, assinadas padronizadamente por "Marcos Wolfgang | Founder | LIA UFSCar", com pontuação natural, sem travessões e com funcionalidade de cópia rápida em 1 clique.

---

## 3. Instruções para Abrir e Testar a Aplicação

A solução foi projetada sob arquitetura 100% nativa (Zero Build / Zero Dependencies), funcionando de maneira autônoma e imediata a partir de qualquer sistema operacional.

### Passo a Passo de Execução

1. Abra a pasta raiz do projeto (`Case-LIA/`).
2. Localize o arquivo `index.html`.
3. Dê **dois cliques** sobre o arquivo ou clique com o botão direito e selecione **"Abrir com"** em qualquer navegador moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, Brave).
4. A aplicação inicializará instantaneamente via protocolo local (`file:///`), sem necessidade de instalar Node.js, Python, npm, Git, extensões ou inicializar servidores locais.

---

## 4. Guia de Navegação da Interface

A interface adota paleta escura sóbria (slate/grafite corporativo), tipografia legível de alto contraste e layout contido sem vazamentos horizontais:

### 4.1. Cabeçalho Executivo & Indicadores (KPIs)
- **Contexto Superior:** Informações essenciais da semana base (28/09/2026), capacidade ativa da Liga (6 membros) e premissa de 1 projeto técnico simultâneo.
- **Botões do Topo:** Acesso rápido ao modal de Diretrizes de Governança e botão para exportação/impressão em PDF executivo.
- **Indicadores Chave:** Cards de monitoramento em tempo real da Taxa de Alocação Efetiva (100%), Aderência aos Prazos (100%) e Pipeline Convertido (66,7% ativo em 2026).

### 4.2. Agenda de Prazos — Outubro 2026 (Alternador Duplo)
- **Modo Semanas (Padrão):**
  - Exibe 3 colunas semanais organizadas cronologicamente (Semana 1: Vence Esta Semana, Semana 2: Alinhamentos & Formação, Semana 3: Institucional).
  - Destaque sutil de urgência para as entregas de 01/10 (Meridian) e 02/10 (Senda).
- **Modo Calendário:**
  - Grade clássica mensal completa cobrindo os 31 dias de Outubro de 2026 (5 semanas de Segunda a Domingo).
  - Identificação clara de compromissos com tags interativas, feriado nacional de 12/10, fins de semana e a evidenciação das **Janelas Livres / Capacidade Disponível** da equipe.
  - Clicar em qualquer tag de evento no calendário rola a página suavemente e realça com brilho sutil o cartão correspondente no painel.

### 4.3. Aba 1 · Painel de Oportunidades
- **Alternador de Visualização:** Permite alternar entre **Modo Cards** e **Modo Tabela Executiva**.
- **Cards Estruturados:** Cada cartão apresenta estritamente 4 tópicos padronizados:
  1. *Decisão Estratégica*
  2. *Alocação da Equipe*
  3. *Próxima Ação & Prazo*
  4. *Condição Inegociável / Pendência*
- **Filtros por Pílulas:** Filtragem instantânea por nível de decisão (Todas, Assumir Agora, Contraproposta, Construir Canal).
- **Busca em Tempo Real:** Filtro textual dinâmico por organização, setor, responsável ou palavra-chave.

### 4.4. Aba 2 · Plano de Equipe & Governança
- **Diretrizes de Sustentação:** Linha executiva sintetizando o teto de 2 frentes por membro, máximo de 2 pessoas em reuniões externas e 1 projeto técnico único.
- **Tabela 1 (Alocação Individual dos 6 Membros):** Detalhamento de papel, frentes ativas, carga horária estimada (10h-12h ou 12h-14h/sem), entregas prioritárias e status de carga 100% balanceada.
- **Tabela 2 (Matriz de Presença em Reuniões e Eventos):** Relação nominal de presença por organização, formato de encontro e justificativa de blindagem institucional.

### 4.5. Aba 3 · Central de Cartas Institucionais
- **Menu Lateral:** Seleção rápida entre as 6 cartas numeradas por ordem de vencimento.
- **Visualizador:** Exibição do destinatário, assunto formal e texto na íntegra.
- **Copiar Mensagem:** Botão de cópia direta para a área de transferência com toast de confirmação.

---

## 5. Tecnologias Utilizadas

- **HTML5:** Estrutura semântica, acessibilidade e elementos padronizados (sem dependências externas).
- **CSS3 Vanilla:** Design system corporativo desenvolvido sob medida, tokens de cores em variáveis CSS, responsividade nativa (CSS Grid e Flexbox), animações e contenção estrita de layout.
- **JavaScript Vanilla (ES6+):** Programação funcional modular, manipulação nativa do DOM, persistência de estados de filtro/visualização, navegação reativa e suporte a clipboard em protocolo local.
- **Ambiente de Desenvolvimento:** Desenvolvido com auxílio de IA no **Google Antigravity IDE**.

---

## 6. Resumo das Decisões Estratégicas do Case

| Organização | Prazo | Decisão Estratégica | Alocação da Equipe | Status / Destino |
| :--- | :---: | :--- | :--- | :---: |
| **Meridian Estratégia** | 01/10 | Confirmar oficina presencial de 1 manhã com consultores | 4 membros presenciais (Org: Membros 1 e 3) | Ativa 2026 |
| **Senda Patrimonial** | 02/10 | Executar piloto de 4 semanas de busca interna e palestra | 2 membros dedicados (Membro 1 · Ops e Membro 2 · Dev) | Ativa 2026 (Técnico) |
| **Violeta Financeira** | 05/10 | Call de 30 min com alumni e aula remota de UX | 1 membro institucional (Membro 5 · RI com apoio Membro 2) | Ativa 2026 (Janela 2027) |
| **Brava Consultoria** | 07/10 | Formação metodológica de 6 semanas com turma reduzida | 2 membros na mentoria (Membros 3 e 4 multiplicam) | Ativa 2026 (Formação) |
| **Prisma Estratégica** | 15/10 | Call de 20 min e envio de deck; declinar do desafio | 1 membro institucional (Membro 5 · RI e Membro 6 · Deck) | Canal 2027 |
| **Aerion Aeroespacial** | 16/10 | Checklist técnico e visita exploratória à fábrica em nov | 1 membro de growth (Membro 6 · Checklist técnico) | Visita 2026 (Projeto 2027) |
