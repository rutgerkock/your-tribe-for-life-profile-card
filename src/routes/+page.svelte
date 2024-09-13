<script>
    import Sprint from '$lib/sprint.svelte';
</script>

<body>
    <nav>
        <h1>Rutger Kock</h1>
    </nav>

    <h1 id="fdnd">FDND</h1>

    <section>
        <a href="https://github.com/rutgerkock" target="_blank">github @rutgerkock</a>
    </section>
    <section>
        <h1>i-love-web<span class="dot">.</span><span class="blog">blog</span></h1>
        <article>
            <Sprint />
        </article>
    </section>
</body>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        position: fixed;
        background-color: var(--background-color);
        width: 100%;
        padding: 1rem 4rem;
        z-index: 996;
    }

    body {
        margin: 0;
        height: 100vh; 
        scroll-snap-type: y mandatory; 
        overflow-y: scroll; 
    }

    section {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 7rem 4rem;
        scroll-snap-align: start; 
    }

    section:first-of-type {
        height: 100vh; 
    }

    .blog {
        color: var(--red-color);
    }

    section h1 {
        font-size: 2rem;
        margin: 2rem 0rem;
        color: var(--blue-color);
        position: sticky;
        z-index: 997; 
        width: 100%;
        background-color: var(--background-color);
        top: 0.5rem;
    }

    article {
        display: flex;
        flex-direction: row;
    }


</style>