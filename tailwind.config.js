/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        xs: ['14px', '24px'],    // Small: 16px font with 20px line height
        sm: ['16px', '24px'],    // Small: 16px font with 20px line height
        md: ['20px', '28px'],    // Medium: 20px font with 28px line height
        lg: ['24px', '32px'],    // Large: 24px font with 32px line height
        xl: ['30px', '36px'],    // Extra Large: 30px font with 36px line height
        '2xl': ['36px', '40px'], // 2XL: 36px font with 40px line height
        '3xl': ['42px', '48px'], // 3XL: 42px font with 48px line height
        '4xl': ['48px', '56px'], // 4XL: 48px font with 56px line height
        '5xl': ['60px', '68px'], // 5XL: 60px font with 68px line height
        '6xl': ['72px', '80px'], // 6XL: 72px font with 80px line height
        '7xl': ['96px', '104px'] // 7XL: 96px font with 104px line height
    },
    },
  },
  plugins: [],
};
