<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      width="150"
      hide-overlay
    >

      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-btn
                icon
                @click.stop="drawer = !drawer"
            >
              <v-icon v-html="'close'"></v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

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
            <v-list-tile-title v-text="$t('navigation.' + item.title)"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-menu :nudge-width="100" offset-y>
        <v-toolbar-title slot="activator">
          <span>{{ selectedLang.name }}</span>
          <v-icon light>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-item v-for="locale in availableLocales"
                       :key="locale.code"
                       @click="switchLocalePath(locale.code)">
            <v-list-item-title v-text="locale.name"></v-list-item-title>
          </v-list-item>
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
            text
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
        >
          {{ $t('navigation.' + item.title) }}
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
        selectedLang: this.$i18n.locale,
        title: 'apu314'
      }
    },
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  }
</script>
