<script>
    import Test from '$lib/test.md';
</script>

<div class="sprint">
    <h2>Sprint 13</h2>
    <div class="week-container">
        <button class="ide-button" popovertarget="my-popover">Week 1</button>
        <ul popover id="my-popover">
            <li>
                <h2>Maandag</h2>
                <Test />
            </li>
            <li>
                <h2>Dinsdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>            
            <li>
                <h2>Woensdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>            
            <li>
                <h2>Donderdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>            
            <li>
                <h2>Vrijdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>        
        </ul>
    </div>
    <div class="week-container">
        <button class="ide-button" popovertarget="my-popover">Week 1</button>
        <ul popover id="my-popover">
            <li>
                <h2>Maandag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>
            <li>
                <h2>Dinsdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>            
            <li>
                <h2>Woensdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>            
            <li>
                <h2>Donderdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>            
            <li>
                <h2>Vrijdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>        
        </ul>
    </div>
    <div class="week-container">
        <button class="ide-button" popovertarget="my-popover">Week 1</button>
        <ul popover id="my-popover">
            <li>
                <h2>Maandag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>
            <li>
                <h2>Dinsdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>            
            <li>
                <h2>Woensdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>            
            <li>
                <h2>Donderdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>            
            <li>
                <h2>Vrijdag</h2>
                <p>Deze dag gaan we aan de slag met de volgende onderwerpen:</p>
            </li>        
        </ul>
    </div>
</div>


<style>
    .sprint {
        margin: 1rem 0;
        border: 1px solid #3f3f3f;
        border-radius: 4px;
        background-color: #2d2d2d;
        color: #d4d4d4;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        padding: 1rem;
        display: inline-block;
        min-width: 15rem;
        max-width: max-content;
        margin-right: 1rem;
    }

    .sprint h2 {
        margin: 0 0 1rem 0;
        font-weight: bold;
        color: var(--yellow-color);
    }

    .week-container {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .ide-button {
        background-color: #2d2d2d;
        color: #c5c8c6;
        border: 1px solid #3f3f3f;
        padding: 8px 12px;
        border-radius: 4px;
        font-family: monospace;
        cursor: pointer;
        transition: background-color 0.2s, box-shadow 0.2s;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        width: 100%;
    }

    .ide-button:hover {
        background-color: #3f3f3f;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .ide-button:active {
        background-color: #4f4f4f;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        width: 90vw;
        height: 90vh;
        background-color: var(--background-color);
        margin: 5vw 5vh;
        color: var(--text-color);
        border: none;
    } 

    li {
        padding: 0.5rem 0;
    }
</style>