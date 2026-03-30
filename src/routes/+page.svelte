<script lang="ts">
  import Navbar from '$lib/components/ui/Navbar.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import HeroSection from '$lib/components/sections/HeroSection.svelte';
  import IntroSection from '$lib/components/sections/IntroSection.svelte';
  import LiniesSection from '$lib/components/sections/LiniesSection.svelte';
  import ProjectesSection from '$lib/components/sections/ProjectesSection.svelte';
  import ContextSection from '$lib/components/sections/ContextSection.svelte';
  import NovettatsSection from '$lib/components/sections/NovettatsSection.svelte';
  import CTASection from '$lib/components/sections/CTASection.svelte';
</script>

<Navbar />

<main>
  <HeroSection />
  <IntroSection />
  <LiniesSection />
  <ProjectesSection />
  <ContextSection />
  <NovettatsSection />
  <CTASection />
</main>

<Footer />
