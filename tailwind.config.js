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
					light: '#A7B5Bc',
					medium: '#555E66',
					DEFAULT: '#2F353F',
					dark: '#1B1C1E',
					black: '#0D1016'
				},
				supagreen: {
					light: '#269BA8',
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
