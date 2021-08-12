import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { ResponseResult } from '~/types/result/ResponseResult';
import { GetUserInfoData } from '~/types/result/UserResult';
export default {
  getUserInfo (axios: NuxtAxiosInstance):Promise<ResponseResult<GetUserInfoData>> {
    return axios.get('/gateway/user/getUserInfo');
  }
};
