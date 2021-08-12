export default {
  // 公共数据配置
  common: {
    site: 20
  },
  // ==== 环境配置 ====
  local: {
    // 埋点上报服务地址
    dwUrl: 'https://dev-dw.iask.com.cn',
    // 服务端请求url
    serverUrl: 'http://dev-gateway.mlaw.ishare.iasktest.com',
    // 客户端请求url
    clientUrl: 'http://dev-gateway.mlaw.ishare.iasktest.com'
  },
  dev: {
    // 埋点上报服务地址
    dwUrl: 'https://dev-dw.iask.com.cn',
    // 服务端请求url
    serverUrl: 'http://dev-gateway.mlaw.ishare.iasktest.com',
    // 客户端请求url
    clientUrl: '//dev.hetongdoc.com'
  },
  test: {
    // 埋点上报服务地址
    dwUrl: 'https://test-dw.iask.com.cn',
    // 服务端请求url
    serverUrl: 'http://test-gateway.mlaw.ishare.iasktest.com',
    // 客户端请求url
    clientUrl: '//test.hetongdoc.com'
  },
  test2: {
    // 埋点上报服务地址
    dwUrl: 'https://test-dw.iask.com.cn',
    // 服务端请求url
    serverUrl: 'http://test-gateway.mlaw.ishare.iasktest.com',
    // 客户端请求url
    clientUrl: '//test2.hetongdoc.com'
  },
  pre: {
    // 埋点上报服务地址
    dwUrl: 'https://dev-dw.iask.com.cn',
    // 服务端请求url
    serverUrl: 'http://dev-gateway.mlaw.ishare.iasktest.com',
    // 客户端请求url
    clientUrl: '//pre.hetongdoc.com'
  },
  prod: {
    // 埋点上报服务地址
    dwUrl: 'https://dev-dw.iask.com.cn',
    // 服务端请求url
    serverUrl: 'http://dev-gateway.mlaw.ishare.iasktest.com',
    // 客户端请求url
    clientUrl: '//hetongdoc.com'
  }
};
