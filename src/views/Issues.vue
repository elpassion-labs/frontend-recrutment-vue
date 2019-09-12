<template>
  <div>
    <h1>Issues from
      <span>{{organization}}/{{repository}}</span>
    </h1>
    <p>Filtered by status: <span>{{status}}</span></p>

    <ul>
      <li v-for="issue in issues">
        {{ issue.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import TheWindow from '../layouts/TheWindow.vue';
import axios from 'axios'

@Component
export default class Issues extends Vue {
  @Prop(String) readonly status!: 'all' | 'open' | 'close'

  @Watch('status')
  onChildChanged(val: string, oldVal: string) {
    this.update_data()
  }

  issues = []

  get organization() {
    return this.$route.params.organization
  }

  get repository() {
    return this.$route.params.repository
  }

  created() {
    this.$emit('update:layout', TheWindow);
  }

  mounted () {
    this.update_data()
  }

  private update_data() {
    this.request_data()
      .then(this.extract_issues)
      .then(issues => (this.issues = issues))
  }

  private request_data(): Promise<any> {
    let url = `https://api.github.com/search/issues`

    let state
    if (this.status === 'open') {
      state = 'open'
    } else if (this.status === 'close') {
      state = 'closed'
    } else {
      state = 'all'
    }
    let query = `repo:${this.organization}/${this.repository}\+type:issue+state:${state}`

    // Unable to prevent axios from encoding the query string when passing params as object
    return axios.get(`${url}?q=${query}`)
  }

  private extract_issues(response) {
    return response.data.items.map((issue) => {
      return {
        id: issue.id,
        title: issue.title
      }
    })
  }
}
</script>
