import axios from 'axios'
import NProgress from "nprogress";
const instance = axios.create({
  timeout: 10000,
  withCredentials: true
})


export {
  instance as axios
}
// 因为服务端需要从上下文获取cookie，所以将axios做成一个插件的形式
export default (context) => {
  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 给请求头添加token
    let token = context.app.$cookies.get("token")
    if (token) {
      config.headers.token = token
    }
    // context.app.router.push("/home")
    // context.redirect("/home")
    // 区分是客户端请求，还是服务端请求
    // if (process.client) {
    // 为了客户端/服务端 统一操作token,所以选择不使用 storage存储token,使用cookie存储
    // window.sessionStorage.setItem("token", "tokkklll;")
    // NProgress.start()
    // }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  // 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // if (process.client) {
    //   NProgress.done()
    // }

    // 如果api接口返回没有登录时，跳转到登录页面
    if (response.data.code == -3) {
      context.redirect({ path: "/login", query: { message: "请先登录", url: context.route.fullPath } })
    }

    return response;
  }, function (error) {
    // 对响应错误做点什么
    if (process.client) {
      NProgress.done()
    }
    return Promise.reject(error);
  });
}