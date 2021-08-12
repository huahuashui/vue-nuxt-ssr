import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { ResponseResult } from '~/types/result/ResponseResult';
import {
  LoginParams,
  SendSmsParams,
  LoginRedirectParams
} from '~/types/params/CasParams';
import {
  LoginData,
  SendSmsData
} from '~/types/result/CasResult';

export const casService = {
  // 手机号登陆
  login (axios: NuxtAxiosInstance, params: LoginParams): Promise<ResponseResult<LoginData>> {
    return axios.post('/gateway/cas/login/authorize', params);
  },
  // 发送验证码
  sendSms (axios: NuxtAxiosInstance, params: SendSmsParams): Promise<ResponseResult<SendSmsData>> {
    return axios.post('/gateway/cas/sms/sendSms', params);
  },
  // 第三方登陆
  loginRedirect (axios: NuxtAxiosInstance, params: LoginRedirectParams): Promise<ResponseResult<LoginData>> {
    return axios.post('/gateway/cas/login/redirect', params);
  }
};
