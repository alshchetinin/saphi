// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxt/icon",
    "@artmizu/yandex-metrika-nuxt",
  ],
  yandexMetrika: {
    id: "98074547",
    initParams: {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      ecommerce: "dataLayer",
    },
  },
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
