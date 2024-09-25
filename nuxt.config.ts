// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },
  tailwindcss: { exposeConfig: true, injectPosition: "last" },
  css: ["vue3-toastify/dist/index.css"],
  imports: {
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "vue3-toastify", name: "toast", as: "useToast" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
    ],
  },
  app: {
    head: {
      title: "Templates",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/icon.png" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },
  mongoose: {
    uri: process.env.MONGODB_URI || "mongodb://root:lRWKZT4iJn8S8tX3Rud3kLc70qU9AJzwpQRJYwA5K7bOAYGexpmoRfo4vJGgw7RK@d0go8s8c80840gosgkkkcgs8:27017/?directConnection=true",
  },
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 3003,      // Set your desired port
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "radix-vue/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@samk-dev/nuxt-vcalendar",
    "nuxt-mongoose",
  ],
});
