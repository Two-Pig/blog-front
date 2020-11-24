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
    width: 70%;
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
          font-size: 27px;
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
          &:not(:last-child) {
            border-bottom: 1px solid #d4d4d5;
          }
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
                font-size: 14px;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3; /*控制可显示几行文本*/
              }
              .info {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                width: 100%;
                .info-left {
                  display: flex;
                  color: rgba(black, 0.4);

                  img {
                    border: 1px solid rgba(0, 0, 0, 0.4);
                    border-radius: 16px;
                    width: 25px;
                    height: 25px;
                    vertical-align: middle;
                  }
                  .user {
                    color: #008c8c;
                    margin-left: 2px;
                  }
                  .date {
                    display: flex;
                    align-items: center;
                    margin-left: 10px;
                  }
                  .view {
                    display: flex;
                    align-items: center;
                    margin-left: 10px;
                  }
                  i {
                    margin-right: 2px;
                  }
                }
                .info-right {
                  text-align: right;
                  display: flex;
                  align-items: center;
                  border: 1px solid blue;
                  color: blue;
                  border-radius: 3px;
                  padding: 2px 4px;
                }
              }
            }
            .item-img {
              flex: 3;
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
      .blog-list-footer {
        display: flex;
        justify-content: space-between;
        padding: 16px;
        border: 1px solid #d4d4d5;
        border-radius: 0 0 5px 5px;
        color: blue;
        font-size: 12px;
        span {
          border: 1px solid blue;
          padding: 6px 12px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
    .categoryt-tag-recommend {
      flex: 3;
      padding: 0 14px;
      .category {
        border: 1px solid #d4d4d5;
        border-radius: 5px;
        font-size: 14px;
        .header {
          display: flex;
          justify-content: space-between;
          padding: 14px;
          color: #008c8c;
          background-color: #f3f4f5;
          border-bottom: 1px solid #d4d4d5;
        }
        .category-list {
          margin: 14px;
          border: 1px solid #d4d4d5;
          box-shadow: 1px 1px 1px #d4d4d5;
          border-radius: 5px;
          div {
            padding: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:not(:last-child) {
              border-bottom: 1px solid #d4d4d5;
            }

            &:hover {
              cursor: pointer;
              background: rgba(0, 0, 0, 0.03);
            }
            .num {
              color: blue;
              border: 1px solid blue;
              border-radius: 5px;
              padding: 6px 12px;
            }
          }
        }
      }
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
                  笑一个吧，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼
                </p>
                <div class="info">
                  <div class="info-left">
                    <span class="user">
                      <img src="@/assets/images/皮卡丘.jpg" alt="" />
                      <span>YLS</span>
                    </span>
                    <span class="date">
                      <i class="iconfont icon-rili"></i>
                      2020-11-24
                    </span>
                    <span class="view">
                      <i class="iconfont icon-liulan"></i>
                      666666</span
                    >
                  </div>
                  <div class="info-right">
                    <span>原创</span>
                  </div>
                </div>
              </div>
              <div class="item-img">
                <img src="@/assets/images/皮卡丘.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="blog-item">
            <div class="item">
              <div class="item-content">
                <h3>你真的理解什么是财富自由吗？</h3>
                <p>
                  笑一个吧，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼
                </p>
                <div class="info">
                  <div class="info-left">
                    <span class="user">
                      <img src="@/assets/images/皮卡丘.jpg" alt="" />
                      <span>YLS</span>
                    </span>
                    <span class="date">
                      <i class="iconfont icon-rili"></i>
                      2020-11-24
                    </span>
                    <span class="view">
                      <i class="iconfont icon-liulan"></i>
                      666666</span
                    >
                  </div>
                  <div class="info-right">
                    <span>原创</span>
                  </div>
                </div>
              </div>
              <div class="item-img">
                <img src="@/assets/images/皮卡丘.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="blog-item">
            <div class="item">
              <div class="item-content">
                <h3>你真的理解什么是财富自由吗？</h3>
                <p>
                  笑一个吧，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼
                </p>
                <div class="info">
                  <div class="info-left">
                    <span class="user">
                      <img src="@/assets/images/皮卡丘.jpg" alt="" />
                      <span>YLS</span>
                    </span>
                    <span class="date">
                      <i class="iconfont icon-rili"></i>
                      2020-11-24
                    </span>
                    <span class="view">
                      <i class="iconfont icon-liulan"></i>
                      666666</span
                    >
                  </div>
                  <div class="info-right">
                    <span>原创</span>
                  </div>
                </div>
              </div>
              <div class="item-img">
                <img src="@/assets/images/皮卡丘.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="blog-item">
            <div class="item">
              <div class="item-content">
                <h3>你真的理解什么是财富自由吗？</h3>
                <p>
                  笑一个吧，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼
                </p>
                <div class="info">
                  <div class="info-left">
                    <span class="user">
                      <img src="@/assets/images/皮卡丘.jpg" alt="" />
                      <span>YLS</span>
                    </span>
                    <span class="date">
                      <i class="iconfont icon-rili"></i>
                      2020-11-24
                    </span>
                    <span class="view">
                      <i class="iconfont icon-liulan"></i>
                      666666</span
                    >
                  </div>
                  <div class="info-right">
                    <span>原创</span>
                  </div>
                </div>
              </div>
              <div class="item-img">
                <img src="@/assets/images/皮卡丘.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="blog-list-footer">
          <span>上一页</span>
          <span>下一页</span>
        </div>
      </div>
      <div class="categoryt-tag-recommend">
        <div class="category">
          <div class="header">
            <span>
              <i class="iconfont icon-fenlei"></i>
              分类
            </span>
            <span class="more"> more >> </span>
          </div>
          <div class="category-list">
            <div>
              <span class="category-name">随笔日志</span>
              <span class="num">26</span>
            </div>
            <div>111</div>
            <div>111</div>
          </div>
        </div>
      </div>
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

