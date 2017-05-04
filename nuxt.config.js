module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s — Где Ремонта Нет!',
    meta: [
      {charset: 'utf-8'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {'http-equiv': 'cleartype', content: 'on'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
      },
      {hid: 'description', name: 'description', content: ''},
      {hid: 'keywords', name: 'keywords', content: ''},
      {name: 'mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400&subset=cyrillic'
      },
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/sweetalert2/6.4.3/sweetalert2.min.css'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'}
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    {src: 'bulma', lang: 'sass'},
    '~assets/css/main.css'
  ],
  /*
   ** Vendor Build tools
   */
  build: {
    vendor: [
      'axios',
      'v-mask'
    ]
  },
  plugins: [
    '~plugins/yandex-metrika.js',
    '~plugins/vk-widget.js',
    '~plugins/cakle.js'
  ],
  /*
   ** Customize the progress-bar color
   
  loading: {
    color: 'rgb(75, 183, 90)'
  }*/
}
