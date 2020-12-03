<template>
  <div class="user">
    <div v-if="!isLogin" @click="login"><span>登录</span></div>
    <el-dropdown v-else @command="handleClick">
      <div class="el-dropdown-link">
        <img src="@/assets/images/皮卡丘.jpg" alt="" />
        <span>皮卡丘</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出</el-dropdown-item>
        <el-dropdown-item command="index">博客</el-dropdown-item>
        <el-dropdown-item command="backstage">后台管理</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    }
  },
  methods: {

    handleClick(command) {
      if (command == 'logout') {
        this.logout()
      }
      else if (command == 'index') {
        this.$router.push("/")
      }
      else if (command == 'backstage') {
        this.$router.push("/backstage/list")
      }

    },
    login() {
      this.$router.push("/login")
    },
    logout() {
      this.$cookies.set("token", "")
      console.log(this.$cookies.get("token"))
      this.$router.push({ path: "/" })
      this.isLogin = this.loginFlag()
    },
    loginFlag() {
      let token = this.$cookies.get("token")
      console.log(token)
      if (token) {
        return true
      } else {
        return false
      }
    }

  },
  mounted() {
    this.isLogin = this.loginFlag()
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
.user {
  &:hover {
    cursor: pointer;
    color: white;
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    img {
      border: 1px solid rgba(0, 0, 0, 0.4);
      border-radius: 16px;
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  }
}
</style>