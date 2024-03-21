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
					label: 'Glossary',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/glossary/intro/', },
						{ label: 'A', link: '/glossary/a/', },
						{ label: 'B', link: '/glossary/b/', },
						{ label: 'C', link: '/glossary/c/', },
						{ label: 'D', link: '/glossary/d/', },
						{ label: 'E', link: '/glossary/e/', },
					],
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
				{
					label: 'Requirements',
					autogenerate: { directory: 'requirements' },
				},
				{
					label: 'Authors',
					autogenerate: { directory: 'creators' },
				},
			],
		}),
	],
});
