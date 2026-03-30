<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  interface TabData {
    num: string;
    title: string;
    desc: string;
    items: string[];
  }

  const tabs: TabData[] = [
    {
      num: '01',
      title: 'Territori intel·ligent',
      desc: 'Impulsem solucions tecnològiques per entendre millor el territori, anticipar necessitats i millorar la gestió de recursos i entorns complexos.',
      items: [
        'Bessó digital del territori',
        'Sensors i dades ambientals',
        'Gestió intel·ligent de recursos',
        'Modelització territorial',
      ],
    },
    {
      num: '02',
      title: 'Serveis digitals',
      desc: `Treballem per activar noves capacitats digitals per a empreses i institucions, amb infraestructures i serveis que reforcin l'autonomia tecnològica del territori.`,
      items: [
        'Infraestructura de connectivitat',
        'Serveis cloud territorials',
        "Transformació digital d'empreses",
        'Interoperabilitat de sistemes',
      ],
    },
    {
      num: '03',
      title: 'Innovació',
      desc: 'Promovem col·laboracions, projectes pilot i iniciatives que ajudin a portar idees amb potencial cap a aplicacions reals.',
      items: [
        'Projectes pilot amb empreses',
        'Col·laboració universitat-empresa',
        'Transferència tecnològica',
        "Ecosistema d'innovació oberta",
      ],
    },
    {
      num: '04',
      title: 'Formació',
      desc: 'Preparem talent en competències digitals i tecnològiques avançades per generar oportunitats professionals de qualitat al Pirineu.',
      items: [
        'Programes de capacitació digital',
        'Formació especialitzada en IA',
        'Certificacions tecnològiques',
        'Inserció laboral qualificada',
      ],
    },
  ];

  const DURATION = 6000;

  let activeTab = $state(0);
  let transitioning = $state(false);
  let prefersReduced = $state(false);
  let timer: ReturnType<typeof setInterval> | undefined;

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      transitioning = true;
      setTimeout(() => {
        activeTab = (activeTab + 1) % tabs.length;
        transitioning = false;
      }, 200);
    }, DURATION);
  }

  function handleTabClick(index: number) {
    if (index === activeTab) return;
    transitioning = true;
    clearInterval(timer);
    setTimeout(() => {
      activeTab = index;
      transitioning = false;
      startTimer();
    }, 200);
  }

  onMount(() => {
    prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) startTimer();
  });

  onDestroy(() => {
    clearInterval(timer);
  });
</script>

