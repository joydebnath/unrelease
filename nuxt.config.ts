import tailwindForms from '@tailwindcss/forms'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      plugins: [tailwindForms]
    }
  }
})
