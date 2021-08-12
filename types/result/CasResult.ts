export interface LoginData {
  //token，有效期，统一90天有效期
  access_token: string;
  //有效期。单位秒
  expires_in?: string;
  //登录用户id
  uCode?: string
  //前端浏览器会话id（用来协助单点登录找登录令牌）不支持app
  jsId?: string
}


export interface SendSmsData {
  //短信验证码id
  smsId: string;
}
