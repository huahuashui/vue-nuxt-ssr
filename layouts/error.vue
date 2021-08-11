<template>
  <div class="m-error">
    错误页面
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class ErrorPage extends Vue {
}
</script>
<style>
  .m-error {
    text-align: center;
  }
</style>
