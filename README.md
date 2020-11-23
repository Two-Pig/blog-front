# blog-front

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## nuxt中集成sass
1. 安装sass 
[https://www.nuxtjs.cn/api/configuration-css](https://www.nuxtjs.cn/api/configuration-css)
```
npm install --save-dev node-sass sass-loader
```
2. 在vue文件中使用 `lang="scss"` 而不是 `lang="sass"`
```
<style lang="scss">  

</style>
```
## 服务端没有document，不能操作cookie,使用cookie-universal-nuxt插件,客户端/服务端都能操作cookie
参考文档：[https://www.npmjs.com/package/cookie-universal-nuxt](https://www.npmjs.com/package/cookie-universal-nuxt)
1. 安装 `cookie-universal-nuxt`
```
npm i --save cookie-universal-nuxt
```
2. 在 `nuxt.config.js` 文件中配置
```
    modules: [
        'cookie-universal-nuxt',
    ],
```
3. 安装完成后，vue根实例下会存在 `$cookies` 属性
```
1. 在服务端 context.app 或取vue根实例
context.app.$cookies.get("token")
2. 在vue文件中，客户端可以用 this 或取到根实例
export default {
  methods: {
    login() {
      this.$cookies.set("token", "i am token")
    }
  }
}
```

# 路由跳转的方式
1. 服务端:使用 `context.app.router` 或者 `context.redirect()`
```
 context.app.router.push("/home")

 context.redirect("/home")
```
2. 客户端：`this.$router`
```
this.$router.push("/home")
```
# 前端设置跨域
参考文档：[https://www.npmjs.com/package/@nuxtjs/proxy](https://www.npmjs.com/package/@nuxtjs/proxy)
