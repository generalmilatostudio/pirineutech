<script lang="ts">
  import { onMount } from 'svelte';
  import { fadeIn } from '$lib/utils/animations';
</script>

<section class="bg-light-100 py-[120px]" id="el-projecte">
  <div class="max-w-[800px] mx-auto px-6 text-center">
    <!-- Eyebrow -->
    <p
      class="font-body text-xs font-semibold uppercase tracking-widest mb-5"
      style="color: #2E6BB0;"
      use:fadeIn={{ delay: 0 }}
    >
      El projecte
    </p>

    <!-- H2 -->
    <h2
      class="font-sans font-bold text-text-dark leading-tight mb-8"
      style="font-size: clamp(2.25rem, 4vw, 3rem);"
      use:fadeIn={{ delay: 100 }}
    >
      Un projecte col·lectiu per activar el futur digital del territori
    </h2>

    <!-- Body -->
    <p
      class="font-body font-normal text-lg leading-[1.7] text-text-dark/75"
      use:fadeIn={{ delay: 200 }}
    >
      Pirineu Tech és una associació privada sense ànim de lucre que treballa
      per fer servir la tecnologia i la innovació com a eines de transformació
      al Pirineu. Connectem empreses, institucions i coneixement per impulsar
      iniciatives amb impacte real sobre el territori, les persones i
      l'activitat econòmica.
    </p>
  </div>
</section>

<style>
  /* anim-fade-in comes from app.css via global styles */
</style>
