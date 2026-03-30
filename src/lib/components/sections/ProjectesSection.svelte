<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';

  const projectes = [
    {
      tag: "Territori intel·ligent",
      title: "Pyrenlab",
      subtitle: "Laboratori d'innovació aplicada al Pirineu",
      desc: "Pyrenlab és un espai de recerca, prototipatge i testatge de solucions tecnològiques que aprofita l'entorn singular del Pirineu. Desenvolupa projectes en àmbits com la gestió ambiental, la mobilitat intel·ligent o la connectivitat rural, convertint el territori en un laboratori viu per a la innovació.",
    },
    {
      tag: "Infraestructura digital",
      title: "Infraestructura digital al Pirineu",
      subtitle: "Connectivitat i resiliència per a les comarques",
      desc: "Iniciativa per desplegar infraestructures de comunicació de nova generació a les zones de l'Alt Pirineu i Aran amb menor cobertura. L'objectiu és garantir la connectivitat de qualitat com a dret bàsic i condició essencial per al desenvolupament econòmic i social del territori.",
    },
  ] as const;
</script>

<section class="bg-dark-900 py-[120px]" id="projectes">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="mb-16" use:fadeIn={{ delay: 0 }}>
      <p class="font-body text-xs font-semibold uppercase tracking-widest text-accent-400 mb-4">
        Projectes
      </p>
      <h2 class="font-display font-bold text-text-light mb-4" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem);">
        Projectes que marquen la direcció
      </h2>
      <p class="font-body text-base text-text-light/65 max-w-xl">
        Pirineu Tech impulsa iniciatives que poden redefinir les capacitats
        digitals, la innovació aplicada i la competitivitat del territori.
      </p>
    </div>

    <!-- Cards -->
    <div class="flex flex-col gap-6">
      {#each projectes as projecte, i}
        <article
          class="projecte-card rounded-2xl px-12 py-14 transition-all duration-300"
          use:fadeIn={{ delay: 100 + i * 150 }}
        >
          <!-- Tag -->
          <span class="inline-block font-body font-medium text-[0.75rem] uppercase tracking-wider text-accent-400 bg-accent-400/10 rounded px-2.5 py-1">
            {projecte.tag}
          </span>

          <!-- Title -->
          <h3 class="font-display font-bold text-text-light mt-5" style="font-size: clamp(1.5rem, 3vw, 2rem);">
            {projecte.title}
          </h3>
          <p class="font-display font-semibold text-text-light/50 text-lg mt-1">
            {projecte.subtitle}
          </p>

          <!-- Description -->
          <p class="font-body text-base text-text-light/65 leading-relaxed mt-4 max-w-2xl">
            {projecte.desc}
          </p>

          <!-- Link -->
          <a
            href="#projectes"
            class="inline-block font-body font-medium text-accent-400 mt-6 hover:underline underline-offset-4"
          >
            Saber-ne més →
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .projecte-card {
    background: #0C1A2E;
    border: 1px solid var(--border-glass);
  }

  .projecte-card:hover {
    border-color: rgba(125, 178, 255, 0.25);
  }
</style>
