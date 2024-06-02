/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#08182F',
        },
        secondary: {
          alertenative: '#091B34',
        },
        textcolor: {
          primary: "#f8fafc",
          secondary: '#84858E'
        }
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        'h2': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        'h3': ['1.5rem', { lineHeight: '2rem' }], // 24px
        'h4': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        'h5': ['1rem', { lineHeight: '1.5rem' }], // 16px
        'h6': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        // Add custom spacing values
      },
      borderRadius: {
        '4xl': '2rem',
        // Add custom border radius values
      },
      // Extend other settings as needed
    },
  },
  plugins: [],
};


