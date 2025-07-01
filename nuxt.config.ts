export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.GEMINI_API_KEY
    }
  },
  app: {
    head: {
      title: 'Vireak Buntham - Slide Manager',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional slide and advertising management system' }
      ]
    }
  },
  ssr: false // For SPA mode to match React behavior
})