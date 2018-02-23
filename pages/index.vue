<template>
  <Home></Home>
</template>

<script>
  import Home from '~/components/Home/Home.vue'

  export default {
    data () {
      return {
        title: this.$t('index.title')
      }
    },
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
    components: {
      Home
    }
  }
</script>

