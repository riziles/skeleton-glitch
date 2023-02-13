import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	
  assetsInclude: ['**/*.hdr',"**/*.JPG","**/*.pdf",'*.pdf'],
	plugins: [sveltekit()]
};

export default config;
