<template>
  <v-app id="inspire">
    <v-container fluid flat fill-height>
      <v-layout row wrap align-start class="clase" img="/img/bg-landing.jpg">
        <!-- Botones Memú izquierda, idioma derecha -->
        <v-toolbar xs12 color="transparent" flat>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-spacer></v-spacer>
          <v-menu :nudge-width="100" left>
            <v-toolbar-title slot="activator">
              <span> {{ selectedLang }}</span>
              <v-icon light>arrow_drop_down</v-icon>
            </v-toolbar-title>
            <v-list>
              <v-list-tile v-for="lang in languages" :key="lang.shortTitle" @click="selectLang(lang.shortTitle)">
                <v-list-tile-title v-text="lang.title"></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>
        <!-- Contenido -->
        <v-flex d-flex xs12 text-xs-center align-center>
          <v-card row wrap align-center color="transparent" flat>
            <v-flex xs12>
              <h1>APU314</h1>
            </v-flex>
            <v-flex xs12>
              <h2># Full Stack Developer</h2>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style lang="css" scoped>
  .clase {
    background: linear-gradient(0deg, rgba(242, 255, 174, 0.36),rgba(242, 255, 174, 0.36)), url(/img/bg-landing-palmera.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    filter: opacity(90%);
  }

</style>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false, // Nav Drawer default: closed.
        fixed: false,
        miniVariant: false,
        items: [
          { icon: 'home', title: 'blog', to: '/' },
          { icon: 'work', title: 'portfolio', to: '/portfolio' }
          // { icon: 'content_paste', title: 'cv', to: '/cv' },
          // { icon: 'build', title: 'services', to: '/services' },
          // { icon: 'person', title: 'contact', to: '/contact' }
        ],
        languages: [
          { title: 'Español', shortTitle: 'es' },
          { title: 'English', shortTitle: 'en' }
        ],
        showMenu: 'false',
        selectedLang: 'es',
        title: 'apu314'
      }
    },
    methods: {
      selectLang (lang) {
        if (lang === this.$i18n.locale) {
          return lang
        }
        this.selectedLang = lang
        this.$i18n.locale = lang
        localStorage.setItem('locale', lang)
      }
    }
  }
</script>
