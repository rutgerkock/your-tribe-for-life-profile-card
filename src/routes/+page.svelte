<script>
    export let data;
    import Test from '$lib/test.md';
    import Notes from '$lib/notes.md';
    import { onMount } from 'svelte';
    import Images from '$lib/images.svelte';

    let city = 'Utrecht';
    let weather;

    async function getWeather() {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52d2a223715e49a67159446b130d4482&lang=nl&units=metric`
        );
        weather = await res.json();
    }
    onMount(() => {
        getWeather();
    });
</script>

<body>
    <nav>
        <h2><a href="https://{data.persons.website}">{data.persons.name} {data.persons.surname}</a></h2>
        <div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Utrecht" target="_blank">
                <h3>Utrecht</h3>
            </a>
            <p>
                {#if weather}
                    {weather.main.temp.toFixed(1)}°C | 
                    {weather.weather && weather.weather.length > 0 ? weather.weather[0].description : 'No description available'}
                {/if}
            </p>
        </div>
    </nav>

    <a title="This button gets you to the top of the page" id="goToTop" href="#top">&#x2191;</a>

    <section id="top">
        <a href="https://github.com/{data.persons.github_handle}" target="_blank">gihub {data.persons.github_handle}</a>    

    </section>
    <section>
        <h1>i-love-web<span class="dot">.</span><span class="red">blog</span></h1>
        <article class="sprintsArticle">
            <ul class="sprintButtonList">
                <li><p>Sprints 24/25</p></li>
                <li><a class="sprintButton" href="#sprint-13">Sprint 13</a></li>
                <li><a class="sprintButton" href="#sprint-14">Sprint 14</a></li>
                <li><a class="sprintButton" href="#sprint-15">Sprint 15</a></li>
                <li><a class="sprintButton" href="#sprint-16">Sprint 16</a></li>
                <li><a class="sprintButton" href="#sprint-17">Sprint 17</a></li>
                <li><a class="sprintButton" href="#sprint-18">Sprint 18</a></li>
                <li><a class="sprintButton" href="#sprint-19">Sprint 19</a></li>
                <li><a class="sprintButton" href="#sprint-20">Sprint 20</a></li>                
            </ul>
            <div class="scrollable_container">
                <Test />
            </div>
            <div class="scrollabel_container">
                <Notes />            
            </div>
        </article>
    </section>
    <section class="image_section">
        <h1>foto<span class="dot">.</span><span class="red">albums</span></h1>
        <ul>
            <Images />
        </ul>   
    </section>
</body>

<style>
nav {
    display: flex;
    justify-content: space-between;
    position: fixed;
    background-color: var(--background-color);
    width: 100%;
    max-height: 4rem;
    padding: 1rem 7vw;
    z-index: 998;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

nav h1 a {
    color: var(--text-color);
}

body {
    margin: 0;
    width: 100vw;
    height: 100vh; 
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-padding-top: 10rem;
}

section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 5rem 7vw;
}


section:first-of-type {height: 100vh;}


section h1 {
    font-size: 2rem;
    text-wrap: nowrap;
    color: var(--blue-color);
    position: sticky;
    background-color: var(--background-color);
    top: 0em;
    padding-top: 0.5em;
    z-index: 998;
    margin-bottom: 1rem;
    width: 100vw;
}

article {
    display: flex;
    flex-direction: column;
}

.sprintsArticle {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(11, 1fr);
    gap: 1rem;
}

.sprintsArticle ul { 
    grid-area: 1 / 1 / 2 / 2; 
    align-items: center;
}
.sprintsArticle div:nth-of-type(1) { 
    grid-area: 2 / 1 / 7 / 2; 
    display: flex;
    flex-direction: column;
}
.sprintsArticle div:nth-of-type(2) {
    grid-area: 7 / 1 / 13 / 2; 
    display: flex;
    flex-direction: column;
}

.sprintsArticle div {
    align-items: flex-start;
    overflow-y: auto;
    padding: 1rem;
    height: 25rem;
}

.sprintButtonList ul li p {
    position: absolute;
    top: 1rem;
    left: 1rem;
}

.sprintButtonList, .sprintsArticle div {
    display: flex;
    flex-direction: row;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--box-color);
    padding: 1rem;
    min-width: 10.5rem;
    overflow-x: scroll;
}

.sprintButtonList {
    align-items: center;
    text-wrap: nowrap;
}

.sprintButton {
    color: var(--yellow-color);
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    padding: 8px 12px;
    transition: background-color 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    text-wrap: nowrap;
    margin: 0 0.5rem;
}

.sprintButton:hover {
    background-color: var(--box-color);
}

.sprintButton:active {
    background-color: #4f4f4f;
}

.image_section ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 100%;
}



@media (min-width: 450px) {
    .sprintsArticle {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    }

    .sprintsArticle ul { 
        grid-area: 1 / 1 / 2 / 2; 
        align-items: center;
        gap: 2rem;
    }
    .sprintsArticle div:nth-of-type(1) { grid-area: 1 / 2 / 2 / 7; }
    .sprintsArticle div:nth-of-type(2) { grid-area: 2 / 1 / 3 / 7; }

    .sprintButtonList, .sprintsArticle div {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        background-color: var(--box-color);
        padding: 1rem;
        min-width: 10.5rem;
        height: 32rem;
        overflow-x: hidden;
    }

    .image_section ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
    }

    body {
        scroll-snap-type: y mandatory; 
        overflow-x: hidden;
        overflow-y: scroll;
        scroll-padding-top: 5rem;
    }

    section {
        scroll-snap-align: start; 
    }
}
</style>
