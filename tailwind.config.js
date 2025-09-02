/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          500: '#4169E1', // lighter midnight blue
          600: '#191970', // classic midnight blue
          700: '#151B54', // darker midnight blue
        },
      },
    },
  },
  plugins: [],
}
