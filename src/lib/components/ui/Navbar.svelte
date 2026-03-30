<script lang="ts">
  import { onMount } from 'svelte';

  let scrolled = $state(false);
  let menuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { label: 'Projectes', href: '#projectes' },
    { label: 'Línies', href: '#linies' },
    { label: 'Novetats', href: '#novetats' },
    { label: 'Qui som', href: '#qui-som' },
  ];
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  class:scrolled
>
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="font-sans font-bold text-xl text-text-light tracking-tight">
      Pirineu Tech
    </a>

    <!-- Desktop nav -->
    <nav class="hidden md:flex items-center gap-8">
      {#each navLinks as link}
        <a
          href={link.href}
          class="font-body text-sm font-medium text-text-light opacity-75 hover:opacity-100 transition-opacity"
        >
          {link.label}
        </a>
      {/each}
      <a
        href="#adhesio"
        class="font-body text-sm font-medium px-4 py-2 rounded border border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-dark-900 transition-colors duration-200"
      >
        Fes-te soci
      </a>
    </nav>

    <!-- Mobile hamburger -->
    <button
      class="md:hidden flex flex-col gap-1.5 p-2"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="Menú"
    >
      <span
        class="block w-6 h-0.5 bg-text-light transition-all duration-300"
        class:rotate-45={menuOpen}
        class:translate-y-2={menuOpen}
      ></span>
      <span
        class="block w-6 h-0.5 bg-text-light transition-all duration-300"
        class:opacity-0={menuOpen}
      ></span>
      <span
        class="block w-6 h-0.5 bg-text-light transition-all duration-300"
        class:-rotate-45={menuOpen}
        class:-translate-y-2={menuOpen}
      ></span>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="md:hidden bg-dark-800 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
      {#each navLinks as link}
        <a
          href={link.href}
          class="font-body text-sm font-medium text-text-light opacity-75 hover:opacity-100 transition-opacity py-1"
          onclick={() => (menuOpen = false)}
        >
          {link.label}
        </a>
      {/each}
      <a
        href="#adhesio"
        class="font-body text-sm font-medium px-4 py-2 rounded border border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-dark-900 transition-colors duration-200 text-center mt-2"
        onclick={() => (menuOpen = false)}
      >
        Fes-te soci
      </a>
    </div>
  {/if}
</header>

<style>
  header.scrolled {
    background: var(--glass-dark);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-glass);
    box-shadow: 0 4px 24px var(--shadow-deep);
  }
</style>
