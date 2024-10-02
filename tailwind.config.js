/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{html, js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '250px',
      sm: '540px',
      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      colors: {
        color: {
          primaryText: "#1E1E1E",
          error: "#DC3C3C",
        },
        background: {
            primary: "#C1DCDC",
          secondary: "#869F9F",
        }
      },
      fontSize: {
        '3xs': '8px',
        '2xs': '10px',
        xxs: '0.625rem', //10px
        xs: '0.75rem', //12px,
        sm: '0.875rem', //14px,
        md: '1rem', //16px,
        lg: '1.125rem', //18px,
        xl: '1.25rem', //20px,
        '2xl': '1.375rem', //22px,
        '3xl': '1.5rem' //24px,
      }
    }
  },
  plugins: []
};
