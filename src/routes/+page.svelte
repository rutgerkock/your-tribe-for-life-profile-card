<script>
    import Test from '$lib/test.md';
    import Notes from '$lib/notes.md';
</script>

<body>
    <nav>
        <h1>Rutger Kock</h1>
    </nav>

    <a id="goToTop" href="#top">&#x2191;</a>

    <h1 id="fdnd">FDND</h1>

    <section id="top">
        <a href="https://github.com/rutgerkock" target="_blank">github @rutgerkock</a>
    </section>
    <section>
        <h1>i-love-web<span class="dot">.</span><span class="blog">blog</span></h1>
        <article class="sprintsArticle">
            <ul class="sprintButtonList">
                <li><p>Sprints 24/25</p></li>
                <li><button class="sprintButton">Sprint 13</button></li>
                <li><button class="sprintButton">Sprint 14</button></li>
                <li><button class="sprintButton">Sprint 15</button></li>
                <li><button class="sprintButton">Sprint 16</button></li>
                <li><button class="sprintButton">Sprint 17</button></li>
                <li><button class="sprintButton">Sprint 18</button></li>
                <li><button class="sprintButton">Sprint 19</button></li>
                <li><button class="sprintButton">Sprint 20</button></li>
            </ul>
            <article>                
                <Test />
            </article>
        </article>
        <article class="notes">
            <Notes />            
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
        flex-direction: column;
    }

    .sprintsArticle {
        flex-direction: row;
    }

    .sprintButtonList, .sprintsArticle Article, .notes {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;        
        border: 1px solid var(--border-color);
        border-radius: 4px;
        background-color: var(--box-color);
        padding: 1rem;
        min-width: 10.5rem;
        height: 32rem;
    }

    .sprintsArticle article{
        margin: 1rem 1rem 1rem 0;
        width: 74vw;
    }

    .sprintButtonList {
        margin: 1rem 1rem 1rem 0;
        list-style: none;
        width: 15vw;
    }

    .sprintButton {
        font-family: monospace;
        font-weight: bold;
        font-size: 1.2rem;
        color: var(--yellow-color);
        background-color: var(--background-color);
        border: 1px solid var(--border-color);
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s, box-shadow 0.2s;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .sprintButton:hover {
        background-color: var(--box-color);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .sprintButton:active {
        background-color: #4f4f4f;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .sprintsArticle article, .notes {
        height: 32rem;
        overflow-y: scroll;
        align-items: flex-start;
    }

    .notes {
        width: 90vw;
        padding-left: 2rem;
    }

</style>