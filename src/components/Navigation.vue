<template>
  <nav>
    <ul class="navigation">
      <li class="navigation__item">
        <router-link to="/">
          <span>
            All
          </span>
          <span>
            12
          </span>
        </router-link>
      </li>

      <li class="navigation__item">
        <router-link to="/open">
          <span>
            Open
          </span>
          <span>
            4
          </span>
        </router-link>
      </li>

      <li class="navigation__item">
        <router-link to="/close">
          <span>
            Close
          </span>
          <span>
            8
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  &__item {
    height: 50px;

    a {
      color: black;
    }
  }
}
</style>
