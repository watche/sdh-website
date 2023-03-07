import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
import nodeAdapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: nodeAdapter(),
    alias: {
      '$components': 'src/components',
      '$routes': 'src/routes',
      '$stores': 'src/stores',
      '$constants': 'src/constants',
      '$assets': 'src/assets',
      '$actions': 'src/actions',
      '$data': 'src/data',
      '$utils': 'src/utils'
    }
	}
};

export default config;
