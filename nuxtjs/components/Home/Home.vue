<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline text-xs-center">{{ $t('index.headline') }}</v-card-title>
        <v-card-text>
          <p>{{ content }}</p>

          <div class="text-xs-right">
            <em><small>&mdash; apu314</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" href="https://github.com/apu314" target="_blank">Github</v-btn>
          <v-btn color="info" href="https://codepen.io/apu314" target="_blank">Codepen</v-btn>
          <v-btn color="error" :to="'/portfolio'">Portfolio</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      headLine () {
        return this.$i18n.t('index.headline')
      },
      content () {
        return this.$i18n.t('index.content')
      }
    }
  }
</script>

<style scoped>

</style>