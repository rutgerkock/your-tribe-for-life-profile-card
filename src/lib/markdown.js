import { parse } from 'svelte/compiler';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import fs from 'node:fs';
import path from 'node:path';
import { remark } from 'remark';
import remarkHtml from 'remark-html';


// Read markdown file (adjust path accordingly)
const markdownPath = path.join(process.cwd(), 'src/lib/notes.md');  // Adjust this path as needed
const fileContent = fs.readFileSync(markdownPath, 'utf8');

// Convert markdown to HTML with auto-linked headings
const doc = unified()
  .use(remarkParse)  // Parse markdown to mdast
  .use(remarkSlug)  // Add slugs to headings
  .use(remarkAutolinkHeadings, { behavior: 'wrap' })  // Create links to headings
  .use(remarkRehype, { allowDangerousHtml: true })  // Convert to HTML (hast)
  .use(rehypeStringify, { allowDangerousHtml: true })  // Convert HTML (hast) to HTML string
  .processSync(fileContent)
  .toString();

console.log(doc);

// Function to convert markdown string to HTML
async function markdownToHtml(string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkSlug)
    .use(remarkAutolinkHeadings, { behavior: 'wrap' })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(string);
  return result.toString();
}

// Function to process markdown in Svelte files
async function html(content) {
  const svast = parse(content);  // Parse the content
  const { start, end } = svast.html;  // Extract the HTML part from Svelte file
  const string = content.slice(start, end);  // Get the markdown part as string
  const htmlContent = await markdownToHtml(string);  // Convert markdown to HTML

  return {
    code: content.replace(string, htmlContent),  // Replace markdown content with HTML
  };
}

// Custom Svelte preprocessor for markdown
export default function markdown() {
  return {
    markup: async ({ content }) => {
      const result = await remark().use(remarkHtml).process(content);
      return {
        code: result.toString()
      };
    }
  };
}
