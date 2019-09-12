<template>
  <article>
    <p>Append organization and repository to the end of the url.</p>
    <p>eg. <span>elpassion/android-commons</span></p>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheWindow from '../layouts/TheWindow.vue';

@Component
export default class Home extends Vue {
  created() {
    this.$emit('update:layout', TheWindow);
  }
}
</script>
