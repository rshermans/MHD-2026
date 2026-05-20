/* -------------------------------------------------------------
 * MOTOR DE INTERAÇÃO & LÓGICA DA APRESENTAÇÃO — MHD 2026
 * ------------------------------------------------------------- */

// DATASET DOS PROJETOS (Linhagem de Desenvolvimento e Dashboard corrigidos)
const projectsData = {
  1: {
    id: 1,
    title: "RELIA (Mestrado)",
    tag: "Tese de Mestrado — Origem",
    badgeClass: "badge-primary",
    url: "https://reliia.streamlit.app/",
    color: "var(--color-relia)",
    desc: "A semente do ecossistema. Nasceu na intersecção da Filosofia, Humanidades Digitais e Linguística Aplicada, desenhando um roteiro de leitura empático apoiado por inteligência artificial.",
    pedagogy: "Leitura literária crítica, mediação pedagógica ativa e percursos empáticos de acompanhamento cognitivo.",
    tech: "Python, Streamlit, LLM Generativo (GPT-3.5/Gemini API), Engenharia de Prompts Contextualizados.",
    impact: "Tese pioneira em Humanidades Digitais que abriu caminho para financiamento científico avançado da FCT.",
    imageFallback: "stitch_ecossistemas_de_media_o_inteligente/image.png_1/screen.png"
  },
  2: {
    id: 2,
    title: "Truecheck",
    tag: "Parceria Nato4school",
    badgeClass: "badge-secondary",
    url: "https://truecheck-fakenews.netlify.app/",
    color: "var(--color-truecheck)",
    desc: "Combate à desinformação através da educação mediada por tecnologia. Transição crítica do modelo concetual para uma aplicação full-stack de alta disponibilidade.",
    pedagogy: "Fact-checking humano, análise de vieses cognitivos, literacia de informação digital e desenvolvimento do pensamento crítico.",
    tech: "Frontend em React (HTML5/CSS3), Backend Node.js/Express, Base de Dados, LLM com Guardrails éticos no processamento de consultas.",
    impact: "Desenvolvimento integral de ponta a ponta (front-to-back), configuração de infraestrutura resiliente para múltiplos utilizadores concorrentes.",
    imageFallback: "stitch_ecossistemas_de_media_o_inteligente/image.png_2/screen.png"
  },
  3: {
    id: 3,
    title: "Q-Colector",
    tag: "Fundamentos da Medicina II",
    badgeClass: "badge-secondary",
    url: "https://q-colector.netlify.app/",
    color: "var(--color-qcolector)",
    desc: "Ecossistema cocriado com alunos de medicina para envolver e potenciar o estudo autónomo na preparação de exames altamente exigentes.",
    pedagogy: "Aprendizagem ativa via curadoria de perguntas (testing effect), peer-learning e gamificação de autoteste.",
    tech: "Next.js, base de dados para submissões de grupos, validação automática de consistência de enunciados de escolha múltipla via IA.",
    impact: "Envolvimento direto e massivo dos estudantes na criação e validação do repositório de questões de Microbiologia e Infecção.",
    imageFallback: "stitch_ecossistemas_de_media_o_inteligente/image.png_6/screen.png"
  },
  4: {
    id: 4,
    title: "IBL (PHD4MOZ)",
    tag: "Escrita Académica com IA",
    badgeClass: "badge-primary",
    url: "https://appframework-ibl.netlify.app/",
    color: "var(--color-ibl)",
    desc: "Formação avançada e ecossistema de apoio à escrita de teses. Implementa uma abordagem metodológica estruturada que atua como copiloto do investigador.",
    pedagogy: "Framework IBL (Inquiry-Based Learning - Aprendizagem Baseada na Investigação) da Professora Sílvia para estruturação de projetos de raiz.",
    tech: "Assistente inteligente contextualizado integrado no fluxo de trabalho que garante o cumprimento de guardrails de rigor metodológico.",
    impact: "Salto dinâmico e qualitativo no arranque da investigação académica, mantendo o cientista no controlo e a IA na condução estrutural.",
    imageFallback: "stitch_ecossistemas_de_media_o_inteligente/image.png_5/screen.png"
  },
  5: {
    id: 5,
    title: "RELIA-FCT (Projeto)",
    tag: "Investigação & Escolas de Braga",
    badgeClass: "badge-primary",
    url: "https://projetorelia.netlify.app/",
    color: "var(--color-reliafct)",
    desc: "Refinamento e maturidade do RELIA num percurso de quase 1 ano. Ultrapassou restrições orçamentais severas com soluções inovadoras de engenharia de automação em backoffice.",
    pedagogy: "Integração da Taxonomia Webb (Profundidade de Conhecimento - DOK) e Taxonomia de Bloom na gamificação de questões de exames nacionais.",
    tech: "Prompts híbridos para excertos lógicos de texto, geração automática em lote de imagens ilustrativas, podcasts e vídeos educativos.",
    impact: "Experiência prática testada com sucesso em duas escolas secundárias de Braga, elevando o nível de excelência pedagógica com IA.",
    imageFallback: "stitch_ecossistemas_de_media_o_inteligente/image.png_3/screen.png"
  },
  6: {
    id: 6,
    title: "TECMINHO",
    tag: "Engajamento & Marketing Digital",
    badgeClass: "badge-secondary",
    url: "https://pdwsite.netlify.app/pt",
    color: "var(--color-pdw)",
    desc: "Sprint de 2 meses orientado a gerar conhecimento, engajamento e captação orgânica para o ecossistema educativo e o produto PDW.",
    pedagogy: "Micro-learning nas redes sociais (LinkedIn, Instagram, WhatsApp), curadoria de conhecimento aplicável de forma rápida.",
    tech: "Desenvolvimento do website otimizado, funil de conversão nas redes, criação automatizada de conteúdos educativos dinâmicos.",
    impact: "Engajamento ampliado com audiências estratégicas, criação do website institucional e posicionamento de marca profissional.",
    imageFallback: "stitch_ecossistemas_de_media_o_inteligente/image.png_4/screen.png"
  },
  7: {
    id: 7,
    title: "Aplicação RELIA",
    tag: "Plataforma CEHUM — Produção",
    badgeClass: "badge-primary",
    url: "https://relia.cehum.elach.uminho.pt/login",
    color: "var(--color-reliaapp)",
    desc: "A plataforma RELIA em ambiente de produção, hospedada no Centro de Estudos Humanísticos da Universidade do Minho (CEHUM). Representa a materialização institucional do ecossistema de leitura inteligente.",
    pedagogy: "Leitura literária assistida por IA com percursos de aprendizagem personalizados, gamificação com Taxonomia de Webb e acompanhamento empático do leitor.",
    tech: "Plataforma web fullstack em produção, autenticação de utilizadores, integração com infraestrutura CEHUM/ELACH da Universidade do Minho.",
    impact: "Validação institucional do projeto RELIA como ferramenta de uso real em contexto académico e investigativo na Universidade do Minho.",
    imageFallback: "stitch_ecossistemas_de_media_o_inteligente/image.png_3/screen.png",
    credentials: {
      email: "001@email.com",
      password: "001@email.coM"
    }
  }
};

