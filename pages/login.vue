<template>
  <div>
    <div>{{ $route.query.message }}</div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import {axios} from "@/plugins/http.js"
export default {
  methods:{
    login(){
      //todo 发送登录请求
      this.$cookies.set("token","token1341245",{maxAge:24*60*60})
      console.log(this.$route.query.url)
      this.$router.push({path:this.$route.query.url})
    }
  }
}
</script>

<style>
</style>