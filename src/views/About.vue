<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheWindow from '../layouts/TheWindow.vue';

@Component
export default class About extends Vue {
  created() {
    this.$emit('update:layout', TheWindow);
  }
}
</script>