// DATASET DE FALA — MODO DO APRESENTADOR (SPEECH NOTES)
const speechNotes = {
  1: {
    notes: `“Estimada audiência, colegas e professores, é com enorme entusiasmo que vos apresento o meu percurso de investigação sob o tema: 'Criação de Ecossistema de Aprendizagem na intersecção das Humanidades com o Digital'.

    O meu nome é Rômulo Sherman e o meu percurso não se foca apenas no desenvolvimento de software ou na teoria pura das humanidades, mas sim em como a tecnologia digital e a inteligência artificial podem atuar como mediadoras empáticas do conhecimento humano.
    
    Tudo começou com o projeto RELIA, a minha tese de mestrado que se transformou num projeto de investigação financiado pela FCT. A partir daí, esta viagem académica expandiu-se numa rede de ecossistemas educativos que hoje vos quero apresentar. Cada nó deste caminho representa uma resposta prática a um desafio real de aprendizagem.”`,
    tips: [
      "Tom de voz seguro, académico mas caloroso.",
      "Mantenha contacto visual direto com o júri/audiência.",
      "Apresente-se claramente como Rômulo Sherman."
    ]
  },
  2: {
    notes: `“Olhemos agora para o nosso Linemapa — a evolução conceptual e prática deste ecossistema.

    1. O RELIA original (Mestrado) provou que era possível dialogar com a literatura através de IA.
    
    2. No Truecheck, em parceria com a Nato4school, subimos a fasquia técnica: construímos uma aplicação completa (front e backend) para literacia mediática e fact-checking, implementando LLM com guardrails estritos para combater fake news com segurança.
    
    3. No Q-Colector (Medicine II), criámos um ecossistema cocriado com alunos para envolver e potenciar o estudo autónomo na preparação de exames altamente exigentes de Microbiologia e Infecção.
    
    4. No projeto IBL (PHD4MOZ), criámos uma ferramenta de Escrita Académica baseada no framework IBL (Inquiry-Based Learning) da Profa. Sílvia, onde um assistente de IA acompanha de perto e estrutura todo o percurso de pesquisa do investigador.
    
    5. Com o RELIA-FCT, enfrentámos o desafio de escalar durante 1 ano com orçamento reduzido. A solução? Automação inteligente do backoffice: prompts estruturados para criar excertos lógicos de texto, podcasts educativos e vídeos automáticos. Mais importante: elevámos a dinâmica pedagógica ao introduzir a Taxonomia de Webb (DOK) e de Bloom nas questões e gamificação, testadas com sucesso em duas escolas de Braga.
    
    6. Na TECMINHO, atacamos o marketing educacional digital (LinkedIn, Instagram, WhatsApp) em torno do PDW, criando o website que hoje partilho convosco.
    
    7. E finalmente, como coroação institucional de todo este percurso, a Aplicação RELIA em produção no CEHUM — a materialização oficial do ecossistema de leitura inteligente na Universidade do Minho, que podem experimentar hoje.”`,
    tips: [
      "Não acelere a fala. Faça uma breve pausa ao passar por cada projeto no timeline.",
      "Enfatize Braga e a Medicina II como validações de alto impacto real.",
      "Lembre-se da articulação entre a Taxonomia de Webb e de Bloom."
    ]
  },
  3: {
    notes: `“Mas as Humanidades Digitais não se realizam apenas no papel ou em relatórios. Elas manifestam-se em plataformas tangíveis e funcionais.
    
    Criei para esta apresentação um Dashboard Interativo — um ambiente de trabalho que serve de repositório vivo das aplicações que desenvolvi e implementei.
    
    Temos à vossa disposição o RELIA, o Truecheck com a sua interface robusta de validação de dados, o ecossistema Q-Colector, a plataforma IBL do PHD4MOZ, o site do RELIA-FCT e o website da TECMINHO.
    
    Este ecossistema demonstra que é perfeitamente viável transitar da teoria pura da linguagem e da educação até ao deployment real, gestão de base de dados e integração de APIs de inteligência artificial com barreiras de proteção para uso simultâneo de utilizadores.”`,
    tips: [
      "Interaja fisicamente com o ecrã. Clique nas abas laterais do dashboard para mostrar as aplicações.",
      "Se alguma aplicação demorar a carregar por rede, clique em 'Ficha Técnica' para mostrar a arquitetura e detalhes de stack.",
      "Mostre orgulho nas soluções de engenharia implementadas."
    ]
  },
  4: {
    notes: `“Chegando ao encerramento deste percurso, o meu objetivo é olhar em frente. 
    
    Toda esta experiência acumulada no desenvolvimento de ecossistemas digitais robustos, dinâmicas de gamificação e engenharia de prompts converte-se no meu projeto de Doutoramento em Humanidades Digitais na Universidade do Minho.
    
    Proponho-me a continuar a investigar como o processamento de linguagem natural (NLP), a IA híbrida e a leitura crítica na era da desinformação se podem fundir para criar salas de aula e sociedades mais inclusivas, críticas e autónomas.
    
    Para explorar o código de todas as aplicações que viram hoje e acompanhar este desenvolvimento de investigação, convido-vos a ler o QR Code no ecrã que aponta diretamente para o repositório público do meu GitHub.
    
    Agradeço à Universidade do Minho e à Escola ELACH pela confiança e apoio contínuo.
    
    A tecnologia não deve substituir o leitor ou o estudante. Deve acompanhá-lo. Muito obrigado pelo vosso tempo. O meu nome é Rômulo Sherman.”`,
    tips: [
      "Aponte para o QR Code e o link do GitHub.",
      "Termine com firmeza na frase final: 'tecnologia acompanha o estudante, não o substitui'.",
      "Agradeça de forma humilde e profissional."
    ]
  }
};

