<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo-text">
        <span>Where in the world?</span>
      </div>
      <div class="header__btn-dark--dark" @click="emitDarkMode">
        <i class="far fa-moon" style="margin-right: 3px;"></i>
        <span>Dark Mode</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-component",
  methods: {
    emitDarkMode(){
      this.$emit('update:dark');
    }
  }
};
</script>

<style lang="scss">
@import "./_header.scss";
</style>