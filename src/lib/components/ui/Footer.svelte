<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-dark-900 border-t border-white/10 py-16">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
      <!-- Brand -->
      <div>
        <p class="font-display font-bold text-xl text-text-light mb-3">Pirineu Tech</p>
        <p class="font-body text-sm text-text-light/50 leading-relaxed max-w-xs">
          Associació privada sense ànim de lucre per a la transformació
          tecnològica de l'Alt Pirineu i Aran.
        </p>
      </div>

      <!-- Projectes -->
      <div>
        <p class="font-body font-semibold text-xs uppercase tracking-widest text-text-light/40 mb-4">
          Projectes
        </p>
        <ul class="flex flex-col gap-3">
          <li><a href="#projectes" class="font-body text-sm text-text-light/60 hover:text-text-light transition-colors">Pyrenlab</a></li>
          <li><a href="#projectes" class="font-body text-sm text-text-light/60 hover:text-text-light transition-colors">Infraestructura digital</a></li>
        </ul>
      </div>

      <!-- Organització -->
      <div>
        <p class="font-body font-semibold text-xs uppercase tracking-widest text-text-light/40 mb-4">
          Organització
        </p>
        <ul class="flex flex-col gap-3">
          <li><a href="#el-projecte" class="font-body text-sm text-text-light/60 hover:text-text-light transition-colors">Qui som</a></li>
          <li><a href="#linies" class="font-body text-sm text-text-light/60 hover:text-text-light transition-colors">Línies estratègiques</a></li>
          <li><a href="#novetats" class="font-body text-sm text-text-light/60 hover:text-text-light transition-colors">Novetats</a></li>
        </ul>
      </div>

      <!-- Contacte -->
      <div>
        <p class="font-body font-semibold text-xs uppercase tracking-widest text-text-light/40 mb-4">
          Contacte
        </p>
        <ul class="flex flex-col gap-3">
          <li><a href="#adhesio" class="font-body text-sm text-text-light/60 hover:text-text-light transition-colors">Fes-te soci</a></li>
          <li><a href="mailto:hola@pirineutech.cat" class="font-body text-sm text-text-light/60 hover:text-text-light transition-colors">hola@pirineutech.cat</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="font-body text-xs text-text-light/30">
        © {currentYear} Pirineu Tech. Tots els drets reservats.
      </p>
      <div class="flex gap-6">
        <a href="/avis-legal" class="font-body text-xs text-text-light/30 hover:text-text-light/60 transition-colors">Avís legal</a>
        <a href="/politica-privacitat" class="font-body text-xs text-text-light/30 hover:text-text-light/60 transition-colors">Política de privacitat</a>
      </div>
    </div>
  </div>
</footer>
