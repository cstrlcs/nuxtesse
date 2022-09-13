import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
  ],
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [],
    style: [],
    script: [],
    noscript: [],
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
  },
  ssr: false,
  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        strict: true,
        strictNullChecks: true,
        forceConsistentCasingInFileNames: true,
        noUnusedParameters: true,
        noImplicitReturns: true,
        types: ['@pinia/nuxt'],
      },
    },
  },
  experimental: {
    reactivityTransform: true,
  },
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
})
