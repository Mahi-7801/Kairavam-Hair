/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FCFAF7',
          100: '#FAF6F2',
          200: '#F4EDE6',
          300: '#DBC1AC',
          400: '#DBC1AC',
          500: '#A68263',
          600: '#8E6E52',
          700: '#755B43',
          800: '#5C4835',
          900: '#443526',
        },
        emerald: {
          50: 'rgba(52, 79, 57, 0.06)',
          100: '#E8EDE9',
          200: '#C5CFC7',
          300: '#9EADA1',
          400: '#6E8272',
          500: '#344F39',
          600: '#2C4330',
          700: '#243728',
          800: '#1C2B1F',
          900: '#141F16',
        },
        clinic: {
          white: '#FFFFFF',
          cream: '#FCFAF7',
          dark: '#242E28',
          gray: '#808A83',
          light: '#FAF6F2',
        },
      },
      fontFamily: {
        serif: ['"Google Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Google Sans"', 'system-ui', '-apple-system', 'sans-serif'],
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(166, 130, 99, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(166, 130, 99, 0)' },
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
        'gold-gradient': 'linear-gradient(135deg, #A68263 0%, #8E6E52 50%, #A68263 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #344F39 0%, #2C4330 50%, #243728 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 30px rgba(166, 130, 99, 0.15)',
        'gold-lg': '0 10px 60px rgba(166, 130, 99, 0.2)',
        'emerald': '0 4px 30px rgba(52, 79, 57, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'premium': '0 10px 40px -12px rgba(52, 79, 57, 0.08)',
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '28px',
        xl: '28px',
        '2xl': '28px',
      },
    },
  },
  plugins: [],
};
