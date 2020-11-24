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
    width: 60%;
    margin: 10px auto;
    padding: 16px 0;
    .blog-list {
      flex: 7;
      padding: 0 20px;
      .blog-list-header {
        display: flex;
        justify-content: space-between;
        padding: 16px;
        border: 1px solid #d4d4d5;
        border-radius: 5px 5px 0 0;
        h3 {
          font-weight: bolder;
          color: #008c8c;
        }
        .total-num {
          font-size: 14px;
          .num {
            color: orange;
            font-size: 23px;
          }
        }
      }
      .list {
        padding: 14px;
        border: 1px solid #d4d4d5;
        .blog-item {
          padding: 16px;
          border-bottom: 1px solid #d4d4d5;
          .item {
            display: flex;
            justify-content: space-between;
            .item-content {
              flex: 8;
              display: flex;
              flex-direction: column;
              padding: 10px;
              align-items: flex-start;
              h3 {
                font-size: 18px;
                font-weight: bolder;
                margin-bottom: 16px;
              }
              p {
                font-weight: 300;
                line-height: 20px;
                margin-bottom: 16px;
                text-align: left;
              }
            }
            .item-img {
              flex: 2;
              padding: 10px;
              img {
                width: 100%;
                border: 1px solid green;
                border-radius: 3px;
              }
            }
          }
        }
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
        <div class="blog-list-header">
          <h3>博客</h3>
          <span class="total-num"
            >共
            <span class="num">26</span>
            篇
          </span>
        </div>
        <div class="list">
          <div class="blog-item">
            <div class="item">
              <div class="item-content">
                <h3>你真的理解什么是财富自由吗？</h3>
                <p>
                  正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是大家都那么做而已…...
                </p>
                <div class="info">YLS</div>
              </div>
              <div class="item-img">
                <img src="@/assets/images/皮卡丘.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="blog-item">content</div>
          <div class="blog-item">content</div>
          <div class="blog-item">content</div>
          <div class="blog-item">content</div>
          <div class="blog-item">content</div>
          <div class="blog-item">content</div>
        </div>
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

