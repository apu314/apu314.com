<template>
    <div class="home-locale-links">
        <span @click="setLocale('es')" class="home-locale-link" :class="esClass"> ES </span>
        /
        <span @click="setLocale('en')" class="home-locale-link" :class="enClass"> EN </span>
    </div>
</template>


<script>
  export default {
    computed: {
      esClass() {
        return this.$i18n.locale === "es" ? "home-locale-link--active" : "";
      },
      enClass() {
        return this.$i18n.locale === "en" ? "home-locale-link--active" : "";
      }
    },
    methods: {
      setLocale(locale) {
        if (locale === this.$i18n.locale) {
          return;
        }
        this.$i18n.locale = locale;
        localStorage.setItem("locale", locale);
      }
    }
  };
</script>

<style scoped>

</style>