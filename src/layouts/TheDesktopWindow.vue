<template>
  <div class="window">
    <div class="window__title-bar">
      <div class="dot dot--red" />
      <div class="dot dot--yellow" />
      <div class="dot dot--green" />
    </div>

    <Navigation class="window__navigation"/>

    <main class="window__content">
      <slot/>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Navigation
  }
})
export default class TheDesktopWindow extends Vue { };

</script>

<style lang="scss" scope>
.window {
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
    background-color: rgb(15, 16, 34);
    grid-area: title-bar;
    padding: 16px 0 0 15px;
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

.dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;

  &--red {
    background-color: rgb(250, 94, 85);
  }

  &--yellow {
    background-color: rgb(250, 191, 53);
  }

  &--green {
    background-color: rgb(23, 203, 76);
  }
}
</style>
