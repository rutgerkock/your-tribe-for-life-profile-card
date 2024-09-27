<script>
    export let data;
    import Test from '$lib/test.md';
    import Notes from '$lib/notes.md';
    import { onMount } from 'svelte';

    let city = 'Utrecht';
    let weather;

    async function getWeather() {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`
        );
        weather = await res.json();
        weather = weather;
    }
    onMount(() => {
        getWeather();
    });
</script>

<body>
    <nav>
        <div>
            <h2><a href="https://{data.persons.website}">{data.persons.name} {data.persons.surname}</a></h2>
        </div>
        <h2><a href="https://fdnd.nl/" target="_blank">FDND</a></h2>
    </nav>

    <a title="This button gets you to the top of the page" id="goToTop" href="#top">&#x2191;</a>

    <section id="top">
        <a href="https://github.com/{data.persons.github_handle}" target="_blank">gihub {data.persons.github_handle}</a>    
        <p>Temperature: {#if weather}{weather.main.temp.toFixed(1)}°C{/if}</p>
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
            <li>
                <i>Zandvoort</i>
                <button popovertarget="my-popover" class="image_container">
                    <enhanced:img src="/static/images/img1.jpg" alt="An alt text"
                    class="main_images"/>
                </button>
                <div id="my-popover" class="popover" popover>
                    <enhanced:img src="/static/images/img1.jpg" alt="An alt text"/>
                    <enhanced:img src="/static/images/img2.jpg" alt="An alt text"/>
                    <enhanced:img src="/static/images/img3.jpg" alt="An alt text"/>
                    <enhanced:img src="/static/images/img4.jpg" alt="An alt text"/>
                    <enhanced:img src="/static/images/img5.jpg" alt="An alt text"/>
                </div>
            </li>
            <li>
                <a href="/zugspitze">
                    <i>Zugspitze</i>
                    <div class="image_container">
                        <enhanced:img src="/static/images/img3.jpg" alt="An alt text"
                        class="main_images"/>
                    </div>
                </a>
            </li>
            <li>
                <a href="/wheels2024">
                    <i>Wheels 2024</i>
                    <div class="image_container">
                        <enhanced:img src="/static/images/img2.jpg" alt="An alt text"
                        class="main_images"/>
                    </div>
                </a>
            </li>
            <li>
                <a href="/bmw2002">
                    <i>BMW 2002</i>
                    <div class="image_container">
                        <enhanced:img src="/static/images/img4.jpg" alt="An alt text"
                        class="main_images"/>
                    </div>
                </a>
            </li>
            <li>
                <a href="/porschemuseum">
                    <i>Porsche Museum</i>
                    <div class="image_container">
                        <enhanced:img src="/static/images/img5.jpg" alt="An alt text"
                        class="main_images"/>
                    </div>
                </a>
            </li>
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
    scroll-snap-type: y mandatory; 
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-padding-top: 5rem;
}

section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 5rem 7vw;
    scroll-snap-align: start; 
}


section:first-of-type {height: 100vh;}


section h1 {
    font-size: 2rem;
    text-wrap: nowrap;
    color: var(--blue-color);
    position: sticky;
    background-color: var(--background-color);
    top: 0.5em;
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

.image_section li {
    padding: 1rem 0;
}

.image_section li button {
    border: none;
    padding: 0;
    background-color: transparent;
}

.image_container {
    position: relative;
    overflow: hidden;
    width: 100%; 
    height: auto; 
}

.image_section .main_images {
    object-fit: cover;
    width: 100%; 
    height: auto;
    aspect-ratio: 3/2;
    border-radius: 4px;
    transition: transform 0.3s ease-in-out;
}

.image_section .main_images:hover {
    transform: scale(1.5);
}

.popover {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: var(--background-color);
    border: none;
}

.popover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
}
</style>
