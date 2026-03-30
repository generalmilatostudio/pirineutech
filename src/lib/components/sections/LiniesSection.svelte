<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';

  const linies = [
    {
      num: '01',
      title: "Territori intel·ligent",
      desc: "Desenvolupem solucions de dades, sensors i connectivitat per optimitzar la gestió dels recursos naturals, la mobilitat i els serveis públics en entorns de muntanya.",
    },
    {
      num: '02',
      title: "Serveis digitals",
      desc: "Impulsem la digitalització d'empreses, comerços i administracions locals perquè puguin operar amb les eines i capacitats que exigeix l'economia actual.",
    },
    {
      num: '03',
      title: "Innovació",
      desc: "Creem espais de recerca, prototipatge i testatge de noves tecnologies en un laboratori viu: el Pirineu com a entorn d'innovació aplicada.",
    },
    {
      num: '04',
      title: "Formació",
      desc: "Treballem per desenvolupar el talent local, atreure perfils tecnològics i construir un ecosistema de coneixement que mantingui el capital humà al territori.",
    },
  ] as const;
</script>

<section class="bg-dark-800 py-[120px]" id="linies">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="mb-16" use:fadeIn={{ delay: 0 }}>
      <p class="font-body text-xs font-semibold uppercase tracking-widest text-accent-400 mb-4">
        Línies estratègiques
      </p>
      <h2 class="font-display font-bold text-text-light" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem);">
        Quatre línies per transformar el territori
      </h2>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each linies as linia, i}
        <article
          class="linia-card rounded-xl p-10 transition-all duration-250 ease-out hover:-translate-y-1"
          use:fadeIn={{ delay: 100 + i * 100 }}
        >
          <span class="font-display font-extrabold text-[3rem] leading-none text-accent-400/30">
            {linia.num}
          </span>
          <h3 class="font-display font-bold text-[1.375rem] text-text-light mt-4">
            {linia.title}
          </h3>
          <p class="font-body text-[0.9375rem] text-text-light/65 leading-[1.65] mt-3">
            {linia.desc}
          </p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .linia-card {
    background: var(--glass-dark);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-glass);
    box-shadow: 0 8px 32px var(--shadow-deep);
  }

  .linia-card:hover {
    border-color: rgba(125, 178, 255, 0.35);
  }
</style>
