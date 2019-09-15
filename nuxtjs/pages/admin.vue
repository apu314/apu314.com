<template>

</template>

<script>
  import LangSwitcher from '../components/LangSwitcher'

  export default {
    name: 'admin',
    data () {
      return {
        //title: this.$t('index.title')
        title: 'Admin dashboard - apu314'
      }
    },
    head () {
      return {
        // title: this.$t('index.title'),
        title: 'Admin dashboard - apu314',
        meta: [
          { name: 'theme-color', content: '#20c0b1' },
          { property: 'og:title', content: this.$t('index.title') },
          { property: 'og:description', content: this.$t('index.subtitle') },
          { hid: 'description', name: 'description', content: this.$t('index.subtitle') },
          { property: 'og:url', content: 'https://apu314.com/' }
        ]
      }
    },
    components: {
      LangSwitcher
    },
    layout: 'admin'
  }
</script>

