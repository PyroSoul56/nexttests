import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center: true,
		padding: '15px',
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: "1280px",
		}
	},
	fontFamily: {
		primary: 'var(--font-jetbrainsMono)',
	},
  	extend: {
  		colors: {
			primary: '#1c1c22',
			accent: {
				DEFAULT: '#dede52',
				hover: '#ffee00',
			},
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: "var(--radix-accordion-content-height)" },
			},
			'accordion-up': {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: '0' },
			}
		},
		animation: {
			'accordion-down': 'accordion-down 200ms ease-out',
			'accordion-up': 'accordion-up 200ms ease-out',
		}
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	addVariablesForColors,
],
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }

export default config;
