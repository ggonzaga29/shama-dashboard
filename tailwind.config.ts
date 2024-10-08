import colors from './src/theme/colors';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
const { nextui } = require('@nextui-org/theme');

const config = {
  darkMode: ['class'],
  mode: 'jit',
  content: [
    'app/**/*.{ts,tsx}',
    'src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(button|calendar|date-input|date-picker|image|spinner|ripple|popover).js',
    // './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'heading-foreground': 'hsl(var(--heading-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        navigation: {
          DEFAULT: 'hsl(var(--navigation))',
          foreground: 'hsl(var(--navigation-foreground))',
          'button-active': 'hsl(var(--navigation-button-active))',
          'button-active-foreground':
            'hsl(var(--navigation-button-active-foreground))',
          'button-hover': 'hsl(var(--navigation-button-hover))',
          'button-active-hover': 'hsl(var(--navigation-button-active-hover))',
          'button-foreground': 'hsl(var(--navigation-button-foreground))',
          'separator-foreground': 'hsl(var(--navigation-separator-foreground))',
        },
        table: {
          DEFAULT: 'hsl(var(--table))',
          header: 'hsl(var(--table-header))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  safelist: [
    {
      pattern: /^col-span-([1-9]|1[0-2])$/,
    },
    {
      pattern: /^grid-cols-([1-9]|1[0-2])$/,
    },
  ],
  plugins: [
    require('tailwindcss-animate'),
    nextui({
      layout: {
        radius: {
          small: '0px',
          medium: '0px',
          large: '0px',
        },
      },
    }),
  ],
} satisfies Config;

export default config;
