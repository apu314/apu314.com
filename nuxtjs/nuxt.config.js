const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')
const i18nExtensions = require('vue-i18n-extensions')

import colors from 'vuetify/es5/util/colors'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs : {
      lang: 'es'
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      { bane: 'google', content: 'notranslate' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Vue Plugins
  */
  plugins: [
    { src: '~/plugins/vue-i18n.js', injectAs: 'i18n' }
  ],
  /**
   * Vue CSS
   */
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    'cookie-universal-nuxt',
    '@nuxtjs/eslint-module'
  ],
  /* '@nuxtjs/vuetify',
     '@nuxtjs/eslint-module'
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: colors.blue.darken4
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    // babel: {
    //   plugins: [
    //     ["transform-imports", {
    //       "vuetify": {
    //         "transform": "vuetify/es5/components/${member}",
    //         "preventFullImport": true
    //       }
    //     }]
    //   ]
    // },
    /*
    ** Vendor files
    */
    // vendor: [
    //   '~/plugins/vuetify.js',
    //   'vue-i18n'
    // ],
    extractCSS: true,
    transpile: [/^vuetify/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
  /**
   * Render options
   */
  render: {
    // confiture `render`
    // see Nuxt.js docs: https://nuxtjs.org/api/configuration-render#bundleRenderer
    bundleRenderer: {
      directives: {
        t: i18nExtensions.directive
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}
