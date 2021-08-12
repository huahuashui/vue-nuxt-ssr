// 获取分类列表参数
export interface CommodityByFrontParams {
  // 分页页码
  currentPage: number;
  // 每页个数
  pageSize: number;
  // 前端节点code
  nodeCode?: string;
  // 前端根节点code
  rootCode?: string;
}

// 获取分类列表参数
export interface BulletFrameParams {
  // 搜索词
  keyword?: string;
  // 分页页码
  currentPage: number;
  // 每页个数
  pageSize: number;
  // 前端节点code
  nodeCode?: string;
  // 前端根节点code
  rootCode?: string;
}

// 服务下单参数
export interface ServiceOrderParams {
  // 期望来电时间code
  callCode?: string;
  // 微信获取用户信息code
  code?: string;
  // 被服务人需求描述
  description: string;
  // 邮箱
  email?: string;
  // 商品ID
  goodsId: string;
  // 商品名称
  goodsName: string;
  // 被服务人名称
  name: string;
  // 微信用户的openid
  openId?: string;
  // 被服务人电话
  phone: string;
  // M端下单上传
  host?: string;
  // 支付类型 wechat-微信支付 alipay-支付宝 apple-内购 iask-平台内购(爱问豆) baidu-百度收银台 ishare-站内支付
  payType?: string;
  // 是否是浏览器
  wechatBrowse?: boolean;
  // 微信支付时，区分微信商户。 1-主站 2-APP商户 3-微信办公小程序 4-微信爱问模板小程序 5-微信爱问文件管理小程序
  wechatType?: number;
  // 终端 m端普通浏览器：1，m端微信浏览器：6
  sourceMode?: number;
  // 是否返回支付信息
  returnPayment: boolean;
  //是否使用优惠券，1未使用，2使用
  isVouchers?: number;
  //用户优惠券id
  svuId?: string;
  //优惠券id
  vouchersId?: string;
}

export interface ListByConditionParams {
  // 页数
  currentPage: number;
  // 每页数量
  pageSize: number;
  // 排序字段 orderTime-下单时间
  sortStr: string;
  // 用户删除状态 0-正常 9-删除
  userOpt: number;
}

export interface OrderInfoParams{
  orderNo: string
}

export interface ScanOrderInfoParams{
  //微信获取用户信息code
  code?: string;
  // 域名
  host: string;
  // 微信用户的openid
  openId?: string;
  //业务单号
  orderNo: string;
  //支付类型 wechat-微信支付 alipay-支付宝 apple-内购 iask-平台内购(爱问豆) baidu-百度收银台 ishare-站内支付
  payType: string;
  //客户端(字典表) 0-pc 1-m版  2-android  3-ios 4-快应用  5-百度小程序端 6-微信浏览器 7-微信小程序 701-微信爱问办公模板小程序 702-微信爱问文件管理小程序 703-微信爱问模板小程序 704-微信爱问福利社小程序 101-马甲站01
  sourceMode: number;
  //是否是微信浏览器
  wechatBrowse?: boolean;
  //微信支付时，区分微信商户。 1-主站 2-APP商户 3-微信办公小程序 4-微信爱问模板小程序 5-微信爱问文件管理小程序
  wechatType?: number;
}

export interface CancelOrderInfoParams{
  //业务单号
  orderNo: string;
  //用户id
  userId: string
}

