export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/theme/app.css'],
  runtimeConfig: {
    public: {
      geminiApiKey: process.env.GEMINI_API_KEY
    }
  },
  typescript: {
    typeCheck: false
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  },
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      title: 'Vireak Buntham - Slide Manager',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com' }
      ]
    }
  }
})