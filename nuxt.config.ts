// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // TypeScript configuration  
  typescript: {
    strict: false,
    typeCheck: false  // Disable for now to get the app running
  },

  // CSS Framework
  css: ['~/assets/css/main.css'],
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    geminiApiKey: process.env.GEMINI_API_KEY,
    // Public keys (exposed to client-side)
    public: {
      apiKey: process.env.API_KEY || process.env.GEMINI_API_KEY
    }
  },

  // Build configuration
  build: {
    transpile: ['lucide-vue-next']
  },

  // App configuration
  app: {
    head: {
      title: 'Vireak Buntham - Slide Manager',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional slide and advertising management system' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // SSR configuration - enable for better SEO
  ssr: true,

  // Auto-import configuration
  imports: {
    dirs: [
      'composables/**',
      'utils/**'
    ]
  }
})