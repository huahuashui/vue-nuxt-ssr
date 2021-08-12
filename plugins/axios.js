import Config from '~/config/index';

export default ({ $axios, store }) => {
  const ConfigToEnv = Config[process.env.CREATE_ENV] || {};
  console.log('请求调用所处环境-是否为服务端发起', process.env.CREATE_ENV, process.server);

  // request拦截器
  $axios.onRequest((config) => {
    const token = store.state.loginToken;
    // 追加请求头
    // 将获取到token加入到请求头中
    if (token) {
      config.headers.Authrization = token;
    }
    config.headers['Request-Site'] = Config.common.site;
    config.headers.site = Config.common.site;
    // 根据不同环境获不同服务地址
    if (process.server) {
      config.baseURL = ConfigToEnv.serverUrl;
    } else {
      config.baseURL = ConfigToEnv.clientUrl;
    }
  });

  // response拦截器
  $axios.onResponse((response) => {
    return response.data || {};
  });

  // response拦截器，数据返回后，可以先在这里进行一个简单的判断
  $axios.onError((error) => {
    const status = error.response && error.response.status;
    // http状态401
    if (status === 401) {
      // http状态500，服务器内部错误，重定向到500页面
      // store.dispatch('cookie/setToken', '');
      // store.dispatch('localStorage/setUser', {});
    }
  });
};
