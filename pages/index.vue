<template>
  <div class="m-home">
    首页
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class Home extends Vue {
  asyncData ({ redirect }: any) {}

  created () {}
  mounted () {}

  onClickRight () {

  }

  toPage () {}
}
</script>
