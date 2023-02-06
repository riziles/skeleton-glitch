import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	
  assetsInclude: ['**/*.hdr'],
	plugins: [sveltekit()]
};

export default config;
