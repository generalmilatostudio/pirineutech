<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>Pirineu Tech — Node tecnològic de l'Alt Pirineu i Aran</title>
  <meta name="description" content="Connectem empreses, talent i institucions per construir la regió digital del futur." />
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

{@render children()}
