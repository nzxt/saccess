import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import '@mdi/font/css/materialdesignicons.css'
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css'

import en from 'vuetify/es5/locale/en'
import ru from 'vuetify/es5/locale/ru'
import uk from 'vuetify/es5/locale/uk'

import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify, {
  iconfont: 'mdi', // 'zmdi'
  lang: {
    locales: { en, ru, uk },
    current: 'en'
  },
  theme: {
    // All keys will generate theme styles,
    primary: colors.blue.darken2,
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.deepOrange.darken1,
    error: colors.red.accent4,
    success: colors.green.accent3,
    // Here we add a custom `tertiary` color
    tertiary: colors.lightBlue.lighten3
  }
  // customProperties: true
})
