<template>
  <div class="g-body">
    <div class="g-header">
      顶部栏
    </div>
    <Nuxt class="g-main" />
    <div class="g-footer">
      <NuxtLink to="/">
        首页
      </NuxtLink>
      <NuxtLink to="/c">
        分类页
      </NuxtLink>
      <NuxtLink to="/f">
        详情页
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class AppPage extends Vue {
  protected mounted () {
  }
}
</script>
<style lang="less">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  .g-body {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    font-size: 16px;
  }
</style>
