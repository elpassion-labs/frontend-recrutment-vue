<template>
  <div class="layout">
    <div class="layout__title-bar">
    </div>

    <nav class="layout__navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <main class="layout__content">
      <slot/>
    </main>
  </div>
</template>

<style lang="scss" scope>
.layout {
  width: 650px;
  height: 500px;
  margin: auto;
  margin-top: 250px;
  border-radius: 10px;

  &__title-bar {
    background-color: green;
  }

  &__navigation {
    background-color: blue;
  }

  &__content {
    background-color: yellow;
  }
}
</style>
