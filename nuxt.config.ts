// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@vesp/nuxt-fontawesome',
    '@vueuse/nuxt'
  ],
  css:["~/assets/css/main.css"],
  googleFonts: {
    families: {
      'League+Spartan': true,
      'Bebas+Neue': true,
    },
    display: 'swap',
    download: false,
    inject: true,
  },
  components: [
    { 
      path: '~/components', 
      pathPrefix: false, 
      global: true 
    },
  ],
  fontawesome:{
    icons:{
      solid:[

      ],
      regular:[

      ],
      brands:[

      ]
    }
  }
})