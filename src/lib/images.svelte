<script>
    const folders = [
        { name: 'zandvoort', totalImages: 22 },
        { name: 'Zugspitze', totalImages: 16 }, 
        { name: 'Wheels 2024', totalImages: 59 }, 
        { name: 'Porsche Museum', totalImages: 16 }, 
        { name: 'BMW 2002', totalImages: 16 }
    ];

    const folderImages = folders.map(folder => ({
        name: folder.name,
        images: generateImagePaths(folder)
    }));

    function generateImagePaths(folder) {
        let images = [];
        for (let i = 1; i <= folder.totalImages; i++) {
            images.push(`/images/${folder.name.toLowerCase().replace(/\s+/g, '')}/img${i}.jpg`);
        }
        return images;
    }
</script>

{#each folderImages as folder}
    <li>
        <i>{folder.name}</i>
        <button popovertarget={`popover-${folder.name}`} class="image_container">
            <img src={folder.images[0]} alt={folder.name} class="main_images" loading="lazy"/>
        </button>
        <div id={`popover-${folder.name}`} class="popover" popover>
            {#each folder.images as image}
                <img src={image} alt={folder.name} loading="lazy"/>
            {/each}
        </div>
    </li>
{/each}



<style>
    li {
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

    img:first-of-type {
        object-fit: cover;
        width: 100%;
        height: auto;
        aspect-ratio: 3/2;
        border-radius: 4px;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .main_images:hover {
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
        object-fit: contain;
        margin-bottom: 1rem;
    }

    @media (min-width: 450px) {
        .popover img {
            height: 100%;
        }
    }
</style>
