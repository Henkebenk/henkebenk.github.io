/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,vue}', // Adjust this to your project's structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui'), // Add this line
  ],
}
