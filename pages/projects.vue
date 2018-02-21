<template>
  <div>
    <h1>Portfolio</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Portfolio - apu314'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'Portfolio with the projects made by apu314.com' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>