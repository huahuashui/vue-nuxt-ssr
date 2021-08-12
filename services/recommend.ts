import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { ResponseResult } from '~/types/result/ResponseResult';
import { ConfigInfoItem } from '~/types/result/RecommendResult';

// 对应后台recommend服务
export const recommendService = {
  // 批量查询推荐位信息
  getRecommendList (axios: NuxtAxiosInstance, params: string[]): Promise<ResponseResult<ConfigInfoItem[]>> {
    return axios.post('/gateway/recommend/config/info', params);
  }
};
