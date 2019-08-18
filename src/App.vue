<template>
  <div class="container">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'styles/css-reset';

html {
  height: 100vh;
}

body {
  height: 100vh;
}

.container {
  height: 100vh;
  background-image: url(assets/background.jpg);
  background-size: cover;
  background-position: center top;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
