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
					label: 'Domains',
					autogenerate: { directory: 'domains' },
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Orcfax oracle', link: '/domains/orcfax/', },
						{ label: 'Cardano network', link: '/domains/cardano/', },
						{ label: 'Arweave network', link: '/domains/arweave/', },
						{ label: 'Blockchain technology', link: '/domains/blockchain/', },
						{ label: 'Software engineering', link: '/domains/software/', },
						{ label: 'Archival science', link: '/domains/archives/', },
						{ label: 'Epistemology', link: '/domains/epistemology/', },
					],
				},
				{
					label: 'Requirements',
					autogenerate: { directory: 'requirements' },
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
				{
					label: 'Authors',
					autogenerate: { directory: 'creators' },
				},
			],
		}),
	],
});
