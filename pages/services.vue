<template>
    <div>
        <h1>Services</h1>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Services'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Services offered' }
      ]
    }
  },
  name: 'services'
}
</script>

<style scoped>

</style>