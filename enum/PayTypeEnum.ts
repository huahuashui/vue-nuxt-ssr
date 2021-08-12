// 支付类型
export enum PayTypeEnum {
  // 微信支付
  wechat = 'wechat',
  // 支付宝
  alipay = 'alipay',
  // 内购
  apple = 'apple',
  // 平台内购(爱问豆)
  iask = 'iask',
  // 百度收银台
  baidu = 'baidu',
  // 站内支付
  ishare = 'ishare'
}

export const PayTypeMap = {
  wechat: {
    text: '微信支付',
    value: PayTypeEnum.wechat
  },
  alipay: {
    text: '支付宝支付',
    value: PayTypeEnum.alipay
  }
};

export const PayTypeList = [
  {
    text: '微信支付',
    value: PayTypeEnum.wechat
  },
  {
    text: '支付宝支付',
    value: PayTypeEnum.alipay
  }
];
