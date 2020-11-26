/* 为路由添加全局守卫 */
export default (context) => {
    let { app } = context
    app.router.beforeEach((to, from, next) => {
        // 不需要登录的页面，直接跳转
        let res = ['/', '/login', '/blog/:id'].some(path => {
            let arr = path.split(":")
            if (path == to.path || (arr.length > 1 && to.path.startsWith(arr[0]))) return true
        })
        if (res) {
            return next()
        }

        // 从cookie中获取token,路由改变时检测是否已经登录
        let token = context.app.$cookies.get("token")
        if (!token) {
            // fullPath 带有参数
            return next({ path: "/login", query: { message: "请先登录", url: to.fullPath } })
        }
        next()
    })
    app.router.afterEach((to, from) => {
        // ...
    })
}