<section class="linies-section" id="linies" aria-label="Línies estratègiques">

  <!-- ── CAPA 0: fons per tab (z-index 0) ── -->
  {#each tabs as tab, i}
    <div class="bg-layer" class:bg-active={activeTab === i} aria-hidden="true">
      <div class="bg-placeholder">
        <!-- VIDEO_PLACEHOLDER tab{tab.num}:
        <video autoplay muted loop playsinline
          style="position:absolute;inset:0;
          width:100%;height:100%;object-fit:cover">
          <source src="URL_VIDEO" type="video/mp4">
        </video> -->
      </div>
    </div>
  {/each}

  <!-- ── CAPA 1: overlay gradient (z-index 1) ── -->
  <div class="overlay" aria-hidden="true"></div>

  <!-- ── CAPA 2: contingut editorial (z-index 10) ── -->
  <div class="content-layer">

    <!-- Header ancorat al top -->
    <div class="section-header">
      <p class="eyebrow">Línies estratègiques</p>
      <h2 class="section-h2">Quatre línies per transformar el territori</h2>
    </div>

    <!-- Bloc inferior: contingut + tabs -->
    <div class="bottom-block">

      <!-- Columna esquerra: contingut actiu -->
      <div class="left-col" class:content-visible={!transitioning}>
        <p class="deco-num" aria-hidden="true">{tabs[activeTab].num}</p>
        <h3 class="tab-title">{tabs[activeTab].title}</h3>
        <p class="tab-desc">{tabs[activeTab].desc}</p>
        <ul class="tab-items" aria-label="Capacitats de la línia activa">
          {#each tabs[activeTab].items as item}
            <li class="tab-item">
              <span class="item-dash" aria-hidden="true"></span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Columna dreta: llista de tabs -->
      <div class="right-col" role="tablist" aria-label="Selecciona una línia estratègica">
        {#each tabs as tab, i}
          <div class="tab-row-wrapper">
            <button
              class="tab-row"
              class:tab-active={activeTab === i}
              role="tab"
              aria-selected={activeTab === i}
              onclick={() => handleTabClick(i)}
            >
              <span class="tab-row-num">{tab.num}</span>
              <span class="tab-row-name">{tab.title}</span>
            </button>
            <!-- Progress bar: es recrea en cada canvi de tab, reiniciant l'animació -->
            {#if activeTab === i && !prefersReduced}
              <div class="progress-track" aria-hidden="true">
                <div class="progress-bar"></div>
              </div>
            {/if}
          </div>
        {/each}
      </div>

    </div>
  </div>

</section>

<style>
  /* ── Section ── */
  .linies-section {
    position: relative;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
    background: #07111F;
  }

  /* ── Capa 0: fons ── */
  .bg-layer {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0;
    transition: opacity 800ms ease;
  }

  .bg-layer.bg-active {
    opacity: 1;
  }

  .bg-placeholder {
    position: absolute;
    inset: 0;
    background: #0C1A2E;
  }

  /* ── Capa 1: overlay ── */
  .overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      to right,
      rgba(7, 17, 31, 0.92) 0%,
      rgba(7, 17, 31, 0.75) 45%,
      rgba(7, 17, 31, 0.25) 100%
    );
  }

  /* ── Capa 2: contingut ── */
  .content-layer {
    position: relative;
    z-index: 10;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: clamp(56px, 8vh, 96px);
  }

  /* ── Header ── */
  .section-header {
    position: absolute;
    top: clamp(80px, 10vh, 120px);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1200px;
    padding: 0 clamp(24px, 5vw, 48px);
  }

  .eyebrow {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #7DB2FF;
  }

  .section-h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: clamp(2rem, 4vw, 3.25rem);
    color: #F8FBFF;
    line-height: 1.08;
    max-width: 560px;
    margin-top: 12px;
  }

  /* ── Bloc inferior ── */
  .bottom-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: flex-end;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 48px);
    width: 100%;
  }

  /* ── Columna esquerra ── */
  .left-col {
    opacity: 0;
    transform: translateY(8px);
    transition:
      opacity 400ms ease,
      transform 400ms ease;
  }

  .left-col.content-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .deco-num {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(80px, 10vw, 120px);
    color: rgba(255, 255, 255, 0.04);
    line-height: 1;
    margin-bottom: -24px;
    user-select: none;
  }

  .tab-title {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: clamp(2rem, 4vw, 3.25rem);
    color: #F8FBFF;
    line-height: 1.06;
    margin-bottom: 20px;
  }

  .tab-desc {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    color: rgba(248, 251, 255, 0.60);
    line-height: 1.75;
    max-width: 420px;
    margin-bottom: 32px;
  }

  .tab-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tab-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.50);
    margin-bottom: 8px;
  }

  .item-dash {
    display: block;
    width: 16px;
    height: 1px;
    background: #7DB2FF;
    flex-shrink: 0;
  }

  /* ── Columna dreta: tabs ── */
  .right-col {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .tab-row-wrapper {
    width: 100%;
    position: relative;
  }

  .tab-row {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
    width: 100%;
    padding: 16px 0;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: transparent;
    cursor: pointer;
    text-align: right;
    transition: none;
  }

  .tab-row-num {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.3);
    transition: color 200ms ease;
  }

  .tab-row-name {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
    transition: color 200ms ease, font-weight 200ms ease;
  }

  .tab-row:hover .tab-row-name {
    color: rgba(255, 255, 255, 0.75);
  }

  .tab-row.tab-active .tab-row-name {
    color: #F8FBFF;
    font-weight: 600;
  }

  .tab-row.tab-active .tab-row-num {
    color: rgba(255, 255, 255, 0.5);
  }

  /* ── Progress bar ── */
  .progress-track {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .progress-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: #7DB2FF;
    animation: progress-fill 6s linear forwards;
  }

  @keyframes progress-fill {
    from { width: 0%; }
    to   { width: 100%; }
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .linies-section {
      height: auto;
      min-height: 100vh;
    }

    .content-layer {
      height: auto;
      min-height: 100vh;
      padding-bottom: clamp(48px, 8vh, 72px);
      padding-top: clamp(100px, 14vh, 140px);
    }

    .section-header {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      margin-bottom: clamp(32px, 5vh, 48px);
    }

    .bottom-block {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    /* Tabs arriba, contingut a baix en mobile */
    .right-col {
      order: -1;
      align-items: flex-start;
    }

    .tab-row {
      justify-content: flex-start;
    }

    .overlay {
      background: linear-gradient(
        to bottom,
        rgba(7, 17, 31, 0.95) 0%,
        rgba(7, 17, 31, 0.85) 60%,
        rgba(7, 17, 31, 0.80) 100%
      );
    }
  }
</style>