// VARIÁVEIS DE ESTADO DA APRESENTAÇÃO
let currentSlide = 1;
const totalSlides = 4;
let activeNode = 1;
let activeApp = 1;
let isDetailsView = true;

// VARIÁVEIS DO CRONÓMETRO
let timerInterval = null;
let timerSeconds = 0;
let isTimerRunning = false;

// -------------------------------------------------------------
// 🚀 INICIALIZAÇÃO DA APRESENTAÇÃO
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar o slide inicial
  goToSlide(1);

  // Renderizar o primeiro nó da linha de tempo
  selectNode(1);

  // Configurar listeners de teclado
  document.addEventListener("keydown", handleKeyDown);

  // Registrar cliques nos indicadores
  updateControls();
});

// -------------------------------------------------------------
// 🎛️ MOTOR DE NAVEGAÇÃO DOS SLIDES
// -------------------------------------------------------------
function goToSlide(slideIndex) {
  if (slideIndex < 1 || slideIndex > totalSlides) return;

  // Limpar classes ativas e anteriores de todos os slides
  for (let i = 1; i <= totalSlides; i++) {
    const slide = document.getElementById(`slide-${i}`);
    slide.classList.remove("active", "prev");

    if (i < slideIndex) {
      slide.classList.add("prev");
    }
  }

  // Ativar o slide selecionado
  const activeSlideEl = document.getElementById(`slide-${slideIndex}`);
  activeSlideEl.classList.add("active");

  currentSlide = slideIndex;

  // Atualizar botões e bolinhas do indicador
  updateControls();

  // Sincronizar o Presenter Mode
  syncPresenterMode();

  // Carregamento inteligente de recursos pesados
  if (currentSlide === 3) {
    // Se entrou no slide do Dashboard, inicia a primeira app
    activateApp(activeApp);
  }
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    goToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 1) {
    goToSlide(currentSlide - 1);
  }
}

