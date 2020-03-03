<template>
  <v-app>
    <div class="continer">
      <header>
        <div class="logo">
          <h1>APU314</h1>
        </div>
        <nav>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>welcome</h2>
      </main>
      <aside>aside</aside>
      <footer>Footer</footer>
    </div>
    <!--<v-content>

      <v-container fluid flat fill-height px-2 py-2>
        <v-layout class="clase">
          &lt;!&ndash; Botones Memú izquierda, idioma derecha &ndash;&gt;
&lt;!&ndash;          <v-toolbar xs12 color="transparent" flat>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-menu :nudge-width="100" left>
              <v-toolbar-title slot="activator">
                <span> {{ this.$i18n.locale.name }}</span>
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
          </v-toolbar>&ndash;&gt;
          &lt;!&ndash; Contenido &ndash;&gt;
          <v-flex d-flex xs12 justify-center align-center>
            <v-card color="transparent" flat>
              <v-flex xs12>
                <h1 class="text-center">APU314</h1>
                <h3 class="text-center" v-text="$t('admin.title')"></h3>
              </v-flex>
              <v-flex xs12>
                <h2 class="text-center"># Full Stack Developer</h2>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </v-content>-->

<!--

    <div class="cont">
      <div class="quote">
        <p>Post 1</p>
        <span>apu314</span>
      </div>
      <div class="quote span-2">
        <p>Post 2</p>
        <span>apu314</span>
      </div>
      <div class="quote">
        <p>Post 3</p>
        <span>apu314</span>
      </div>
      <div class="quote">
        <p>Post 4</p>
        <span>apu314</span>
      </div>
    </div>

    <div class="gridi-container">
      <main>main</main>
      <section class="nom">nom</section>
      <section class="yum">yum</section>
      <section class="diabeetus">diabeetus</section>
      <header>header</header>
      <div class="candy">candy</div>
    </div>
-->

  </v-app>
</template>

<style lang="scss">
  body {
    margin: 0;
    height: 100vh;

    background: #E8F1FA;
    font-size: 16px;
    color: #8C97B4;

    font-family: 'Nunito', sans-serif;
  }
  .v-application { background: transparent !important; }

  .continer {
    display: grid;
    grid-template-areas:
        'header header header'
        'main   main   aside'
        'main   main   aside'
        'footer footer footer';
    grid-gap: 10px;

    height: 100vh;

    grid-template-rows:
        [header] 50px
        minmax(calc(100vh - 50px), 1fr) 1fr
        [footer] 200px;


    margin: 10px;

    header {
      grid-area: header;

      height: 50px;
      //margin: 10px;
      padding: 0 1rem;

      position: sticky;
      background-color: #ffffff;
      // box-shadow: 10px 10px 30px rgba(0, 0, 0, .1);

      box-shadow: 8px 8px 20px 0 rgba(108,141,194,0.28), -8px -8px 22px 0 rgba(255,255,255,0.82);
      border-radius: 10px;

      display: flex;
      justify-content: space-between;
      .logo {
        h1 {
          display: inline-block;
        }
      }

      nav {
        display: flex;
        flex-direction: row;



        ul {
          display: flex;
          flex-direction: row;
          align-self: end;

          list-style: none;
          padding: 0;
          li {
            padding: .8em;

            &:last-child {
              margin-right: 0;
              padding-right: 0;
            }
          }
        }
      }
    }

    main {
      grid-area: main;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #ffffff;
      box-shadow: 8px 8px 20px 0 rgba(108,141,194,0.28), -8px -8px 22px 0 rgba(255,255,255,0.82);
      border-radius: 10px;
    }

    aside {
      grid-area: aside;

      background-color: #ffffff;
      box-shadow: 8px 8px 20px 0 rgba(108,141,194,0.28), -8px -8px 22px 0 rgba(255,255,255,0.82);
      border-radius: 10px;
    }

    footer {
      grid-area: footer;

      background-color: #ffffff;
      box-shadow: 8px 8px 20px 0 rgba(108,141,194,0.28), -8px -8px 22px 0 rgba(255,255,255,0.82);
      border-radius: 10px;
    }
  }


  .cont {
    padding: 3em;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    .quote {
      padding: 2em;
      border-radius: .3em;
      box-shadow: 10px 10px 30px rgba(0, 0, 0, .1);

      p {
        margin-top: 0;
      }

      span {
        font-weight: bold;
        position: relative;
        margin-left: 15px;

        &:before {
          content: '';
          position: absolute;
          height: 1px;
          width: 10px;
          border-bottom: 1px solid black;
          top: 10px;
          left: -15px;
        }
      }
    }
  }

  @media (min-width: 550px) {
    /*.span-2 {
      grid-column: auto / span 2;
    }*/
  }

  .gridi-container {
    display: grid;
    grid-template-columns: 1fr 1.2fr 1.5fr;
    grid-template-rows: 1fr 4fr 3fr 2fr;

    // Algo más entendible
    grid-template-areas:
        'main      main      header'
        'main      main      candy'
        'nom       yum       candy'
        'diabeetus diabeetus candy';

    height: 100vh;
    margin: 2em;

    main {
      grid-column-start: 1;
      grid-column-end: 3;

      grid-row-start: 1;
      grid-row-end: 3;

      grid-column: 1 / 3;
      grid-row: 1 / 3;


      grid-area: 1 / 1 / 3 / 3; // Shorthand para todo lo anterior.

      grid-area: main;

      background: #FFFADF;
    }

    .nom {
      grid-area: 3 / 1 / 4 / 3;
      grid-area: nom;
      background: #c4b35a;
      color: white;
    }

    .yum {
      grid-area: 3 / 2 / 4 / 3;
      grid-area: yum;
      background: #202020;
      color: white;
    }

    .diabeetus {
      grid-area: 4 / 1 / 5 / 3;
      grid-area: diabeetus;
      background: #202020;
      color: white;
    }

    header {
      grid-area: 1 / 3 / 2 / 4;
      grid-area: header;
      background: purple;
    }

    .candy {
      grid-area: 2 / 3 / 5 / 4;
      grid-area: candy;
      background: purple;
      background: linear-gradient(0deg, rgba(7,4,51,1) 0%, rgba(9,9,121,1) 35%, rgba(0,131,255,1) 100%);
    }

  }


  .clase {
    background: linear-gradient(0deg, rgba(242, 255, 174, 0.36), rgba(242, 255, 174, 0.36)), url('/img/bg-landing-palmera.jpg') no-repeat center center fixed;
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
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code)
      }
    }
  }
</script>
