<template>
    <div>
        <h1>Contact</h1>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Contact'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Do you want some contact information about apu314?' }
      ]
    }
  },
  name: 'contact'
}
</script>

<style scoped>

</style>