<template>
  <div class="container">
    <div class="center">
      <div class="blog-header">
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
      <div class="blog-img">
        <img src="@/assets/images/皮卡丘.jpg" alt="" />
      </div>
      <div class="blog-content">
        <div class="blog-content-tag">
          <span> 原创 </span>
        </div>
        <div class="blog-content-title">随便的一个标题</div>
        <div class="blog-content-main">ggggggg</div>
      </div>
      <div class="comment">
        <div class="comment-list">
          <div class="header">
            评论
          </div>
          <div class="content-list">
            评论内容列表
          </div>
        </div>
        <div class="comment-input">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  .center {
    max-width: 1127px;
    width: 60%;
    margin: 42px 0;
    border: 1px solid #d4d4d5;
    border-radius: 5px;
    .blog-header {
      flex-wrap: nowrap;
      padding: 14px;
      border-bottom: 1px solid #d4d4d5;
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
        flex-wrap: nowrap;
        white-space: nowrap;
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
    .blog-img {
      padding: 14px;
      border: 1px solid #d4d4d5;
      display: flex;
      justify-content: center;
      img {
        border: 1px solid #d4d4d5;
        border-radius: 5px;
        max-width: 100%;
      }
    }
    .blog-content {
      padding: 14px;
      border: 1px solid #d4d4d5;
      .blog-content-tag {
        text-align: right;
        padding: 10px;
        span {
          padding: 7px 10px;
          border: 1px solid orange;
          color: orange;
          border-radius: 5px;
          font-size: 12px;
          font-weight: bolder;
        }
      }
      .blog-content-title {
        margin: 4px 0;
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
      }
      .blog-content-main {
        padding: 28px 56px;
      }
    }
    .comment {
      padding: 14px;
      .comment-list {
        padding: 14px;
        height: 400px;
        border: 1px solid #d4d4d5;
        border-top: 2px solid #008c8c;
        border-radius: 5px;
        .header{
          color: #008c8c;
          font-size: 16px;
          font-weight: bolder;
          border-bottom: 1px solid #d4d4d5;
          padding: 14px 0;
        }
        .content-list{
          padding-top: 14px 0;
        }
      }
    }
  }
}
</style>