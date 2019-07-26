<template>

	<v-jumbotron color="grey lighten-2">
		<v-container fill-height>
			<v-layout align-center>
				<v-flex>
				  <h3 class="display-3">Portfolio</h3>
					<span class="subheading">In this page I will be posting some of my projects and practices that I've done to show them to the world.
					By clicking in the buttons bellow you can access and see them in production mode.
					If you want to see the sources, please go to <a href="https://github.com/apu314" target="_balnk">my Github Profile</a></span>

					<v-divider class="my-3"></v-divider>

					<div class="title mb-3">Vuejs & Itunes API</div>
					<v-btn large color="primary" class="mx-0" href="https://apu314.com/apps/busqueda-itunes" target="_blank">Click me!</v-btn>

					<v-divider class="my-3"></v-divider>

          <div class="title mb-3">Vuejs Poster Shop Imgur API</div>
          <v-btn large color="primary" class="mx-0" href="https://apu314.com/apps/busqueda-itunes" target="_blank">Click me!</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</v-jumbotron>

</template>

<script>
  export default {
    name: 'portfolio',
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