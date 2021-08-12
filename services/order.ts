import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { PageResult, ResponseResult } from '~/types/result/ResponseResult';
import {
  BulletFrameParams,
  CommodityByFrontParams,
  ServiceOrderParams,
  ListByConditionParams,
  OrderInfoParams,
  ScanOrderInfoParams,
  CancelOrderInfoParams
} from '~/types/params/OrderParams';
import {
  BulletFrameRowItem,
  CommodityByFrontRowItem,
  ServiceOrderData,
  ListByConditionRowItem,
  OrderInfoData,
  ScanOrderInfoData,
  CancelOrderInfoData
} from '~/types/result/OrderResult';

// 订单相关-对应后台order服务
export const orderService = {
  // 根据前端分类查询服务商品
  commodityByFront (axios: NuxtAxiosInstance, params: CommodityByFrontParams): Promise<ResponseResult<PageResult<CommodityByFrontRowItem>>> {
    return axios.post('/gateway/order/get/commodityByFront', params);
  },
  // 查询分类下商品
  bulletFrame (axios: NuxtAxiosInstance, params: BulletFrameParams): Promise<ResponseResult<PageResult<BulletFrameRowItem>>> {
    return axios.post('/gateway/order/search/bulletFrame', params);
  },
  // 关键词搜索-查询合同定制、商业策划、增值服务分类下的商品
  commodityInfo (axios: NuxtAxiosInstance, params: BulletFrameParams): Promise<ResponseResult<PageResult<BulletFrameRowItem>>> {
    return axios.post('/gateway/order/search/commodityInfo', params);
  },
  // 服务下单接口
  serviceOrder (axios: NuxtAxiosInstance, params: ServiceOrderParams): Promise<ResponseResult<ServiceOrderData>> {
    return axios.post('/gateway/order/create/serviceOrder', params);
  },
  // 我的订单列表
  listByCondition (axios: NuxtAxiosInstance, params: ListByConditionParams): Promise<ResponseResult<PageResult<ListByConditionRowItem>>> {
    return axios.post('/gateway/order/query/listByCondition', params);
  },
  // 查询订单信息
  orderInfo (axios: NuxtAxiosInstance, params: OrderInfoParams): Promise<ResponseResult<OrderInfoData>> {
    return axios.post('/gateway/order/get/orderInfo', params);
  },
  // 订单再次支付
  scanOrderInfo (axios: NuxtAxiosInstance, params: ScanOrderInfoParams): Promise<ResponseResult<ScanOrderInfoData>> {
    return axios.post('/gateway/order/scan/orderInfo', params);
  },
  // 取消订单
  cancelOrderInfo (axios: NuxtAxiosInstance, params: CancelOrderInfoParams): Promise<ResponseResult<CancelOrderInfoData>> {
    return axios.post('/gateway/order/cancel/orderInfo', params);
  },
  // 获取增值商品
  getIncrementGoodsById (axios: NuxtAxiosInstance, id: string): Promise<ResponseResult<BulletFrameRowItem[]>> {
    return axios.post('/gateway/order/get/commodity/valueAdded', { id });
  }
};
