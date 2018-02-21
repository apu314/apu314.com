
export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  // vue-i18n
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
