<script lang="ts">
  import { onMount } from 'svelte';

  let mounted = $state(false);

  onMount(() => {
    // Small rAF to ensure layout is done before triggering animations
    requestAnimationFrame(() => {
      mounted = true;
    });
  });
</script>

<section
  class="relative min-h-screen bg-dark-900 flex items-center overflow-hidden"
  id="inici"
>
  <!-- Background radial gradient -->
  <div class="hero-bg" aria-hidden="true"></div>

  <!-- Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
    <!-- Eyebrow -->
    <p
      class="font-body text-xs font-semibold uppercase tracking-widest text-accent-400 mb-5 anim-hero"
      class:visible={mounted}
      style="--delay: 0ms"
    >
      Alt Pirineu i Aran
    </p>

    <!-- H1 -->
    <h1
      class="font-display font-extrabold text-text-light leading-[1.05] max-w-[720px] anim-hero"
      class:visible={mounted}
      style="--delay: 150ms; font-size: clamp(3rem, 7vw, 6rem);"
    >
      Tecnologia per transformar el Pirineu
    </h1>

    <!-- Subtitle -->
    <p
      class="font-body font-normal text-[1.125rem] leading-relaxed text-text-light/70 max-w-[560px] mt-6 anim-hero"
      class:visible={mounted}
      style="--delay: 300ms"
    >
      Pirineu Tech impulsa projectes, infraestructures i aliances per accelerar
      la innovació tecnològica a l'Alt Pirineu i Aran i construir un territori
      més connectat, intel·ligent i resilient.
    </p>

    <!-- CTAs -->
    <div
      class="flex flex-wrap gap-4 mt-10 anim-hero"
      class:visible={mounted}
      style="--delay: 450ms"
    >
      <a
        href="#projectes"
        class="font-body font-semibold px-7 py-3.5 rounded-md bg-accent-400 text-dark-900 hover:bg-accent-200 transition-colors duration-200"
      >
        Descobreix els projectes
      </a>
      <a
        href="#adhesio"
        class="font-body font-semibold px-7 py-3.5 rounded-md text-text-light transition-colors duration-200 cta-ghost"
      >
        Fes-te soci
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
    <span class="text-xs font-body text-text-light/40 tracking-widest uppercase">Scroll</span>
    <div class="scroll-line" aria-hidden="true"></div>
  </div>
</section>

<style>
  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 60% at 75% -10%, #122743 0%, transparent 65%),
      radial-gradient(ellipse 40% 40% at 20% 80%, #0C1A2E 0%, transparent 60%);
    pointer-events: none;
  }

  /* Hero entrance animations */
  .anim-hero {
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 700ms ease-out var(--delay, 0ms),
      transform 700ms ease-out var(--delay, 0ms);
  }

  .anim-hero.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Ghost CTA */
  .cta-ghost {
    background: var(--glass-dark);
    border: 1px solid var(--border-glass);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .cta-ghost:hover {
    border-color: #7DB2FF;
  }

  /* Scroll indicator line */
  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, rgba(248, 251, 255, 0.4), transparent);
    animation: scroll-pulse 2s ease-in-out infinite;
  }

  @keyframes scroll-pulse {
    0%, 100% { opacity: 0.4; transform: scaleY(1); }
    50% { opacity: 0.8; transform: scaleY(1.1); }
  }
</style>
