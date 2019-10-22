import es from '../i18n/es-ES.js'
import en from '../i18n/en-EN.js'

export const API_ROOT = 'https://apu314.com/api/'

export const I18N = {
  locales: [
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
      file: 'es-ES.js'
    },
    {
      code: 'en',
      iso: 'en-EN',
      name: 'English',
      file: 'en-EN.js'
    }
  ],
  defaultLocale: 'es',
  lazy: true,
  seo: true,
  vueI18nLoader: true,
  langDir: 'i18n/',
  /*baseUrl: 'apu314.com',*/
  /*strategy: 'prefix_except_default',*/
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    alwaysRedirect: true,
    fallbackLocale: 'es'
  },
  onLanguageSwitched: (previous, current) => {
    if (process.client) {
      cookie.serialize('i18n_redirected', current, {
        expires: new Date(new Date() + 365),
        path: '/'
      })
    }
  },
  routes: {
    services: {
      es: '/servicios',
      en: 'services'
    },
    contact: {
      es: '/contacto',
      en: '/contact'
    }
  }/*,
  vueI18n: {
    fallbackLocale: 'es',
    messages: { es, en }
  }*/
}