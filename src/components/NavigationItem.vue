<template>
  <li class="item">
    <router-link class="item__link" :to="link">
      <span>
        {{name}}
      </span>
      <span>
        {{count}}
      </span>
    </router-link>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) readonly name!: string
  @Prop(String) readonly link!: string
  @Prop({default: 0}) readonly count!: number
}

</script>

<style scoped lang="scss">
.item {
  &__link {
    display: block;
    height: 100%;
    color: black;
  }
}
</style>
