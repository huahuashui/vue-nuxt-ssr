export interface ConfigInfoItem<T = any> {
  list: T;
  //总条数
  total: number
}
export interface CouponItem{
  //1可用，2即将过期
  vStatus: number;
  //描述
  describe: string;
  // 优惠券id
  vid: string;
  // 扣减类型(1.满减券;2,折扣券)
  type: number;
  // 优惠券内容
  content: string;
  // 此优惠券有效期，显示格式 开始时间-结束时间
  timeval: string;
  // 减免金额：单位元
  couponAmount: number;
  //领取当日几天可用
  dateNumber: number;
  // 针对于折扣券，打折
  discount: number;
  // 针对于折扣券，最多优惠多少元（单该字段有值时，计算折扣时优惠金额不能超过该值）
  manCouponAmount?: number;
  // 用户优惠券id
  svuId: string;
}

export interface QueryPersonalItem{
  //优惠券状态，1可用，2即将过期 , 3不可用
  vStatus: number;
  //描述
  describe: string;
  //优惠券id
  vid: string;
  //扣减类型(1.满减券;2,折扣券)
  type: number;
  //优惠券内容
  content: string;
  //此优惠券有效期，显示格式 开始时间-结束时间
  timeval: string;
  //减免金额：单位元
  couponAmount: number;
  //针对于折扣券，打折
  discount: number;
  //用户优惠券id
  svuId: string;
}

export interface receiveVouchersItem{
  //优惠券id
  vid: string;
  //扣减类型(1.满减券;2,折扣券)
  type: string;
  //优惠券内容
  content: string;
  //此优惠券有效期，显示格式 开始时间-结束时间
  timeval: string;
  // 减免金额：单位元
  couponAmount: number;
  //领取当日几天可用
  dateNumber: number;
  //针对于折扣券，打折
  discount: number;
  //针对于折扣券，最多优惠多少元（单该字段有值时，计算折扣时优惠金额不能超过该值）
  manCouponAmount: number;
  //1.现金文档，2vip套餐
  appointType: number;
}

export interface getVouchersItem{
  //优惠券id
  vid: string;
  //优惠券名称
  name: string;
  //扣减类型(1.满减券;2,折扣券)
  type: string;
  //优惠券内容
  content: string;
  //使用门槛：单位元
  orderComUse: number;
  //此优惠券有效期，显示格式 开始时间-结束时间
  timeval: string;
  // 减免金额：单位元
  couponAmount: number;
  //领取当日几天可用
  dateNumber: number;
  //针对于折扣券，打折
  discount: number;
  //针对于折扣券，最多优惠多少元（单该字段有值时，计算折扣时优惠金额不能超过该值）
  manCouponAmount: number;
  //1.现金文档，2vip套餐
  appointType: number;
}