// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/scss/main.scss'],

  app: {
    head: {
      link: [
        // Favicons:
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon/favicon-96x96.png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon/favicon.svg",
        },
        {
          rel: "shortcut icon",
          href: "/favicon/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
      ],
      meta: [
        {
          name: "apple-mobile-web-app-title",
          content: "Robin Uhl – Homepage",
        },
        {
          name: "description",
          content: "Homepage von Robin Uhl",
        },
        {
          name: "keywords",
          content: "Robin Uhl, Homepage, Portfolio, Web Development, Web Design, Web Development Agency, Web Design Agency, Web Development Company, Web Design Company, Web Development Services, Web Design Services, Web Development Tools, Web Design Tools, Web Development Technologies, Web Design Technologies, Web Development Frameworks, Web Design Frameworks, Web Development Libraries, Web Design Libraries, Web Development Platforms, Web Design Platforms, Web Development Tools, Web Design Tools, Web Development Technologies, Web Design Technologies, Web Development Frameworks, Web Design Frameworks, Web Development Libraries, Web Design Libraries, Web Development Platforms, Web Design Platforms",
        },
        {
          name: "author",
          content: "Robin Uhl",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "googlebot",
          content: "index, follow",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
});
