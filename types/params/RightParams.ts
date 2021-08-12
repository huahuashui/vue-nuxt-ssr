export interface QueryUsingParams{
  //场景类型：0：未使用；1：已使用；2：已过期
  type: number;
  //当前页 默认值1
  pageNumber: number;
  //每页显示条数 默认值10
  pageSize: number;
}

export interface QueryPersonalParams{
  //场景类型：0：现金文档购买场景；1：vip购买场景 2法律服务
  type: number;
  //当前商品金额(元)
  price: number;
  //终端 0PC 1M 2安卓 3IOS 4快应用 5小程序 6微信浏览器 7 微信小程序
  terminal:string;
}

export interface receiveVouchersParams{
  //按字典优惠券场景配置
  type: number;
  //1.用户手动领取 2.后台直接赠送（订单取消或退款，需要系统再补发）
  source: number;
  //0-办公,1-教育,2-建筑,3-超级会员,4-主站等 按字典配置
  site: string;
  // 1-前一天有登录检查
  checkCode?: number;
}
export interface getVouchersParams{
  //场景类型：0：游客放弃登录场景；1：购买现金文档赠券场景；2：购买vip会员赠券场景；3：下载免费文档后赠券 4:vip挽留 实际根据字典配置-优惠券场景
  type: number;
  //0-办公,1-教育,2-建筑,3-超级会员,4-主站,5-超级合同
  site: string;
}