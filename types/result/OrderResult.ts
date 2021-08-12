// 返回值model定义

// 服务商品列表项
export interface CommodityByFrontRowItem {
  // 合同类型
  heTongType: boolean;
  // 服务商品ID
  id: string;
  // 简介
  introduction?: string;
  // 标签
  label?: string;
  // 主图
  mainPicture: string;
  // 服务名称
  name: string;
  // 原价 120~180
  originalPrice: string;
  // 商品售价，单位:分
  price: number;
  // 推荐位id
  recommendId: string;
  // 展示销售量
  showSalesNum?: number;
  // 状态 1-下架 2-上架
  status: number;
  // 服务类型 code
  type: string;
  // 服务类型
  typeName: string;
}

// 服务商品列表项
export interface BulletFrameRowItem {
  // 服务商品ID
  id: string;
  // 服务名称
  name: string;
  // 商品售价，单位:分
  price: number;
  // 简介
  introduction?: string;
}

// 服务下单
export interface ServiceOrderData {
  // 面重定向地址重新获取code
  returnUrl?: string;
  // 支付金额 单位分
  payPrice?: number;
  // 支付订单号
  payNo?: string;
  // 业务单号
  orderNo: string;
  // 重定向获取微信code的url
  webUrl?: string;
  //
  payResp?: Element;
}

export interface ListByConditionRowItem {
  // 订单号
  orderNo?: string;
  // 商品id
  goodsId?: string;
  // 资料ID
  fid?: string;
  // 资料格式
  format?: string;
  // 商品名称
  goodsName?: string;
  // 订单状态 0-待支付 1-支付进行中 2-支付成功 3-支付失败 4-订单取消 7退款审核中 8退款成功 9退款失败 10部份退款成功
  orderStatus?: number;
  // 退款状态 0-未申请退款 1-退款申请中 2-退款审核中 3-退款审核不通过 4-退款成功 5-退款失败 7-退款异常
  refundStatus?: string;
  // 订单金额 单位分
  payPrice?: string;
}

export interface OrderInfoData {
  // 订单状态 0-待支付 1-支付进行中 2-支付成功 3-支付失败 4-订单取消
  orderStatus: number;
  // 订单号
  orderNo: string;
  // 支付单号
  payNo?: string;
  // 商品id
  goodsId: string;
  // 虚拟物品类型 1-购买资料 2-购买VIP 3-购买下载券 4-购买爱问豆 8下载特权
  goodsType: number;
  // 订单金额 单位分
  payPrice?: number;
  // 支付类型 wechat-微信支付 alipay-支付宝 union-银联 apple-内购 iask-爱问豆 weibo-微博支付 wallet-钱包
  payType?: string;
  // 原价 单位分
  originalPrice?: number;
  // 优惠券id
  vouchersId?: string;
  // 买家用户ID
  buyerUserId?: string;
}

export interface ScanOrderInfoData {
  // ali支付链接地址
  aliPayUrl?: string;
  // 商品类型 1-购买资料 2-购买VIP 4-购买爱问豆 8-下载特权 10-免费文件 11 vip专享
  goodsType?: string;
  // 支付订单号
  payNo?: string;
  // M端非微信浏览器重定向获取微信code的url
  webUrl?: string;
  // PC端/微信浏览器 重定向地址重新获取code, 或者APP支付返回地址
  returnUrl?: string;
  // 是否需要重订向
  needRedirect?: boolean;
  paySign?: string;
  signType?: string;
  timeStamp?: string;
  packageType?: string;
  prepayId?: string;
}

export interface CancelOrderInfoData {

}
