<template>
  <component :is="layout">
    <router-view :layout.sync="layout"/>
  </component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheWindow from './layouts/TheWindow.vue';

@Component
export default class App extends Vue {
  layout = TheWindow;
};

</script>

<style lang="scss">
@import 'styles/css-reset';

html {
  height: 100vh;
}

body {
  height: 100vh;
  font-family: Helvetica, Arial, sans-serif;
  background-image: url(assets/background.jpg);
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}
</style>
