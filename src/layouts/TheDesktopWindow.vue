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
  display: grid;
  grid-template: "title-bar  content" 40px
                 "navigation content" auto
                 / 150px auto;
  width: 650px;
  height: 500px;
  margin: auto;
  margin-top: 250px;
  border-radius: 10px;
  overflow: hidden;

  &__title-bar {
    background-color: green;
    grid-area: title-bar;
  }

  &__navigation {
    background-color: blue;
    grid-area: navigation;
  }

  &__content {
    background-color: yellow;
    grid-area: content;
  }
}
</style>
