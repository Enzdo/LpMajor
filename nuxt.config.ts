// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // SSR pour génération statique (SEO optimal)
  ssr: true,

  // Modules
  modules: ['@nuxtjs/tailwindcss'],

  // Configuration pour Vercel
  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // Configuration de l'app
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Major | D\'étudiant moyen à numéro 1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Major - L\'outil universitaire le plus puissant jamais créé. Pré-inscris-toi maintenant pour bénéficier d\'un tarif réduit à vie.'
        },
        // Open Graph
        { property: 'og:title', content: 'Major | D\'étudiant moyen à numéro 1' },
        { property: 'og:description', content: 'L\'app qui transforme tes révisions en jeu et te propulse dans le top 1%.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Major | D\'étudiant moyen à numéro 1' },
        { name: 'twitter:description', content: 'L\'app qui transforme tes révisions en jeu et te propulse dans le top 1%.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // CSS - Tailwind + animations
  css: ['~/assets/css/animations.css']
})

