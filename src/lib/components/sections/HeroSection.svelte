<script lang="ts">
  import { onMount } from 'svelte';

  let sectionEl = $state<HTMLElement | null>(null);
  let videoEl = $state<HTMLVideoElement | null>(null);

  const words = ['Tecnologia', 'per', 'transformar', 'el', 'Pirineu'];

  const navLinks = [
    { label: 'Projectes', href: '#projectes' },
    { label: 'Línies', href: '#linies' },
    { label: 'Novetats', href: '#novetats' },
    { label: 'Qui som', href: '#el-projecte' },
  ];

  onMount(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const eyebrow = sectionEl?.querySelector<HTMLElement>('.eyebrow-badge');
    const wordEls = sectionEl?.querySelectorAll<HTMLElement>('.word') ?? [];
    const navPill = sectionEl?.querySelector<HTMLElement>('.nav-pill');
    const subtitle = sectionEl?.querySelector<HTMLElement>('.subtitle');

    if (prefersReduced) {
      [eyebrow, ...Array.from(wordEls), navPill, subtitle].forEach((el) => {
        if (!el) return;
        el.style.transition = 'none';
        el.classList.add('revealed');
      });
      return;
    }

    // Eyebrow: delay 100ms
    setTimeout(() => eyebrow?.classList.add('revealed'), 100);

    // Words: 300ms initial + 120ms stagger
    wordEls.forEach((el, i) => {
      setTimeout(() => el.classList.add('revealed'), 300 + i * 120);
    });

    // Subtitle: delay 800ms
    setTimeout(() => subtitle?.classList.add('revealed'), 800);

    // Nav pill: delay 900ms
    setTimeout(() => navPill?.classList.add('revealed'), 900);
  });

  function handleVideoEnded() {
    if (videoEl) {
      videoEl.style.transition = 'opacity 3000ms ease-out';
      videoEl.style.opacity = '0.85';
    }
  }
</script>

<section class="hero-section" id="inici" bind:this={sectionEl}>

  <!-- Fallback per prefers-reduced-motion -->
  <div class="motion-fallback" aria-hidden="true"></div>

  <!-- Vídeo fullscreen (una sola reproducció) -->
  <!-- svelte-ignore a11y_media_has_caption -->
  <video
    bind:this={videoEl}
    class="video-el video-visible"
    src="https://media.weavy.ai/video/upload/uploads/B3na8rRU3iOFlkcmlQ9fqSIdPa12/s6lwqqjcw3sdmx7ohrak.mp4"
    autoplay
    muted
    playsinline
    preload="auto"
    onended={handleVideoEnded}
    aria-hidden="true"
  ></video>

  <!-- Contingut ancorat a la part inferior -->
  <div class="content">

    <!-- Eyebrow badge glassmorphism -->
    <span class="eyebrow-badge">
      Alt Pirineu i Aran
    </span>

    <!-- H1 — variable font word reveal -->
    <h1 class="hero-h1" aria-label="Tecnologia per transformar el Pirineu">
      {#each words as word, i}
        <span class="word">{word}</span>{#if i < words.length - 1}<span class="word-space" aria-hidden="true"> </span>{/if}
      {/each}
    </h1>

    <!-- Nav links pill glassmorphism -->
    <nav class="nav-pill" aria-label="Navegació hero">
      {#each navLinks as link, i}
        <a href={link.href} class="nav-link">{link.label}</a>
        {#if i < navLinks.length - 1}
          <span class="nav-sep" aria-hidden="true">/</span>
        {/if}
      {/each}
    </nav>

  </div>

  <!-- Subtítol fix al fons -->
  <p class="subtitle">
    Pirineu Tech impulsa projectes, infraestructures i aliances per construir
    un territori més connectat i resilient.
  </p>

</section>

<style>
  /* ── Contenidor ── */
  .hero-section {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #07111F;
  }

  /* ── Vídeo ── */
  .video-el {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    z-index: 0;
    opacity: 0;
    transition: opacity 1000ms ease-out;
  }

  .video-el.video-visible {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .video-el {
      display: none;
    }
    .motion-fallback {
      display: block !important;
    }
  }

  /* ── Fallback gradient (reduced-motion) ── */
  .motion-fallback {
    display: none;
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: #07111F;
    background-image:
      radial-gradient(ellipse 80% 70% at 50% -5%, #122743 0%, transparent 65%),
      radial-gradient(ellipse 50% 50% at 15% 85%, #0C1A2E 0%, transparent 60%),
      radial-gradient(ellipse 40% 40% at 50% 30%, rgba(125, 178, 255, 0.08) 0%, transparent 70%);
  }

  /* ── Contingut ancorat a baix ── */
  .content {
    position: absolute;
    inset: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    padding: clamp(40px, 6vw, 100px);
    padding-bottom: clamp(120px, 18vh, 200px);
  }

  /* ── Eyebrow badge glassmorphism ── */
  .eyebrow-badge {
    display: inline-flex;
    align-items: center;
    padding: 6px 14px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(248, 251, 255, 0.70);
    margin-bottom: 20px;
    /* initial hidden state */
    opacity: 0;
    filter: blur(16px);
    transition:
      opacity 600ms ease-out,
      filter 600ms ease-out;
  }

  .eyebrow-badge:global(.revealed) {
    opacity: 1;
    filter: blur(0px);
  }

  /* ── H1 container ── */
  .hero-h1 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(2.375rem, 5vw, 4.25rem);
    color: #F8FBFF;
    line-height: 1.08;
    max-width: 820px;
    letter-spacing: -0.01em;
    margin-bottom: 0;
    /* Reset font-weight — controlled per word span */
    font-weight: inherit;
  }

  /* ── Word spans — variable font reveal ── */
  .word {
    display: inline-block;
    opacity: 0;
    filter: blur(16px);
    font-weight: 100;
    transition:
      opacity 700ms ease-out,
      filter 700ms ease-out,
      font-weight 700ms ease-out;
  }

  .word:global(.revealed) {
    opacity: 1;
    filter: blur(0px);
    font-weight: 700;
  }

  .word-space {
    display: inline-block;
    width: 0.25em;
  }

  /* ── Nav pill glassmorphism ── */
  .nav-pill {
    display: inline-flex;
    align-items: center;
    gap: 0;
    padding: 10px 20px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    margin-top: 28px;
    /* initial hidden state */
    opacity: 0;
    transition: opacity 600ms ease-out;
  }

  .nav-pill:global(.revealed) {
    opacity: 1;
  }

  .nav-link {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 200ms ease;
    padding: 0 14px;
  }

  .nav-link:hover {
    color: rgba(255, 255, 255, 1);
  }

  .nav-sep {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.2);
    user-select: none;
  }

  /* ── Subtítol fix al fons ── */
  .subtitle {
    position: absolute;
    bottom: clamp(32px, 5vh, 56px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: rgba(248, 251, 255, 0.45);
    max-width: 480px;
    text-align: center;
    line-height: 1.6;
    white-space: nowrap;
    /* initial hidden state */
    opacity: 0;
    filter: blur(16px);
    transition:
      opacity 800ms ease-out,
      filter 800ms ease-out;
  }

  .subtitle:global(.revealed) {
    opacity: 1;
    filter: blur(0px);
  }
</style>
