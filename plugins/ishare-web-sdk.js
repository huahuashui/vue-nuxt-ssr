import Config from '~/config/index';

export default ({ app, store }) => {
  // 判断环境，web端才执行
  if (process.client) {
    const ConfigToEnv = Config[process.env.CREATE_ENV] || {};

    console.log('当前环境变量2', process.env.CREATE_ENV, ConfigToEnv);

    const IshareWebSdk = window.ISHARE_WEB_SDK;
    // 埋点初始化
    // eslint-disable-next-line no-new
    new IshareWebSdk({
      PRODUCT_CONFIG: {
        // 终端类型
        TERMINAL_TYPE: '1',
        // 产品名称
        PRODUCT_NAME: 'ishare',
        // 站点类型
        SITE_TYPE: 'iLawService',
        // 产品代码
        PRODUCT_CODE: '0',
        // 产品版本
        PRODUCT_VER: 'V1.0.1'
      },
      // 请求方式post get(目前m端是post,pc端是get)
      TRACK_TYPE: 'post',
      // 上报服务器地址
      TRACK_URL: ConfigToEnv.dwUrl + '/ishare/bilog',
      // 是否自动上报pv事件 （NE001）
      PAGEVIEW: true
    });
    const sdkToken = 'iask_web';
    window.iask_web.init(sdkToken, {
      local_storage: {
        type: 'localStorage'
      },
      loaded: (sdk) => {
        // if (store.state.cookie.visitId) {
        //   // 设置visitID
        //   sdk.set_visit_id(store.state.cookie.visitId);
        // } else {
        //   const visitId = String(tools.random(9999, 99999)) + new Date().getTime().toString().substring(0, 18);
        //   // 存入cookie
        //   // store.dispatch('cookie/setVisitId', visitId);
        //   // 设置visitID
        //   sdk.set_visit_id(visitId);
        // }
      }
    });
  }
};
