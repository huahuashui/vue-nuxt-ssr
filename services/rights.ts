import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { ResponseResult } from '~/types/result/ResponseResult';
import {
  ConfigInfoItem,
  CouponItem,
  QueryPersonalItem,
  receiveVouchersItem,
  getVouchersItem
} from '~/types/result/RightResult';
import {
  QueryUsingParams,
  QueryPersonalParams,
  receiveVouchersParams,
  getVouchersParams
} from '~/types/params/RightParams';

export default {
  // 我的优惠卷列表
  queryUsing (axios: NuxtAxiosInstance, params: QueryUsingParams): Promise<ResponseResult<ConfigInfoItem<CouponItem>>> {
    return axios.get('/gateway/rights/sale/queryUsing', { params });
  },
  // 个人优惠卷列表
  queryPersonal (axios: NuxtAxiosInstance, params: QueryPersonalParams): Promise<ResponseResult<ConfigInfoItem<QueryPersonalItem>>> {
    return axios.get('/gateway/rights/sale/queryPersonal', { params });
  },
  // 领取优惠卷(弹窗)
  receiveVouchers (axios: NuxtAxiosInstance, params: receiveVouchersParams): Promise<ResponseResult<ConfigInfoItem<receiveVouchersItem>>> {
    return axios.post('/gateway/rights/sale/vouchers', params);
  },
  // 优惠卷列表(弹窗)
  getVouchers (axios: NuxtAxiosInstance, params: getVouchersParams): Promise<ResponseResult<ConfigInfoItem<getVouchersItem>>> {
    return axios.get('/gateway/rights/sale/vouchers', { params });
  }
};
