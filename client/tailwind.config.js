/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#d0d4d8',
					200: '#a1a9b0',
					300: '#727f89',
					400: '#435461',
					DEFAULT: '#14293a',
					600: '#10212e',
					700: '#0c1923',
					800: '#081017',
					900: '#04080c',
				},
				secondary: {
					DEFAULT: '#dc12ad',
				},
				reds: {
					DEFAULT: '#cc1b3c',
				},
			},
		},
	},
	plugins: [],
};
