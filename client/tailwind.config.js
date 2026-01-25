/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
          light: '#a78bfa',
        },
        secondary: {
          DEFAULT: '#ec4899',
          dark: '#db2777',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'headBob': 'headBob 3s ease-in-out infinite',
        'blink': 'blink 4s infinite',
        'typeLeft': 'typeLeft 0.5s ease-in-out infinite',
        'typeRight': 'typeRight 0.5s ease-in-out infinite 0.25s',
        'bounce-soft': 'bounceSoft 0.6s ease',
        'pulse-glow': 'pulseGlow 2s ease infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        headBob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        blink: {
          '0%, 48%, 52%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typeLeft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typeRight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.4)' },
          '50%': { boxShadow: '0 0 0 4px rgba(59, 130, 246, 0)' },
        },
        gradientShift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(5%, 5%) rotate(120deg)' },
          '66%': { transform: 'translate(-5%, 5%) rotate(240deg)' },
        },
      },
    },
  },
  plugins: [],
}
