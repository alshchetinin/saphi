// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/image",
  ],
  colorMode: {
    classSuffix: "",
  },
  content: {
    highlight: {
      theme: {
        default: "github-light",
        // Theme used if `html.dark`
        dark: "github-dark",
      },
    },
  },

  compatibilityDate: "2024-07-22",
});
