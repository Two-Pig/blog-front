import axios from 'axios'
const myaxios = axios.create({
    timeout: 10000,
    withCredentials:true
})
// myaxios.interceptors.response.use(
//   function (response) {
//     return response.data
//   },
//   function (error) {
//     // ...
//   }
// )
function get(url,params={}){
    return axios.get(url,params)
}
function post(url,params={}){
    return axios.post(url,params)
}
export {
    get,
    post
}