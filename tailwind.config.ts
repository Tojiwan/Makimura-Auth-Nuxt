import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}', // Include all components
    './layouts/**/*.{vue,js,ts}',    // Include all layouts
    './pages/**/*.{vue,js,ts}',      // Include all pages
    './plugins/**/*.{js,ts}',        // Include plugins
    './app.vue',                     // Include the main app file
    './nuxt.config.{js,ts}'          // Include Nuxt config if needed
  ],
  theme: {
    extend: {
      colors: {
        'main': '#00b14f',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'], // Add custom font family
        bebas: ['Bebas Neue', 'cursive'],      // Add another custom font family
      },
    },
  },
  plugins: []
}
