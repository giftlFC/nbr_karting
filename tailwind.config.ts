import { Zen_Dots } from "next/font/google";
import { Open_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
      fontFamily: {   
        Great_Vibes: ["Great Vibes", "serif"],
        Open_Sans: ["Open Sans", "sans-serif"],
    },
    animation: {
      'fadeIn': 'fadeIn 0.8s ease-in-out',
      'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'pulse-dot': {
        '0%, 100%': { transform: 'scale(1)', opacity: '1' },
        '50%': { transform: 'scale(1.1)', opacity: '0.8' },
      },
    },
    perspective: {
      '1000': '1000px',
    },
    backdropBlur: {
      xs: '2px',
    },
  },
  backgroundSize: {
    'contain': 'contain',
    'cover': 'cover',
  },
  backgroundPosition: {
    'center': 'center',
  },
  backgroundRepeat: {
    'no-repeat': 'no-repeat',
  },
},
plugins: [],
} satisfies Config;
