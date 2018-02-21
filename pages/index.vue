<template>
  <Home></Home>
</template>

<script>
  import Home from '~/components/Home/Home.vue'

  export default {
    data () {
      return {
        title: 'apu314'
      }
    },
    head () {
      return {
        title: this.$t('home.title'),
        meta: [
          { name: 'theme-color', content: '#20c0b1' },
          { hid: 'description', name: 'description', content: 'Home page - apu314.com' },
          { property: 'og:title', content: this.$t('home.title') },
          { property: 'og:description', content: this.$t('home.subtitle') },
          { property: 'og:url', content: 'https://apu314.com/' }
        ]
      }
    },
    components: {
      Home
    }
  }
</script>

