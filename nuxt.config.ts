// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Use the Nuxt 4 app folder as the source root so `pages/` resolves to `app/pages/`
  // (otherwise Nuxt looks for `./pages` at the project root and disables file routing).
  srcDir: 'app',
  pages: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/tailwind.css']
})
