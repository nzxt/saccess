module.exports = {
  locales: [
    {
      code: 'en',
      flag: 'us',
      iso: 'en-US',
      name: 'English',
      file: 'en-US.json'
    },
    {
      code: 'ru',
      flag: 'ru',
      iso: 'ru-RU',
      name: 'Русский',
      file: 'ru-RU.json'
    },
    {
      code: 'uk',
      flag: 'ua',
      iso: 'ua-UA',
      name: 'Українська',
      file: 'ua-UA.json'
    }
  ],
  defaultLocale: 'en',
  seo: true,
  lazy: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
  langDir: 'assets/locales/',
  parsePages: false,
  pages: {},
  vueI18n: {
    fallbackLocale: 'en',
    vueI18nLoader: false // If true, vue-i18n-loader is added to Nuxt's Webpack config
  }
}
