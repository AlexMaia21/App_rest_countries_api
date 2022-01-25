<template>
  <div id="app" :class="{ dark: darkModeTheme }">
    <header-component @update:dark="darkMode"></header-component>
    <keep-alive>
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { atrObj } from "./store";
import HeaderComponent from "./components/header/header.vue";
export default {
  name: "App",
  data() {
    return {
      darkModeTheme: false,
    };
  },
  components: {
    HeaderComponent,
  },
  methods: {
    darkMode() {
      this.darkModeTheme = !this.darkModeTheme;
    },
  },
  created() {
    fetch("https://restcountries.com/v2/all")
      .then((r) => r.json())
      .then((dados) => {
        // Assigning array of countries to the store
        atrObj(dados);
      });
  },
};
</script>

<style lang="scss">
@import "./scss/_normalize.scss";
@import "./scss/_variables.scss";
@import "./scss/_dark-mode.scss";
@import url("https://fonts.googleapis.com/css2?family=Aref+Ruqaa&family=Nunito+Sans:wght@300;600;800&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  font-family: "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
