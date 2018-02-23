<template>
  <v-app light>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="miniVariant = !miniVariant"
            >
              <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-divider></v-divider>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-menu :nudge-width="100" offset-y>
        <v-toolbar-title slot="activator">
          <span>{{ selectedLang }}</span>
          <v-icon light>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile v-for="lang in languages" :key="lang.shortTitle" @click="selectLang(lang.shortTitle)">
            <v-list-tile-title v-text="lang.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer height="auto" class="grey darken-3">
      <v-layout row wrap justify-center>
        <v-btn
            color="white"
            flat
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
        >
          {{ item.title }}
        </v-btn>
        <v-flex xs12 py-3 text-xs-center white--text>
          &copy; {{ new Date().getFullYear() }} — <strong>apu314.com</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false, // Nav Drawer default: closed.
        fixed: false,
        items: [
          { icon: 'home', title: this.$t('navigation.blog'), to: '/' },
          { icon: 'work', title: this.$t('navigation.portfolio'), to: '/projects' },
          { icon: 'content_paste', title: this.$t('navigation.cv'), to: '/cv' },
          { icon: 'build', title: this.$t('navigation.services'), to: '/services' },
          { icon: 'person', title: this.$t('navigation.contact'), to: '/contact' }
        ],
        miniVariant: false,
        languages: [
          { title: 'Español', shortTitle: 'Es' },
          { title: 'English', shortTitle: 'En' }
        ],
        selectedLang: 'Es',
        title: 'apu314'
      }
    },
    methods: {
      selectLang (lang) {
        if (lang === this.$i18n.locale) {
          return
        }
        this.selectedLang = lang
        this.$i18n.locale = lang
        localStorage.setItem('locale', lang)
      }
    }
  }
</script>
