<template>
  <Home></Home>
</template>

<script>
  import LangSwitcher from '../components/LangSwitcher'
  import Home from '~/components/Home/Home.vue'

  export default {
    head () {
      return {
        title: this.$t('index.title'),
        meta: [
          { name: 'theme-color', content: '#20c0b1' },
          { property: 'og:title', content: this.$t('index.title') },
          { property: 'og:description', content: this.$t('index.subtitle') },
          { hid: 'description', name: 'description', content: this.$t('index.subtitle') },
          { property: 'og:url', content: 'https://apu314.com/' }
        ]
      }
    },
    data () {
      return {
        title: this.$t('index.title')
      }
    },
    components: {
      LangSwitcher,
      Home
    },
    layout: 'home',
    /*nuxtI18n: {
      paths: {
        es: '/index',
        en: '/en'
      }
    }*/
  }
</script>

