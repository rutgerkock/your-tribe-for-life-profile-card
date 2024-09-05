<script>
    import Loading from '$lib/Loading.svelte';
    import { onMount } from 'svelte';
  
    let showPage = false;
  
    onMount(() => {
      setTimeout(() => {
        showPage = true;
      }, 2000);
    });
  </script>
  
  {#if !showPage}
    <Loading />
  {:else}
    <h1>Welcome to SvelteKit</h1>
    <p>baguette</p>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  {/if}
  