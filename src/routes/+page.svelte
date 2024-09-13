<body>
    <nav>
        <h1>Rutger Kock</h1>
    </nav>

    <h1 id="fdnd">FDND</h1>

    <section>
        <a href="https://github.com/rutgerkock" target="_blank">github @rutgerkock</a>
    </section>
    <section>
        <h1>i-love-web &rarr; <span>blog</span></h1>
        <h2>Sprint 1</h2>
        <details name='weeks'>
            <summary>Week 1</summary>
            <ul>
                <li>Maandag</li>
                <li>Dinsdag</li>
                <li>Woensdag</li>
                <li>Donderdag</li>
                <li>Vrijdag</li>
            </ul>
        </details>
        <details name='weeks'>
            <summary>Week 2</summary>
            <ul>
                <li>Maandag</li>
                <li>Dinsdag</li>
                <li>Woensdag</li>
                <li>Donderdag</li>
                <li>Vrijdag</li>
            </ul>
        </details>
        <details name='weeks'>
            <summary>Week 3</summary>
            <ul>
                <li>Maandag</li>
                <li>Dinsdag</li>
                <li>Woensdag</li>
                <li>Donderdag</li>
                <li>Vrijdag</li>
            </ul>
        </details>
        <h2>Sprint 2</h2>
        <details name='weeks'>
            <summary>Week 1</summary>
            <ul>
                <li>Maandag</li>
                <li>Dinsdag</li>
                <li>Woensdag</li>
                <li>Donderdag</li>
                <li>Vrijdag</li>
            </ul>
        </details>
        <details name='weeks'>
            <summary>Week 2</summary>
            <ul>
                <li>Maandag</li>
                <li>Dinsdag</li>
                <li>Woensdag</li>
                <li>Donderdag</li>
                <li>Vrijdag</li>
            </ul>
        </details>
        <details name='weeks'>
            <summary>Week 3</summary>
            <ul>
                <li>Maandag</li>
                <li>Dinsdag</li>
                <li>Woensdag</li>
                <li>Donderdag</li>
                <li>Vrijdag</li>
            </ul>
        </details>
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
        z-index: 997;
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
        padding: 5rem 4rem;
        scroll-snap-align: start; 
    }

    section:first-of-type {
        height: 100vh; 
    }

    span {
        color: var(--red-color);
    }

    section h1 {
    font-size: 2rem;
    margin: 2rem 0rem;
    color: var(--blue-color);
    position: sticky;
    z-index: 998; 
    width: 100%;
    background-color: var(--background-color);
    top: 0.5rem;
}

    section h2 {
        margin-top: 1.5rem;
    }

    section details {
        margin: 1rem 0rem;
    }

    section details summary {
        cursor: pointer;
    }

    section ul {
        position: sticky;
        width: 70%;
        margin-left: 16rem;
    }

    section ul li {
        list-style: none;
        padding: 1rem 0rem;
        color: var(--yellow-color);
    }

    #fdnd {
        display: fixed;
        right: 0;
        top: 0;
        position: fixed;
        background-color: var(--background-color);
        padding: 1rem 4rem;
        z-index: 999;
    }



</style>