import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from '../i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Try to get the locale stored on localStorage.
  let locale = 'es'
  if (process.BROWSER_BUILD) {
    locale = localStorage.getItem('locale') || 'es'
  }

  const i18n = new VueI18n({
    locale: locale,
    // fallbackLocale: 'es',
    messages: {
      es: locales.es,
      en: locales.en
    }
  })

  app.i18n = i18n
}
