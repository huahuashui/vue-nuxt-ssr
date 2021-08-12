export default {
  // 保存当前所处环境的标识
  env: {
    CREATE_ENV: process.env.CREATE_ENV
  },
  // 服务IP端口
  server: {
    host: '0.0.0.0',
    port: 3020
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '合同通',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'msapplication-tap-highlight',
        content: 'no'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        httpequiv: 'X-UA-Compatible',
        content: 'IE=edge,chrome=1'
      },
      {
        name: 'renderer',
        content: 'webkit|ie-comp|ie-stand'
      },
      {
        hid: 'description',
        name: 'description',
        content: '合同通是合同站'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '合同定制'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    // 一些全局引入的js
    script: [
      {
        src: '/js/jquery-1.8.0.min.js',
        type: 'text/javascript',
        charset: 'utf-8'
      },
      {
        src: '/js/iaskWebSdk.js',
        type: 'text/javascript',
        charset: 'utf-8'
      },
      {
        src: '/js/rem.js',
        type: 'text/javascript',
        charset: 'utf-8'
      },
      {
        src: '/js/baiduStatistic.js',
        type: 'text/javascript',
        charset: 'utf-8'
      },
      {
        src: '/js/TCaptcha.js',
        type: 'text/javascript',
        charset: 'utf-8'
      },
      {
        src: '/js/meiQiaInit.js',
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.less'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/axios.js',
      ssr: true
    },
    {
      src: '@/plugins/ishare-web-sdk.js',
      ssr: false
    },
    {
      src: '@/plugins/vconsole.js',
      ssr: false
    },
    {
      src: '@/plugins/vue-clipboard2.js',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  styleResources: {
    less: './assets/styles/**/*.less'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 解决编译警告
    babel: {
      plugins: [
        [
          '@babel/plugin-proposal-private-property-in-object',
          {
            loose: true
          }
        ],
        [
          '@babel/plugin-proposal-class-properties',
          {
            loose: true
          }
        ],
        [
          '@babel/plugin-proposal-private-methods',
          {
            loose: true
          }
        ]
      ]
    }
  }
}
