import adapter from '@sveltejs/adapter-auto'
import markdown from './src/lib/markdown.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [markdown()],
	kit: {
		adapter: adapter()
	}
}

export default config