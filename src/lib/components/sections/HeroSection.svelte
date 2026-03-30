<script lang="ts">
  import { onMount } from 'svelte';

  let mounted = $state(false);
  let videoEl = $state<HTMLVideoElement | null>(null);

  onMount(() => {
    requestAnimationFrame(() => {
      mounted = true;
    });
  });

  function handleVideoEnded() {
    if (videoEl) {
      videoEl.style.transition = 'opacity 3000ms ease-out';
      videoEl.style.opacity = '0.85';
    }
  }
</script>

<section class="hero-section" id="inici">

  <!-- Fallback per prefers-reduced-motion -->
  <div class="motion-fallback" aria-hidden="true"></div>

  <!-- Vídeo fullscreen (una sola reproducció) -->
  <!-- svelte-ignore a11y_media_has_caption -->
  <video
    bind:this={videoEl}
    class="video-el"
    class:video-visible={mounted}
    src="https://media.weavy.ai/video/upload/uploads/B3na8rRU3iOFlkcmlQ9fqSIdPa12/s6lwqqjcw3sdmx7ohrak.mp4"
    autoplay
    muted
    playsinline
    preload="auto"
    onended={handleVideoEnded}
    aria-hidden="true"
  ></video>

  <!-- Contingut — posicionat a baix -->
  <div class="content">

    <p
      class="eyebrow anim-hero"
      class:visible={mounted}
      style="--delay: 200ms"
    >
      Alt Pirineu i Aran
    </p>

    <h1
      class="hero-h1 anim-hero"
      class:visible={mounted}
      style="--delay: 350ms"
    >
      Tecnologia per transformar el Pirineu
    </h1>

    <p
      class="hero-subtitle anim-hero"
      class:visible={mounted}
      style="--delay: 500ms"
    >
      Pirineu Tech impulsa projectes, infraestructures i aliances per accelerar
      la innovació tecnològica a l'Alt Pirineu i Aran i construir un territori
      més connectat, intel·ligent i resilient.
    </p>

    <div
      class="ctas anim-hero"
      class:visible={mounted}
      style="--delay: 650ms"
    >
      <a href="#projectes" class="cta-primary">Descobreix els projectes</a>
      <a href="#adhesio" class="cta-ghost">Fes-te soci</a>
    </div>

    <p class="scroll-label">SCROLL</p>
  </div>

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

  /* ── Contingut ── */
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding-bottom: clamp(48px, 7vh, 80px);
    padding-left: clamp(40px, 8vw, 120px);
    padding-right: clamp(40px, 8vw, 120px);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* ── Tipografia ── */
  .eyebrow {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #7DB2FF;
  }

  .hero-h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(2.625rem, 6vw, 4.5rem);
    color: #F8FBFF;
    line-height: 1.06;
    max-width: 780px;
    margin: 16px auto 0;
  }

  .hero-subtitle {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: clamp(1rem, 1.8vw, 1.1875rem);
    color: rgba(248, 251, 255, 0.70);
    max-width: 620px;
    margin: 16px auto 0;
    line-height: 1.65;
  }

  /* ── CTAs ── */
  .ctas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 32px;
  }

  .cta-primary {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    padding: 13px 26px;
    border-radius: 6px;
    background: #7DB2FF;
    color: #07111F;
    text-decoration: none;
    transition: background-color 200ms ease;
  }

  .cta-primary:hover {
    background: #CFE2FF;
  }

  .cta-ghost {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    padding: 13px 26px;
    border-radius: 6px;
    border: 1px solid var(--border-glass);
    background: var(--glass-dark);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    color: #F8FBFF;
    text-decoration: none;
    transition: border-color 200ms ease;
  }

  .cta-ghost:hover {
    border-color: #7DB2FF;
  }

  /* ── Scroll label ── */
  .scroll-label {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 0.2em;
    color: rgba(248, 251, 255, 0.35);
    margin-top: 24px;
  }

  /* ── Animació d'entrada ── */
  .anim-hero {
    opacity: 0;
    transform: translateY(16px);
    transition:
      opacity 700ms ease-out var(--delay, 0ms),
      transform 700ms ease-out var(--delay, 0ms);
  }

  .anim-hero.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
