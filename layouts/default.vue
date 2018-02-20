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
      <v-toolbar-title v-text="title" class="text-xs-right  ml-0"></v-toolbar-title>
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
          { icon: 'home', title: 'Blog', to: '/' },
          { icon: 'work', title: 'Portfolio', to: '/projects' },
          { icon: 'content_paste', title: 'CV', to: '/cv' },
          { icon: 'build', title: 'Services', to: '/services' },
          { icon: 'person', title: 'Contact Me', to: '/contact' }
        ],
        miniVariant: false,
        title: 'apu314'
      }
    }
  }
</script>
