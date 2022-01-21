module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				cormorant: 'Cormorant serif',
				inter: 'Inter'
			},
			colors: {
				supadark: {
					light: '#303030',
					DEFAULT: '#1F1F1F',
					dark: '#1B1C1E',
				},
				supagreen: {
					light: '#DEFFEE',
					DEFAULT: '#67E9F1',
					dark: '#79D38A',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
