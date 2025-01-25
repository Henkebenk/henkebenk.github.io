// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Roboto: true,
          'Josefin+Sans': true,
          Lato: [100, 300],
          'JetBrains+Mono': [100,200],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
          Inter: '200..700',
          'Crimson Pro': {
            wght: '200..900',
            ital: '200..700',
          }
        }
    }],
  ],
});