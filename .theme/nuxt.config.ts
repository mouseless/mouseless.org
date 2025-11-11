import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://brand.mouseless.codes/assets/css/secondary.css"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        }
      ]
    }
  },
  content: {
    renderer: {
      anchorLinks: {
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false
      }
    },
    experimental: {
      nativeSqlite: true
    }
  },
  components: {
    global: true,
    dirs: [
      {
        global: true,
        path: "~/components/Prose"
      },
      "~/components"
    ]
  },
  css: ["~/assets/theme.css", "~/assets/components.css"],
  devtools: {
    enabled: false
  },
  dir: {
    public: ".public"
  },
  experimental: {
    payloadExtraction: false
  },
  features: {
    inlineStyles: false
  },
  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxtjs/mdc", "@pinia/nuxt"],
  nitro: {
    prerender: {
      routes: ["/not-found"]
    }
  },
  runtimeConfig: {
    public: {
      authority: "",
      baseUrl: "",
      protocol: ""
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  compatibilityDate: "2024-08-15"
});
