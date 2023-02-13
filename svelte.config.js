import adapter from '@sveltejs/adapter-netlify';
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkMath from 'remark-math';
import rehypeKatexSvelte from 'rehype-katex-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions:[".svelte",".svx",".md"],
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex({ extensions: ['.svx', '.md'],

		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatexSvelte] })
	],
};

export default config;
