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

  const navLinks = [
    { label: 'Projectes', href: '#projectes' },
    { label: 'Línies', href: '#linies' },
    { label: 'Novetats', href: '#novetats' },
    { label: 'Qui som', href: '#el-projecte' },
  ];
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

  <!-- Contingut centrat verticalment -->
  <div class="content">

    <!-- Eyebrow -->
    <p
      class="eyebrow anim-hero"
      class:visible={mounted}
      style="--delay: 200ms"
    >
      Alt Pirineu i Aran
    </p>

    <!-- H1 -->
    <h1
      class="hero-h1 anim-hero"
      class:visible={mounted}
      style="--delay: 350ms"
    >
      Tecnologia per transformar el Pirineu
    </h1>

    <!-- Nav links inline -->
    <nav
      class="nav-links anim-hero"
      class:visible={mounted}
      style="--delay: 500ms"
      aria-label="Navegació hero"
    >
      {#each navLinks as link, i}
        <a href={link.href} class="nav-link">{link.label}</a>
        {#if i < navLinks.length - 1}
          <span class="nav-sep" aria-hidden="true">/</span>
        {/if}
      {/each}
    </nav>

  </div>

  <!-- Subtítol fix al fons -->
  <p
    class="subtitle anim-hero"
    class:visible={mounted}
    style="--delay: 650ms"
  >
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

  /* ── Contingut centrat ── */
  .content {
    position: absolute;
    inset: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: clamp(40px, 6vw, 100px);
  }

  /* ── Eyebrow ── */
  .eyebrow {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: rgba(248, 251, 255, 0.50);
    margin-bottom: 24px;
  }

  /* ── H1 ── */
  .hero-h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(3.25rem, 7.5vw, 6rem);
    color: #F8FBFF;
    line-height: 1.0;
    max-width: 900px;
    letter-spacing: -0.02em;
    margin-bottom: 40px;
  }

  /* ── Nav links inline ── */
  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0;
  }

  .nav-link {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(248, 251, 255, 0.55);
    text-decoration: none;
    transition: color 200ms ease;
    padding: 0 14px;
  }

  .nav-link:hover {
    color: rgba(248, 251, 255, 1);
  }

  .nav-sep {
    font-size: 11px;
    color: rgba(248, 251, 255, 0.25);
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
    color: rgba(248, 251, 255, 0.55);
    max-width: 480px;
    text-align: center;
    line-height: 1.6;
    white-space: nowrap;
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

  /* El subtítol usa translateX per centrar; ajustem la classe d'animació */
  .subtitle.anim-hero {
    transform: translateX(-50%) translateY(16px);
  }

  .subtitle.anim-hero.visible {
    transform: translateX(-50%) translateY(0);
  }
</style>
