/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-card': '#1a1a1a',
        'bg-card-hover': '#222222',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-muted': '#666666',
        'accent-yellow': '#f0b90b',
        'accent-yellow-hover': '#d4a50a',
        'accent-yellow-dim': 'rgba(240, 185, 11, 0.1)',
        'accent-green': '#00c853',
        'accent-red': '#ff1744',
        'border-color': '#2a2a2a',
        'border-light': '#333333',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['"Courier New"', 'monospace'],
      },
      boxShadow: {
        'yellow-lg': '0 8px 30px rgba(240, 185, 11, 0.3)',
        'yellow-xl': '0 12px 40px rgba(240, 185, 11, 0.5)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(240, 185, 11, 0.0)' },
          '50%': { boxShadow: '0 0 25px rgba(240, 185, 11, 0.45)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.8)' },
          '60%': { transform: 'translateY(-5px) scale(1.02)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        scrollMemes: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInOut: {
          '0%': { opacity: '0', transform: 'translateX(-50%) translateY(5px)' },
          '20%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
          '80%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
          '100%': { opacity: '0', transform: 'translateX(-50%) translateY(-5px)' },
        },
      },
      animation: {
        glow: 'glow 2.6s ease-in-out infinite',
        pulse: 'pulse 2s infinite',
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        bounceIn: 'bounceIn 0.6s ease',
        scrollMemes: 'scrollMemes 30s linear infinite',
        fadeInOut: 'fadeInOut 2s ease',
      },
    },
  },
  plugins: [],
};
