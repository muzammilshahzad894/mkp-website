export default defineNuxtConfig({
  srcDir: 'app',
  pages: true,

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  vite: {
    optimizeDeps: {
      include: ['lucide-vue-next'],
    },
  },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;500;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
})