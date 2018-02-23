<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline" v-t="'index.headline'">{{ headLine }}</v-card-title>
        <v-card-text>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque delectus deleniti eaque error eum facilis fuga laboriosam maxime modi quasi quisquam sapiente sint soluta tempora, tempore, vel voluptas voluptate!</p>
          <div class="text-xs-right">
            <em><small>&mdash; apu314</small></em>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      headLine () {
        return this.$t('index.headline')
      }
    }
  }
</script>

<style scoped>

</style>