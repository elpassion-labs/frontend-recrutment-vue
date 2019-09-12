<template>
  <nav>
    <ul class="navigation">
      <NavigationItem
        class="navigation__item"
        v-bind="allNavigationItem"
      />
      <NavigationItem
        class="navigation__item"
        v-bind="openNavigationItem"
      />
      <NavigationItem
        class="navigation__item"
        v-bind="closeNavigationItem"
      />
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import NavigationItem from '@/components/NavigationItem.vue';

@Component({
  components: {
    NavigationItem,
  },
})
export default class extends Vue {
  @Prop({default: 12}) readonly all_count!: number
  @Prop({default: 4}) readonly open_count!: number
  @Prop({default: 8}) readonly close_count!: number

  get base_url() {
    return `/${this.$route.params.organization}/${this.$route.params.repository}`
  }

  get allNavigationItem() {
    return {
      name: 'All',
      link: `${this.base_url}`,
      count: this.all_count
    }
  }

  get openNavigationItem() {
    return {
      name: 'Open',
      link: `${this.base_url}/open`,
      count: this.open_count
    }
  }

  get closeNavigationItem() {
    return {
      name: 'Close',
      link: `${this.base_url}/close`,
      count: this.close_count
    }
  }
}
</script>

<style scoped lang="scss">
.navigation {
  &__item {
    height: 50px;
  }
}
</style>
