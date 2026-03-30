<script lang="ts">
  import { onMount } from 'svelte';
  import { fadeIn } from '$lib/utils/animations';

  interface TabData {
    num: string;
    title: string;
    desc: string;
    items: string[];
    placeholderLabel: string;
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
      placeholderLabel: 'Vídeo · Territori intel·ligent',
    },
    {
      num: '02',
      title: 'Serveis digitals',
      desc: `Treballem per activar noves capacitats digitals per a empreses i institucions, amb infraestructures i serveis que reforcin l'autonomia tecnològica del territori.`,
      items: [
        'Infraestructura de connectivitat',
        'Serveis cloud territorials',
        'Transformació digital d\'empreses',
        'Interoperabilitat de sistemes',
      ],
      placeholderLabel: 'Vídeo · Serveis digitals',
    },
    {
      num: '03',
      title: 'Innovació',
      desc: 'Promovem col·laboracions, projectes pilot i iniciatives que ajudin a portar idees amb potencial cap a aplicacions reals.',
      items: [
        'Projectes pilot amb empreses',
        'Col·laboració universitat-empresa',
        'Transferència tecnològica',
        'Ecosistema d\'innovació oberta',
      ],
      placeholderLabel: 'Vídeo · Innovació',
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
      placeholderLabel: 'Vídeo · Formació',
    },
  ];

  let activeTab = $state(0);
  let transitioning = $state(false);

  function switchTab(index: number) {
    if (index === activeTab || transitioning) return;
    transitioning = true;
    setTimeout(() => {
      activeTab = index;
      transitioning = false;
    }, 200);
  }
</script>

<section class="linies-section" id="linies" use:fadeIn={{ delay: 0 }}>
  <div class="container">

    <!-- Header -->
    <div class="section-header">
      <p class="eyebrow">Línies estratègiques</p>
      <h2 class="section-h2">Quatre línies per transformar el territori</h2>
    </div>

    <!-- Tab navigation -->
    <div class="tab-nav" role="tablist" aria-label="Línies estratègiques">
      {#each tabs as tab, i}
        <button
          class="tab-btn"
          class:active={activeTab === i}
          role="tab"
          aria-selected={activeTab === i}
          aria-controls="tab-panel-{i}"
          id="tab-{i}"
          onclick={() => switchTab(i)}
        >
          <span class="tab-num">{tab.num} ·&nbsp;</span>{tab.title}
        </button>
      {/each}
    </div>

    <!-- Tab content -->
    <div
      class="tab-content"
      class:transitioning
      id="tab-panel-{activeTab}"
      role="tabpanel"
      aria-labelledby="tab-{activeTab}"
    >
      <!-- Left column -->
      <div class="tab-left">
        <h3 class="tab-title">{tabs[activeTab].title}</h3>

        <p class="tab-desc">{tabs[activeTab].desc}</p>

        <ul class="tab-items" aria-label="Capacitats">
          {#each tabs[activeTab].items as item}
            <li class="tab-item">
              <span class="item-dash" aria-hidden="true"></span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Right column — video placeholder -->
      <div class="tab-visual" aria-hidden="true">
        <!-- VIDEO_PLACEHOLDER: substituir per
        <video autoplay muted loop playsinline
        style="position:absolute;inset:0;
        width:100%;height:100%;object-fit:cover">
        <source src="URL_DEL_VIDEO" type="video/mp4">
        </video> -->
        <span class="visual-label">{tabs[activeTab].placeholderLabel}</span>
      </div>
    </div>

  </div>
</section>

<style>
  /* ── Section ── */
  .linies-section {
    background: #07111F;
    padding: clamp(100px, 14vh, 160px) 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 48px);
  }

  /* ── Header ── */
  .section-header {
    margin-bottom: 0;
  }

  .eyebrow {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #7DB2FF;
    margin-bottom: 20px;
  }

  .section-h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: clamp(2.25rem, 4.5vw, 3.5rem);
    color: #F8FBFF;
    line-height: 1.08;
    max-width: 600px;
    margin-bottom: clamp(48px, 8vh, 80px);
  }

  /* ── Tab navigation ── */
  .tab-nav {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .tab-nav::-webkit-scrollbar {
    display: none;
  }

  .tab-btn {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
    padding: 14px 28px;
    white-space: nowrap;
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    cursor: pointer;
    transition: color 200ms ease, border-color 200ms ease;
    margin-bottom: -1px;
    line-height: 1;
  }

  .tab-btn:hover {
    color: rgba(255, 255, 255, 0.75);
  }

  .tab-btn.active {
    color: #F8FBFF;
    border-bottom-color: #7DB2FF;
  }

  .tab-num {
    opacity: 0.4;
  }

  /* ── Tab content ── */
  .tab-content {
    display: grid;
    grid-template-columns: 55fr 45fr;
    gap: 80px;
    padding-top: 56px;
    opacity: 1;
    transition: opacity 200ms ease;
  }

  .tab-content.transitioning {
    opacity: 0;
  }

  /* ── Left column ── */
  .tab-title {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: clamp(1.75rem, 3.5vw, 2.75rem);
    color: #F8FBFF;
    line-height: 1.1;
    margin-bottom: 24px;
  }

  .tab-desc {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: clamp(0.9375rem, 1.6vw, 1.0625rem);
    color: rgba(248, 251, 255, 0.65);
    line-height: 1.75;
    max-width: 480px;
    margin-bottom: 40px;
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
    font-size: 14px;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 10px;
  }

  .item-dash {
    display: block;
    width: 16px;
    height: 1px;
    background: #7DB2FF;
    flex-shrink: 0;
  }

  /* ── Right column — visual placeholder ── */
  .tab-visual {
    height: 360px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: #0C1A2E;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: start;
  }

  .visual-label {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.2);
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .tab-content {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .tab-visual {
      height: 220px;
    }
  }
</style>
