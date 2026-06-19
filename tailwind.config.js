/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#D4A853',
          600: '#B8860B',
          700: '#A67C00',
          800: '#856D0E',
          900: '#713F12',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#064E3B',
          600: '#047857',
          700: '#065F46',
          800: '#064E3B',
          900: '#022C22',
        },
        clinic: {
          white: '#FAFAFA',
          cream: '#F5F0E8',
          dark: '#1A1A2E',
          gray: '#6B7280',
          light: '#F9FAFB',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'hair-grow': 'hairGrow 3s ease-out forwards',
        'particle': 'particle 8s ease-in-out infinite',
        'counter': 'counter 2s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 168, 83, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(212, 168, 83, 0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        hairGrow: {
          '0%': { height: '0%', opacity: '0' },
          '100%': { height: '100%', opacity: '1' },
        },
        particle: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.3' },
          '25%': { transform: 'translate(10px, -20px) rotate(90deg)', opacity: '0.6' },
          '50%': { transform: 'translate(-5px, -40px) rotate(180deg)', opacity: '0.3' },
          '75%': { transform: 'translate(15px, -20px) rotate(270deg)', opacity: '0.6' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4A853 0%, #B8860B 50%, #D4A853 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #065F46 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 30px rgba(212, 168, 83, 0.15)',
        'gold-lg': '0 10px 60px rgba(212, 168, 83, 0.2)',
        'emerald': '0 4px 30px rgba(6, 78, 59, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
