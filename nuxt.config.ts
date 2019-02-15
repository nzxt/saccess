const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const i18n = require('./config/i18n')
const pkg = require('./package')

const isDev: Boolean = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'spa', // or 'universal'
  modern: !isDev,

  /*
  ** Setting process environment
  */
  env: {
    PKG_NAME: pkg.name,
    PKG_DESCRIPTION: pkg.description,
    PKG_VERSION: pkg.version
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '[SAC]cess', // pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Exo+2:300,400,500,700'
      }
    ]
  },

  /*
  ** Manifest
  */
  manifest: {
    name: "[SAC] Nuxt.JS+Typescript",
    short_name: "Nuxt+TS",
    description: "[SAC] Nuxt.JS template built driven by Typescript",
    // theme_color: "#188269"
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/axios',
    // '@/plugins/i18n',
    '@/plugins/vuetify',
    '@/plugins/noty',
    '@/plugins/hotkey',
    '@/plugins/flag-icon',
    '@/plugins/tasty-burger-button',
    '@/plugins/nuxt-client-init'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    ['nuxt-i18n', i18n],
    ['@nuxtjs/moment', { locales: ['es-us', 'ru', 'uk'], plugin: true }]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    debug: isDev
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables']
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }

      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: '@kazupon/vue-i18n-loader'
      })
    }
  }
}
