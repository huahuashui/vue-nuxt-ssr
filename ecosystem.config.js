module.exports = {
  apps: [
    {
      name: 'vue-nuxt-ssr',
      // script: 'nuxt',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      exec_interpreter: 'bash',
      cwd: './',
      watch: [
        '.nuxt',
        'nuxt.config.js',
        'package.json'
      ],
      exec_mode: 'cluster',
      min_uptime: '60s',
      instances: 3,
      error_file: process.env.MODE_ENV === 'local' ? './logs/app-err.log' : '/data/logs/ishare-agreement-m/app-err.log',
      out_file: process.env.MODE_ENV === 'local' ? './logs/app-out.log' : '/data/logs/ishare-agreement-m/app-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      max_restarts: 30,
      autorestart: false,
      max_memory_restart: '2G',
      append_env_to_name: true
    }
  ]
}
