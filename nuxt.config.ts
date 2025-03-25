// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@vesp/nuxt-fontawesome',
    '@vueuse/nuxt',
    'nuxt-vuefire'
  ],
  runtimeConfig: {
    public: {
      appName: process.env.NUXT_APP_NAME || 'Makimura Ramen',
      appUrl: process.env.NUXT_APP_URL || 'http://127.0.0.1:1173',
      apiUrl: process.env.NUXT_API_URL || 'http://localhost:8888',
    }
  },
  css: ["~/assets/css/main.css"],
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
  fontawesome: {
    icons: {
      solid: [

      ],
      regular: [

      ],
      brands: [

      ]
    }
  },
  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: true
    },
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
    }
  }
})