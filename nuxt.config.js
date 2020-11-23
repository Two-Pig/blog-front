export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'blog-front',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '博客' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "@/assets/style/main.scss"
    ],

<<<<<<< HEAD
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
  ],
=======
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/element-ui',
        {
            src: '@/plugins/http'
        },
        '@/plugins/router'
    ],
>>>>>>> 452d797f8847ce3bcb35bccffd220a83eb5b0973

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        'cookie-universal-nuxt',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [/^element-ui/],
    }
}