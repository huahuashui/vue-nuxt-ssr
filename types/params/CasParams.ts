// 登陆参数
export interface LoginParams {
  //登录类型 ppLogin:手机号密码登录，codeLogin:手机验证码登录
  loginType: string;
  //pc(pc端)；m(h5)；ios(app-ios)；android(app-android)；quick(快应用) wxApplet(微信小程序)；baiduApplet(百度小程序)；tjApplet(今日头条小程序)
  terminal: string;
  //手机号码
  mobile: string;
  //国家代码
  nationCode: string;
  //验证码id，验证码登录模式必传
  smsId: string;
  //验证码
  checkCode: string;
  //密码，md5密文
  password?: string;
  site: string
}
//发送验证码参数
export interface SendSmsParams {
  //手机号码
  mobile: string;
  //国家代码
  nationCode: string;
  //（1-注册模块、2-找回密码、3-修改密码、4-登录、5-绑定/更换手机号手机号（会检查手机号是否被使用过）、6-旧手机号获取验证码、7-使用登录用户发送短信验证码）
  businessCode: string;
  //pc(pc端)；m(h5)；ios(app-ios)；android(app-android)；quick(快应用)wxApplet(微信小程序)；baiduApplet(百度小程序)；tjApplet(今日头条小程序)
  terminal: string;
  //天御防刷： 0关闭校验 1开启校验，默认开启
  onOff?: string;
  //天御防刷：开发者id；当onOff为1时则是必填项
  appId?: string;
  //天御防刷：验证票据需要的随机字符串；当onOff为1时则是必填项
  randstr?: string;
  //天御防刷：票据；当onOff为1时则是必填项
  ticket?: string;
}
//第三方登陆
export interface LoginRedirectParams {
  //授权类型（第三方凭证）
  code: string;
  //pc-0、m-1、安卓-2、微信浏览器-6 
  terminal: number;
  //第三方登录类型：qq、wechat-微信、weibo-微博、wechat_gzh-微信公众号
  thirdType: string;
  //系统：ishare；当前只有ishare,默认值ishare
  businessSys?: string;
  //前端浏览器会话id（用来协助单点登录找登录令牌）不支持app
  jsId?: string;
  site: string;
}