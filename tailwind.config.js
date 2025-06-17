/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#f0f9f0',
  				'100': '#d4f0d4',
  				'200': '#a8e1a8',
  				'300': '#7bd27b',
  				'400': '#4fc34f',
  				'500': '#36a336',
  				'600': '#2b812b',
  				'700': '#1f5f1f',
  				'800': '#144014',
  				'900': '#0a210a',
  				'950': '#051805',
  				DEFAULT: '#006837', // Primary Brand Green
  				foreground: '#ffffff' // White text for contrast
  			},
  			dark: {
  				DEFAULT: '#004d29', // Dark Green for navigation
  				foreground: '#ffffff' // White text for contrast
  			},
  			highlight: {
  				DEFAULT: '#ffd700', // Highlight color
  				foreground: '#000000' // Black text for contrast
  			},
  			secondary: {
  				'50': '#f0f9f5',
  				'100': '#d4f0e2',
  				'200': '#a8e1c5',
  				'300': '#7bd2a8',
  				'400': '#4fc38b',
  				'500': '#36a36e',
  				'600': '#2b8158',
  				'700': '#1f5f41',
  				'800': '#14402b',
  				'900': '#0a2116',
  				'950': '#05180b',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter var',
  				'sans-serif'
  			],
  			display: [
  				'Lexend',
  				'sans-serif'
  			]
  		},
  		maxWidth: {
  			'8xl': '88rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
      require("tailwindcss-animate")
],
};
