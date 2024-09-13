<script>
  import { onMount } from 'svelte';

  let isLoaded = false;

  onMount(() => {
      isLoaded = true;    
  });

</script>

{#if !isLoaded}
  <div class="loader">
    <span class="loading">loading</span>
    <span>.</span>
    <span class="name">rutger</span>
    <span>.</span>
    <span class="portfolio">profile_card</span>

    <span class="dot dot1">.</span>
    <span class="dot dot2">.</span>
    <span class="dot dot3">.</span>
  </div>

{/if}
<slot />

<style>
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-color);
    color: var(--text-color);
    width: 100vw;
    height: 100vh;
    z-index: 999;
}

  .loader .loading {color: var(--yellow-color);}
  .loader .portfolio {color: var(--red-color);}
  .loader .name {color: var(--blue-color);}


  .dot {
    animation: blink 1.5s infinite;
  }

  .dot1 {
    animation-delay: 0s;
  }

  .dot2 {
    animation-delay: 0.3s;
  }

  .dot3 {
    animation-delay: 0.6s;
  }


  /* animations -------------------------------------------------------*/
  @keyframes blink {
    0%, 20% {
      transform: translateY(0);
    }
    50% {

      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    } 
  }
  
</style>
