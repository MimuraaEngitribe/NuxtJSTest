import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/apollo',
  ],
  devtools: { enabled: true },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'YOUR_GRAPHQL_ENDPOINT',
      },
    },
  },
})
