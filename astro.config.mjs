import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://domain.orcfax.io",
	integrations: [
		starlight({
			title: 'Orcfax Domain',
			logo: {
				src: './src/assets/orcfax-logo.png',
			  },
			customCss: ['./src/styles/custom.css'],
			social: {
				github: 'https://github.com/peterVG/domain',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
