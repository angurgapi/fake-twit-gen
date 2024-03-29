export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  
  target: 'static',
  mode: 'spa',
  router: {
      base: ''
      },
  head: {
    title: 'fake-twit-gen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'icon.jpeg' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  // '@/assets/scss/colors.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  '@nuxtjs/style-resources',
  ],
  styleResources: {
    sass: ['@/assets/scss/colors.sass',
        '@/assets/scss/mixins.sass'
    ]
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  
  ],

  

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
