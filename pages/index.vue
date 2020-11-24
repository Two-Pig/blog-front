<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  .center {
    display: flex;
    justify-content: space-between;
    background-color: pink;
    width: 60%;
    margin: 10px auto;
    .blog-list {
      flex: 7;
      padding: 14px;
      background-color: red;

      .blog-list-header {
        border: 1px solid black;
      }
    }
    .categoryt {
      flex: 3;
      padding: 14px;
      background-color: green;
    }
  }
}
</style>
<template>
  <div class="container">
    <div class="center">
      <div class="blog-list">
        <div class="blog-list-header">列表头</div>
      </div>
      <div class="categoryt">标签分类</div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/plugins/http"
export default {
  asyncData(context) {
    //  context.app.router.push("/home")
    // context.redirect("/home")
    let url = "http://localhost:8080/user/queryUsers"
    axios.get(url).then((res) => {
      console.log(res.data.data)
    })
    return {
      name: "dy",
    }
  },
  mounted() {
    // this.$router.push("/home")
    let url = "http://localhost:8080/user/queryUsers"
    axios.get(url).then((res) => {
      console.log(res.data.data)
    })
  },
}
</script>

