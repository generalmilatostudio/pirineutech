<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';

  const novetats = [
    {
      categoria: "Projectes",
      data: "15 mar. 2026",
      title: "Pyrenlab inicia la fase pilot amb tres municipis de l'Alt Urgell",
      extracte:
        "El laboratori d'innovació aplicada al Pirineu ha seleccionat Organyà, Oliana i les Valls d'Aguilar per desplegar els primers prototips de gestió hídrica intel·ligent.",
    },
    {
      categoria: "Formació",
      data: "3 mar. 2026",
      title: "Pirineu Tech i la UdL llancen un programa de pràctiques en entorns rurals digitals",
      extracte:
        "L'acord permetrà que estudiants de graus tecnològics realitzin les seves pràctiques en projectes reals dins del territori, fomentant l'arrelament del talent.",
    },
    {
      categoria: "Infraestructura",
      data: "18 feb. 2026",
      title: "Nou conveni amb la Generalitat per millorar la connectivitat al Pallars Sobirà",
      extracte:
        "El conveni inclou el desplegament de fibra òptica i xarxes mesh en 12 nuclis de poblament dispersos, beneficiant més de 1.400 residents.",
    },
  ] as const;
</script>

<section class="bg-dark-700 py-[120px]" id="novetats">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="mb-14" use:fadeIn={{ delay: 0 }}>
      <p class="font-body text-xs font-semibold uppercase tracking-widest text-accent-400 mb-4">
        Actualitat
      </p>
      <h2 class="font-sans font-bold text-text-light mb-3" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem);">
        Novetats i actualitat
      </h2>
      <p class="font-body text-base text-text-light/65 max-w-xl">
        Segueix els projectes, activitats i iniciatives que marquen l'evolució
        de l'ecosistema tecnològic del Pirineu.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each novetats as noticia, i}
        <article
          class="novetat-card rounded-xl p-8 flex flex-col gap-3"
          use:fadeIn={{ delay: 100 + i * 100 }}
        >
          <div class="flex items-center gap-3">
            <span class="font-body font-medium text-xs text-accent-400 uppercase tracking-wider">
              {noticia.categoria}
            </span>
            <span class="text-text-light/40 text-xs font-body">{noticia.data}</span>
          </div>

          <h3 class="font-sans font-semibold text-[1.125rem] text-text-light leading-snug">
            {noticia.title}
          </h3>

          <p class="font-body text-sm text-text-light/60 leading-relaxed flex-1">
            {noticia.extracte}
          </p>

          <a
            href="#novetats"
            class="font-body font-medium text-sm text-accent-400 hover:underline underline-offset-4 mt-1 self-start"
          >
            Llegir més →
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .novetat-card {
    background: var(--glass-dark);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-glass);
  }

  .novetat-card:hover {
    border-color: rgba(125, 178, 255, 0.3);
  }
</style>
