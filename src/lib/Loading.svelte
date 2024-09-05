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
      <h1 class="loading-text">SQUADS</h1>
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
      justify-content: center;
      align-items: center;
      background: #fff;
      z-index: 1000;
      overflow: hidden;
    }
  
    .loading-text {
      font-size: 20rem;
      font-weight: bold;
      font-family: 'Poppins', sans-serif;
      display: inline-block;
      animation: slide-up 2s ease-in-out forwards;
    }
  
    @keyframes slide-up {
      0% {
        opacity: 0;
        transform: translateY(80vh) scaleY(2); 
      }
      10% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) scaleY(2);
      }
    }
  </style>
