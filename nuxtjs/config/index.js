import es from '../i18n/es-ES'
import en from '../i18n/en-EN'

export const I18N= {
  locales: [
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español'
    },
    {
      code: 'en',
      iso: 'en-EN',
      name: 'English'
    }
  ],
  defaultLocale: 'es',
  lazy: true,
  seo: true,
  vueI18nLoader: true,
  baseUrl: 'apu314.com',
  strategy: 'prefix_except_default',
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
    index: {
      es: '/index',
      en: '/en/index'
    },
    admin: {
      es: '/admin',
      en: '/en/admin'
    },
    portfolio: {
      es: '/portfolio',
      en: '/en/portfolio'
    },
  },
  vueI18n: {
    fallbackLocale: 'es',
    messages: { es, en }
  }
}