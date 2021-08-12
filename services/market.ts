import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { ResponseResult } from '~/types/result/ResponseResult';
import { NodeCodeParams } from '~/types/params/MarketParams';
import { NodeCodeData } from '~/types/result/MarketResult';

// 分类相关-对应后台market服务
export const marketService = {
  // 根据分类节点获取所属分类和属性（分类页导航）
  getLevelNodeByNodeCode (axios: NuxtAxiosInstance, params?: NodeCodeParams): Promise<ResponseResult<NodeCodeData>> {
    return axios.post('/gateway/market/nodeManage/getLevelNodeByNodeCode', params);
  }
};
