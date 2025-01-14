import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif',
  				'Apple Color Emoji',
  				'Segoe UI Emoji',
  				'Segoe UI Symbol',
  				'Noto Color Emoji'
  			],
  			monlam: [
  				'Monlam',
  				'sans-serif'
  			],
  			poppins: [
  				'Inter',
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: {
  				'50': '#FBF9F4',
  				'100': '#F6F3E9',
  				'200': '#EFE9D7',
  				'300': '#E5DABD',
  				'400': '#DBCCA3',
  				'500': '#D0BC86',
  				'600': '#C4AC69',
  				'700': '#B39646',
  				'800': '#937B39',
  				'900': '#6E5C2B',
  				'950': '#493D1D',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#E2EDFD',
  				'100': '#C5DAFB',
  				'200': '#8CB5F8',
  				'300': '#5290F4',
  				'400': '#196BF1',
  				'500': '#0C53C5',
  				'600': '#063176',
  				'700': '#052250',
  				'800': '#031635',
  				'900': '#020C1D',
  				'950': '#01060E',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			success: {
  				'50': '#EDF7EE',
  				'100': '#DBF0DC',
  				'200': '#B8E0B9',
  				'300': '#94D196',
  				'400': '#6DC070',
  				'500': '#4CAF50',
  				'600': '#3C8B3F',
  				'700': '#2E6B30',
  				'800': '#1F4720',
  				'900': '#0F2410',
  				'950': '#081208',
  				DEFAULT: '#3C8B3F'
  			},
  			failure: {
  				'50': '#FCF2F2',
  				'100': '#FAE6E6',
  				'200': '#F4CCCC',
  				'300': '#EDABAB',
  				'400': '#E48181',
  				'500': '#D32F2F',
  				'600': '#C22929',
  				'700': '#AD2424',
  				'800': '#871C1C',
  				'900': '#611414',
  				'950': '#4C1010',
  				DEFAULT: '#D32F2F'
  			},
  			neutral: {
  				'50': '#F2F2F2',
  				'100': '#EDEDED',
  				'200': '#E0E0E0',
  				'300': '#D4D4D4',
  				'400': '#C4C4C4',
  				'500': '#B3B3B3',
  				'600': '#A1A1A1',
  				'700': '#8C8C8C',
  				'800': '#707070',
  				'900': '#454545',
  				'950': '#171717',
  				DEFAULT: '#FFFFFF'
  			},
  			surface: {
  				light: '#FBF9F4',
  				dark: '#01060E'
  			},
  			light_text: {
  				default: '#171717',
  				secondary: '#707070',
  				tertiary: '#A1A1A1'
  			},
  			dark_text: {
  				default: '#F2F2F2',
  				secondary: '#E0E0E0',
  				tertiary: '#B3B3B3'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))',
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			input: 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.25)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
