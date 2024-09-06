<script>
    import { onMount } from 'svelte';
  
    let isVisible = true;
  
    onMount(() => {
      setTimeout(() => {
        isVisible = false;
      }, 2000);
    });
  </script>
  
  {#if isVisible}
  <div class="loading-screen">
    <div class="loading-bar">
      {#each Array(10) as _, index}
        <div class="block" style="animation-delay: {index * 0.1}s"></div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    z-index: 1000;
    overflow: hidden;
  }

  .loading-bar {
    display: flex;
    gap: 5px;
  }

  .block {
    width: 20px;
    height: 20px;
    background-color: #000;
    animation: block 1.2s infinite;
    opacity: 0.5;
  }

  @keyframes block {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  @keyframes text-blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
</style>
