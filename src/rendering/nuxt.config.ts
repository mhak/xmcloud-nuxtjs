// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  // components: ['~/src/components'],
  devtools: { enabled: true },
  alias: {
    "@/": "src/",
  }
})
