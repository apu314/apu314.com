import Navigation from './shared/navigation.js'
import Footer from './shared/footer.js'

import ErrorPage from './pages/error.js'

import Index from './pages/index.js'
import Portfolio from './pages/portfolio.js'
import Services from './pages/services.js'
import Contact from './pages/contact.js'

export default {
  en: {
    ...Navigation.en,
    ...Footer.en,

    ...ErrorPage.en,

    ...Index.en,
    ...Portfolio.en,
    ...Services.en,
    ...Contact.en
  },
  es: {
    ...Navigation.es,
    ...Footer.es,

    ...ErrorPage.es,

    ...Index.es,
    ...Portfolio.es,
    ...Services.en,
    ...Contact.es
  }
}
