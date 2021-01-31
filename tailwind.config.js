module.exports = {
	purge: ['./templates/**/*.twig'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '650px',
			md: '768px',
			lg: '960px',
			xl: '1280px',
			'2xl': '1536px',
		},
		colors: {
			black: '#111111',
			white: '#ffffff',
			highlight: '#ec2d5b',
			highlightSoft: '#e04171',
			darkGrey: '#222222',
			grey: '#aaaaaa',
			lightGrey: '#eeeeee',
			navy: '#0f3d73',
			darkNavy: '#292752',
			midnightNavy: '#15134f',
			slate: '#708090',
			light: '#f7f7f7',
			mint: '#41e0a5',
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			serif: ['PlayfairDisplay', 'serif'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
