<script>
    export let data;
    import Test from '$lib/test.md';
    import Notes from '$lib/notes.md';

    // Import your images
    import image1 from '$lib/assets/img1.jpg';
    import image2 from '$lib/assets/img2.jpg';
    import image3 from '$lib/assets/img3.jpg';
    import image4 from '$lib/assets/img4.jpg';
    import image5 from '$lib/assets/img5.jpg';
    import image6 from '$lib/assets/img6.jpg';
    import image7 from '$lib/assets/img7.jpg';
    import image8 from '$lib/assets/img8.jpg';
    import image9 from '$lib/assets/img9.jpg';
    import image10 from '$lib/assets/img10.jpg';
    import image11 from '$lib/assets/img11.jpg';
    import image12 from '$lib/assets/img12.jpg';
    import image13 from '$lib/assets/img13.jpg';
    import image14 from '$lib/assets/img14.jpg';
    import image15 from '$lib/assets/img15.jpg';
    import image16 from '$lib/assets/img16.jpg';
    import image17 from '$lib/assets/img17.jpg';
    import image18 from '$lib/assets/img18.jpg';
    import image19 from '$lib/assets/img19.jpg';
    import image20 from '$lib/assets/img20.jpg';
    import image21 from '$lib/assets/img21.jpg';
    import image22 from '$lib/assets/img22.jpg';
    import image23 from '$lib/assets/img23.jpg';
    import image24 from '$lib/assets/img24.jpg';
    import image25 from '$lib/assets/img25.jpg';

    let images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25];
    let currentImage = getRandomImage();

    function getRandomImage() {
        return images[Math.floor(Math.random() * images.length)];
    }

    function handleImageClick() {
        currentImage = getRandomImage();
    }

    function scrollToSection(event, sectionId) {
        event.preventDefault();
        const container = document.querySelector('.scrollable_container');
        const target = document.querySelector(sectionId);
        if (container && target) {
            const containerRect = container.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();

            const scrollTop = targetRect.top - containerRect.top + container.scrollTop - 24;

            container.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
        }
    }
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
        <a href="https://github.com/{data.persons.github_handle}" target="_blank">Github {data.persons.github_handle}</a>
        <a href="mailto:kock.rutger@gmail.com">Email</a>
        <article class="image_gallery">
            <h2>Ik maak graag foto's</h2>
            <picture>
                <source src={currentImage} media="(max-width: 600px)" type="image/avif" on:click={handleImageClick}>
                <source src={currentImage} media="(max-width: 600px)" type="image/webp" on:click={handleImageClick}>
                <img src={currentImage} loading="lazy" media="(max-width: 600px)" on:click={handleImageClick}/>
            </picture>
        </article>
    </section>
    
    <section>
        <h1>i-love-web<span class="dot">.</span><span class="red">blog</span></h1>
        <article class="sprintsArticle">
            <ul class="sprintButtonList">
                <li><p>Sprints 24/25</p></li>
                <li><a class="sprintButton" href="#sprint-13" on:click={(e) => scrollToSection(e, '#sprint-13')}>Sprint 13</a></li>
                <li><a class="sprintButton" href="#sprint-14" on:click={(e) => scrollToSection(e, '#sprint-14')}>Sprint 14</a></li>
                <li><a class="sprintButton" href="#sprint-15" on:click={(e) => scrollToSection(e, '#sprint-15')}>Sprint 15</a></li>
                <li><a class="sprintButton" href="#sprint-16" on:click={(e) => scrollToSection(e, '#sprint-16')}>Sprint 16</a></li>
                <li><a class="sprintButton" href="#sprint-17" on:click={(e) => scrollToSection(e, '#sprint-17')}>Sprint 17</a></li>
                <li><a class="sprintButton" href="#sprint-18" on:click={(e) => scrollToSection(e, '#sprint-18')}>Sprint 18</a></li>
                <li><a class="sprintButton" href="#sprint-19" on:click={(e) => scrollToSection(e, '#sprint-19')}>Sprint 19</a></li>
                <li><a class="sprintButton" href="#sprint-20" on:click={(e) => scrollToSection(e, '#sprint-20')}>Sprint 20</a></li>                
            </ul>
            <div class="scrollable_container">
                <Test />
            </div>
            <div>
                <Notes />            
            </div>
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
    width: 100%;
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

.image_gallery {
    display: flex;
    flex-wrap: wrap; 
    justify-content: flex-start;
    align-items: flex-start; 
    width: 100%;
    margin: 2rem 0;
    padding: 0;
}

.image_gallery img {
    max-width: 40vw;
    max-height: 40vh; 
    width: auto; 
    height: auto; 
    object-fit: contain; 
}


.image_gallery img:hover {
    cursor: pointer;
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
}


</style>