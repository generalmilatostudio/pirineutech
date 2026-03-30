<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';
</script>

<section class="relative bg-dark-900 py-[140px] overflow-hidden" id="adhesio">
  <!-- Radial background glow -->
  <div class="cta-bg" aria-hidden="true"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
    <!-- H2 -->
    <h2
      class="font-display font-extrabold text-text-light leading-tight"
      style="font-size: clamp(2.5rem, 6vw, 4rem);"
      use:fadeIn={{ delay: 0 }}
    >
      Vols sumar-te a l'ecosistema?
    </h2>

    <!-- Body -->
    <p
      class="font-body text-lg text-text-light/65 max-w-[500px] mt-6 leading-relaxed"
      use:fadeIn={{ delay: 150 }}
    >
      Si ets una empresa, una institució o un agent amb interès a impulsar
      projectes, compartir capacitats o contribuir al desenvolupament
      tecnològic del Pirineu, volem conèixer-te.
    </p>

    <!-- CTAs -->
    <div
      class="flex flex-wrap justify-center gap-4 mt-10"
      use:fadeIn={{ delay: 300 }}
    >
      <a
        href="mailto:hola@pirineutech.cat?subject=Fes-te+soci"
        class="font-body font-semibold px-8 py-4 rounded-md bg-accent-400 text-dark-900 hover:bg-accent-200 transition-colors duration-200"
      >
        Fes-te soci
      </a>
      <a
        href="mailto:hola@pirineutech.cat"
        class="font-body font-semibold px-8 py-4 rounded-md text-text-light cta-ghost-dark transition-colors duration-200"
      >
        Contacta amb nosaltres
      </a>
    </div>
  </div>
</section>

<style>
  .cta-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 55% at 50% 50%, rgba(18, 39, 67, 0.9) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 20% 100%, rgba(12, 26, 46, 0.5) 0%, transparent 60%),
      radial-gradient(ellipse 30% 30% at 80% 0%, rgba(18, 39, 67, 0.4) 0%, transparent 60%);
    pointer-events: none;
  }

  .cta-ghost-dark {
    background: var(--glass-dark);
    border: 1px solid var(--border-glass);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .cta-ghost-dark:hover {
    border-color: #7DB2FF;
  }
</style>
