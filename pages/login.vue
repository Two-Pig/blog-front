<template>
  <div class="container">
    <div class="box">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="form">
        <div class="item">
          <i class="iconfont icon-yonghu"></i>
          <input v-model="user.userName" type="text" placeholder="username" />
        </div>
        <div class="item">
          <i class="iconfont icon-mima"></i>
          <input
            v-model="user.password"
            type="password"
            placeholder="password"
          />
        </div>
        <div class="btn">
          <button @click="login">登录</button>
          <button>reset</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { axios } from "@/plugins/http.js"
export default {
  layout: "blank",
  data() {
    return {
      user: {
        userName: 'admin',
        password: 123456
      }
    }
  },
  methods: {
    login() {
      //todo 发送登录请求
      this.$cookies.set("token", "token1341245", { maxAge: 24 * 60 * 60 })
      console.log(this.$route.query.url)
      if (this.$route.query.url) {
        this.$router.push({ path: this.$route.query.url })
      }else{
        this.$router.push({ path: "/" })
      }
      
    }

  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  /*使子元素居中*/
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    position: relative;
    width: 600px;
    height: 400px;
    border: 1px solid #008c8c;
    border-radius: 5px;
    box-shadow: 0px 1px 1px 1px gray;
    .logo {
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0 0 10px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      /*使用定位+calc函数上移自身高度50%*/
      /*position: relative;
        top: calc(-$height / 2);*/
      /*transform: translateY(-50%);是上移自身高度的一半*/
      /*transform: translateY(-50%);*/
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
    }
    .form {
      width: 400px;
      height: 200px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-top: 30px;
      .item {
        width: 100%;
        height: 30px;
        margin-bottom: 30px;
        border: 1px solid #008c8c;
        line-height: 30px;
        i {
          display: block;
          box-sizing: border-box;
          float: left;
          width: 10%;
          height: 100%;
          background-color: #ccc;
          text-align: center;
        }
        input {
          float: left;
          box-sizing: border-box;
          height: 100%;
          width: 90%;
        }
      }
      .btn {
        width: 100%;
        display: flex;
        justify-content: space-around;
        button {
          background-color: #008c8c;
          width: 90px;
          height: 40px;
          border-radius: 10px;
          font-size: 18px;
        }
        button:active {
          background-color: green;
        }
      }
    }
  }
}
</style>