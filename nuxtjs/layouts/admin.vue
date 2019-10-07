<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
        left
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Admin panel
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.route"
            link
            nuxt>
          <v-list-item-content>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <nuxt-link :to="localePath(item.route)" v-text="$t('navigation.' + item.title)"></nuxt-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="white"
        light
        tile
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="$t('admin.title')"></v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-menu
          left
          bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
          >
            <v-list-item-title>{{ locale.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>



    <!--<v-navigation-drawer
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
      <v-menu :nudge-width="100">
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
        <v-flex xs12 py-3 text-xs-center white&#45;&#45;text>
          &copy; {{ new Date().getFullYear() }} — <strong>apu314.com</strong>
        </v-flex>
      </v-layout>
    </v-footer>-->
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false, // Nav Drawer default: closed.
        left: true,

        clipped: false,
        fixed: false,
        miniVariant: false,
        items: [
          { icon: 'home', title: 'home', route: 'index' },
          { icon: 'home', title: 'admin', route: 'admin' },
          { icon: 'work', title: 'portfolio', route: 'portfolio' }
          // { icon: 'content_paste', title: 'cv', to: '/cv' },
          // { icon: 'build', title: 'services', to: '/services' },
          // { icon: 'person', title: 'contact', to: '/contact' }
        ],
        /*languages: [
          { title: 'Español', shortTitle: 'es' },
          { title: 'English', shortTitle: 'en' }
        ],*/
        selectedLang: this.$i18n.locale,
        title: 'Admin dashboard - apu314'
      }
    },
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code)
        // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  }
</script>
