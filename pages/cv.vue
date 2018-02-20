<template>
    <div>
        <h1>Curriculum Vitae</h1>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'cv'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Curriculum Vitae apu314' }
      ]
    }
  },
  name: 'cv'
}
</script>

<style scoped>

</style>