// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      googleMapKey: process.env.NUXT_GOOGLE_MAP_KEY || "",
    },
  },

  modules: [
    '@nuxtjs/leaflet',
    'nuxt-aos',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },
  css: [
    '~/assets/css/aos.css',
    '~/assets/css/main.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/style.css',
    '~/assets/css/iconoir.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})