function updateControls() {
  // Atualizar botões de setas
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (currentSlide === 1) {
    prevBtn.style.opacity = "0.3";
    prevBtn.style.pointerEvents = "none";
  } else {
    prevBtn.style.opacity = "1";
    prevBtn.style.pointerEvents = "all";
  }

  if (currentSlide === totalSlides) {
    nextBtn.style.opacity = "0.3";
    nextBtn.style.pointerEvents = "none";
  } else {
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = "all";
  }

  // Atualizar os círculos indicadores
  const dots = document.querySelectorAll(".slide-indicator .dot-indicator");
  dots.forEach((dot, idx) => {
    if (idx + 1 === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function handleKeyDown(e) {
  // Atalhos de teclado comuns de apresentações
  if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
    e.preventDefault();
    nextSlide();
  } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
    e.preventDefault();
    prevSlide();
  } else if (e.key === "1") {
    goToSlide(1);
  } else if (e.key === "2") {
    goToSlide(2);
  } else if (e.key === "3") {
    goToSlide(3);
  } else if (e.key === "4") {
    goToSlide(4);
  } else if (e.key.toLowerCase() === "p") {
    e.preventDefault();
    togglePresenterMode();
  } else if (e.key.toLowerCase() === "t") {
    e.preventDefault();
    toggleTheme();
  }
}

// -------------------------------------------------------------
// 📍 LÓGICA DO SLIDE 2: LINEMAPA & DETALHES DE NÓS
// -------------------------------------------------------------
function selectNode(nodeIndex) {
  // Remover classe ativa de todos os nós visuais
  const nodes = document.querySelectorAll(".timeline-node");
  nodes.forEach(node => {
    node.classList.remove("active");
  });

  // Adicionar classe ativa no selecionado
  const selectedNodeEl = document.querySelector(`.timeline-node[data-node="${nodeIndex}"]`);
  if (selectedNodeEl) selectedNodeEl.classList.add("active");

  activeNode = nodeIndex;

  // Obter os dados do projeto
  const pData = projectsData[nodeIndex];
  if (!pData) return;

  // Atualizar a caixa de conteúdo
  const contentContainer = document.getElementById("node-details-content");

  contentContainer.innerHTML = `
    <!-- Coluna 1: Cabeçalho do Projeto -->
    <div class="details-column details-title-box">
      <h3>${pData.title}</h3>
      <span class="project-badge badge ${pData.badgeClass}">${pData.tag}</span>
      <div class="tag-list" style="margin-top: 15px;">
        <span class="details-tag"><i class="fa-solid fa-code-branch"></i> Ativo</span>
      </div>
    </div>
    
    <!-- Coluna 2: Conceito Pedagógico & Investigação -->
    <div class="details-column">
      <h4><i class="fa-solid fa-lightbulb" style="color: var(--color-accent)"></i> Abordagem & Pedagogia</h4>
      <p style="margin-bottom: 12px;">${pData.desc}</p>
      <p><strong>Estratégia Pedagógica:</strong> ${pData.pedagogy}</p>
    </div>
    
    <!-- Coluna 3: Stack Tecnológico & Impacto -->
    <div class="details-column">
      <h4><i class="fa-solid fa-microchip" style="color: var(--color-primary)"></i> Tecnologia & Impacto</h4>
      <p style="margin-bottom: 10px;"><strong>Stack:</strong> ${pData.tech}</p>
      <p><strong>Impacto Real:</strong> ${pData.impact}</p>
    </div>
  `;
}

// -------------------------------------------------------------
// 🖥️ LÓGICA DO SLIDE 3: OPERATING SYSTEM DASHBOARD
// -------------------------------------------------------------
function activateApp(appIndex) {
  activeApp = appIndex;
  isDetailsView = true; // Resetar para vista de detalhes (ficha técnica) por padrão

  // Atualizar estados do menu lateral
  const menuItems = document.querySelectorAll(".desktop-menu .menu-item");
  menuItems.forEach((item, idx) => {
    if (idx + 1 === appIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  const app = projectsData[appIndex];
  if (!app) return;

  // Atualizar barra de endereço
  document.getElementById("window-address").innerText = app.url;

  // Atualizar link externo
  document.getElementById("window-external-link").setAttribute("href", app.url);

  // Atualizar visualizações
  const iframeWrapper = document.getElementById("iframe-wrapper");
  const detailsWrapper = document.getElementById("details-wrapper");

  iframeWrapper.classList.remove("active");
  detailsWrapper.classList.add("active");

  // Mostrar loader no iframe
  const loader = iframeWrapper.querySelector(".iframe-loader");
  loader.style.opacity = "1";
  loader.style.pointerEvents = "all";

  // Carregar Iframe de forma assíncrona para não travar transição do slide
  const iframe = document.getElementById("app-iframe");

  // Cancelar carregamento anterior se houver
  iframe.src = "about:blank";

  // Cancelar timeout anterior de iframe
  if (window._iframeLoadTimeout) {
    clearTimeout(window._iframeLoadTimeout);
    window._iframeLoadTimeout = null;
  }

  // Renderizar Ficha Técnica (Fallback view) antecipadamente
  renderFichaTecnica(app);

  // Definir novo URL após um micro-delay
  setTimeout(() => {
    let hasLoaded = false;
    iframe.src = app.url;

    // Configurar remoção do loader ao carregar com sucesso
    iframe.onload = () => {
      hasLoaded = true;
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      if (window._iframeLoadTimeout) {
        clearTimeout(window._iframeLoadTimeout);
      }
    };

    // Fallback por erro de rede
    iframe.onerror = () => {
      if (!hasLoaded) showIframeFallback();
    };

    // Fallback por timeout — se não carrega em 10s, mostra imagem fixa
    window._iframeLoadTimeout = setTimeout(() => {
      if (!hasLoaded) showIframeFallback();
    }, 10000);
  }, 100);
}

function reloadIframe() {
  const iframe = document.getElementById("app-iframe");
  const iframeWrapper = document.getElementById("iframe-wrapper");
  const loader = iframeWrapper.querySelector(".iframe-loader");

  loader.style.opacity = "1";
  loader.style.pointerEvents = "all";

  iframe.src = iframe.src;
}

function toggleDetailsView() {
  const iframeWrapper = document.getElementById("iframe-wrapper");
  const detailsWrapper = document.getElementById("details-wrapper");

  isDetailsView = !isDetailsView;

  if (isDetailsView) {
    iframeWrapper.classList.remove("active");
    detailsWrapper.classList.add("active");
  } else {
    iframeWrapper.classList.add("active");
    detailsWrapper.classList.remove("active");
  }
}

function renderFichaTecnica(app) {
  const detailsWrapper = document.getElementById("details-wrapper");

  detailsWrapper.innerHTML = `
    <div class="fallback-grid">
      <!-- Coluna Visual -->
      <div class="fallback-visual">
        <img class="fallback-image" src="${app.imageFallback}" alt="Visual do projeto ${app.title}" onerror="handleImgError(this)">
        <div class="badge ${app.badgeClass}" style="position: absolute; bottom: 15px; left: 15px; background: rgba(13,16,23,0.85); border-color: rgba(255,255,255,0.1)">
          <i class="fa-solid fa-eye"></i> Interface da Aplicação
        </div>
      </div>
      
      <!-- Coluna Detalhes -->
      <div class="fallback-info">
        <div>
          <h4>${app.title} — Ficha Técnica</h4>
          <p class="fallback-desc">${app.desc}</p>
        </div>
        
        <table class="tech-spec-table">
          <tr>
            <td>Enquadramento</td>
            <td>${app.tag}</td>
          </tr>
          <tr>
            <td>Pedagogia</td>
            <td>${app.pedagogy}</td>
          </tr>
          <tr>
            <td>Tecnologia / IA</td>
            <td>${app.tech}</td>
          </tr>
          <tr>
            <td>Impacto Prático</td>
            <td>${app.impact}</td>
          </tr>
          <tr>
            <td>Link Direto</td>
            <td><a href="${app.url}" target="_blank" style="color: var(--color-primary); text-decoration: underline;">${app.url}</a></td>
          </tr>
          ${app.credentials ? `
          <tr>
            <td>Acesso Demo</td>
            <td>
              <button class="btn-reveal-credentials" onclick="revealCredentials(this)">
                <i class="fa-solid fa-eye"></i> Mostrar Credenciais
              </button>
              <div class="credentials-content" style="display:none;">
                <span><strong>Email:</strong> ${app.credentials.email}</span><br>
                <span><strong>Pass:</strong> ${app.credentials.password}</span>
              </div>
            </td>
          </tr>
          ` : ''}
        </table>
      </div>
    </div>
  `;
}

function handleImgError(img) {
  // Substitui imagem em falta por um elemento visual gerado em CSS
  img.style.display = "none";
  const parent = img.parentElement;

  const placeholder = document.createElement("div");
  placeholder.className = "visual-placeholder animate-pulse";
  placeholder.innerHTML = `
    <i class="fa-solid fa-code-laptop text-gradient"></i>
    <span>Interface digital — ${projectsData[activeApp].title}</span>
    <small style="color: var(--text-muted); font-size: 0.75rem;">Visite o site live clicando no botão "Abrir Nova Aba"</small>
  `;
  parent.appendChild(placeholder);
}

// -------------------------------------------------------------
// 🎙️ LÓGICA DO MODO DO APRESENTADOR (PRESENTER MODE)
// -------------------------------------------------------------
function togglePresenterMode() {
  const panel = document.getElementById("presenter-panel");
  panel.classList.toggle("active");

  // Sincronizar dados assim que abrir
  if (panel.classList.contains("active")) {
    syncPresenterMode();
    // Autoiniciar cronómetro se estiver fechado
    if (!isTimerRunning) {
      startTimer();
    }
  }
}

function syncPresenterMode() {
  const notesEl = document.getElementById("presenter-notes");
  const tipsEl = document.getElementById("presenter-tips");

  const activeNotes = speechNotes[currentSlide];
  if (!activeNotes) return;

  // Injetar Fala
  notesEl.innerHTML = activeNotes.notes;

  // Injetar Dicas
  tipsEl.innerHTML = "";
  activeNotes.tips.forEach(tip => {
    const li = document.createElement("li");
    li.innerText = tip;
    tipsEl.appendChild(li);
  });
}

/* Funções do Cronómetro */
function startTimer() {
  if (isTimerRunning) return;

  isTimerRunning = true;
  timerInterval = setInterval(() => {
    timerSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  isTimerRunning = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  pauseTimer();
  timerSeconds = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;

  const displayMin = minutes < 10 ? `0${minutes}` : minutes;
  const displaySec = seconds < 10 ? `0${seconds}` : seconds;

  const timerValEl = document.getElementById("presentation-timer");
  timerValEl.innerText = `${displayMin}:${displaySec}`;

  // Alerta Visual se passar do tempo recomendado de 7 minutos (420 segundos)
  if (timerSeconds > 420) {
    timerValEl.style.color = "#ef4444";
  } else {
    timerValEl.style.color = "var(--color-accent)";
  }
}

// -------------------------------------------------------------
// 🎨 ALTERNÂNCIA DE TEMA (LIGHT / DARK MODE)
// -------------------------------------------------------------
function toggleTheme() {
  document.body.classList.toggle("light-mode");

  // Persistir preferência
  const isLight = document.body.classList.contains("light-mode");
  localStorage.setItem("mhd-theme", isLight ? "light" : "dark");

  // Atualizar ícone do botão
  const themeIcon = document.querySelector(".btn-theme i");
  if (themeIcon) {
    themeIcon.className = isLight
      ? "fa-solid fa-moon"
      : "fa-solid fa-circle-half-stroke";
  }
}

// Carregar preferência de tema ao iniciar
(function loadThemePreference() {
  const saved = localStorage.getItem("mhd-theme");
  if (saved === "light") {
    document.body.classList.add("light-mode");
    const themeIcon = document.querySelector(".btn-theme i");
    if (themeIcon) themeIcon.className = "fa-solid fa-moon";
  }
})();

// -------------------------------------------------------------
// 🔐 REVELAR CREDENCIAIS (BOTÃO OCULTO)
// -------------------------------------------------------------
function revealCredentials(btn) {
  const credDiv = btn.nextElementSibling;
  btn.style.display = "none";
  credDiv.style.display = "block";
}

// -------------------------------------------------------------
// 🖼️ FALLBACK DE IFRAME — MOSTRAR IMAGEM FIXA
// -------------------------------------------------------------
function showIframeFallback() {
  const iframeWrapper = document.getElementById("iframe-wrapper");
  const detailsWrapper = document.getElementById("details-wrapper");

  iframeWrapper.classList.remove("active");
  detailsWrapper.classList.add("active");
  isDetailsView = true;
}
