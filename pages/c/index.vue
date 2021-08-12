<template>
  <div class="m-classify">
    分类页
  </div>
</template>
<script lang="ts">
import { Context } from '@nuxt/types';
import { Component, Vue } from 'nuxt-property-decorator';
import { recommendService } from '~/services/recommend';
import { ResponseResult } from '~/types/result/ResponseResult';
import { ConfigInfoItem, ConfigInfoListItem } from '~/types/result/RecommendResult';

@Component({
  components: {}
})
export default class ClassiyPage extends Vue {
    // 推荐位数据
    protected homeRecommendList: ConfigInfoListItem[] = [];
    // 前端分类-推荐位列表
    protected nodeRecommendList: ConfigInfoListItem[] = [];
    // 轮播图列表
    protected slideImgList: ConfigInfoListItem[] = [];

    // 服务端数据获取
    async asyncData (context: Context) {
      return await recommendService.getRecommendList(context.$axios, ['M_law_htpage', 'M_law_dingzhifenlei', 'M_law_dzbanner'])
        .then((res: ResponseResult<ConfigInfoItem[]>) => {
          let homeRecommendList: ConfigInfoListItem[] = [];
          let nodeRecommendList: ConfigInfoListItem[] = [];
          let slideImgList: ConfigInfoListItem[] = [];
          if (res && res.code === '0' && res.data) {
            res.data.forEach((item) => {
              if (item.pageId === 'M_law_htpage') {
                // 第一项改为轮播图推荐位
                homeRecommendList = item.list || [];
              } else if (item.pageId === 'M_law_dingzhifenlei') {
                nodeRecommendList = item.list || [];
              } else if (item.pageId === 'M_law_dzbanner') {
                slideImgList = item.list || [];
              }
            });
            return {
              homeRecommendList,
              nodeRecommendList,
              slideImgList
            };
          }
        });
    }

    created () {
    }

    mounted () {
      console.log('推荐位数据1', this.homeRecommendList, this.nodeRecommendList, this.slideImgList);
      recommendService.getRecommendList(this.$axios, ['M_law_htpage']).then((res) => {
        console.log('推荐位数据2', res);
      });
    }

    onClickRight () {}

    toPage () {}
}
</script>
