<script lang="ts">
  import { fadeLeft, fadeRight } from '$lib/utils/animations';
</script>

<section class="bg-light-200 py-[120px]" id="context">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 items-start">
      <!-- Left column -->
      <div use:fadeLeft={{ delay: 0 }}>
        <p class="font-body text-xs font-semibold uppercase tracking-widest mb-4" style="color: #2E6BB0;">
          Context
        </p>
        <h2
          class="font-sans font-bold text-text-dark leading-tight"
          style="font-size: clamp(1.75rem, 3vw, 2.25rem);"
        >
          Per què és important ara
        </h2>
      </div>

      <!-- Right column -->
      <div use:fadeRight={{ delay: 100 }}>
        <p class="font-body text-lg leading-[1.7] text-text-dark/75">
          Els territoris rurals de muntanya s'enfronten a reptes estructurals de
          connectivitat, despoblament i manca de serveis que frenen el seu
          potencial de desenvolupament. Al mateix temps, la transformació digital
          de l'economia i la societat obre oportunitats inèdites per als
          territoris que s'hi posicionin amb visió i recursos.
        </p>
        <p class="font-body text-lg leading-[1.7] text-text-dark/75 mt-5">
          L'Alt Pirineu i Aran té condicions úniques —natura, qualitat de vida,
          identitat cultural, talent local— que, combinades amb la tecnologia i
          la innovació, poden convertir-se en avantatges competitius reals.
          Pirineu Tech existeix per catalitzar aquesta oportunitat amb criteri,
          acció i aliances.
        </p>

        <!-- Decorative stat strip -->
        <div class="mt-10 flex flex-wrap gap-8">
          <div>
            <p class="font-sans font-bold text-3xl" style="color: #2E6BB0;">70%</p>
            <p class="font-body text-sm text-text-dark/60 mt-1">del territori català<br>és rural o de muntanya</p>
          </div>
          <div>
            <p class="font-sans font-bold text-3xl" style="color: #2E6BB0;">+15%</p>
            <p class="font-body text-sm text-text-dark/60 mt-1">de retorn a zones rurals<br>en els darrers cinc anys</p>
          </div>
          <div>
            <p class="font-sans font-bold text-3xl" style="color: #2E6BB0;">×3</p>
            <p class="font-body text-sm text-text-dark/60 mt-1">impacte del teletreball<br>en economies locals</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
