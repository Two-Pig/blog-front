/* default是每个页面默认的布局 */
<style lang="scss" scoped>
header {
  width: 100%;
  min-width: 720px;
  background-color: rgb(27, 28, 29);
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.7);
    .logo-nav {
      display: flex;
      align-items: center;
      .logo {
        display: flex;
        align-items: center;
        margin-right: 10px;
        img {
          width: 60px;
          height: 60px;
        }
        > span {
          font-size: 0;
        }
      }
      .nav ul {
        display: flex;
        align-items: center;
        li {
          margin: 0 6px;
          padding: 11px 13px;
          white-space: nowrap;
          cursor: pointer;
          &:hover {
            background: rgba(255, 255, 255, 0.08);
            color: #fff;
          }
        }
        .active {
          color: #fff;
          &:hover {
            background: rgba(255, 255, 255, 0.08);
          }
        }
      }
    }
    .search {
      input {
        background-color: rgba(255, 255, 255, 0.9);
        font-size: 14px;
      }
    }
  }
}
footer {
  width: 100%;
  background-color: #1b1c1d;
  .footer-center {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.5);
    .item-list {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      .item {
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 110px;
        &:not(:last-child) {
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        .last-blog{
          width: 100%;
          a{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        img{
          height: 110px;
          width: auto;
        }
        h4 {
          margin-bottom: 16px;
          color: white;
          font-size: 16px;
        }
        div{
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        a{
          padding: 3px 0;
          text-align: center;
          &:hover{
            color: white;
          }
        }
        span{
          text-align: center;
        }
      }
      .three {
        width: 20%;
      }

      .seven {
        width: 40%;
      }
    }
    .division {
      margin: 28px 0;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .copy-right {
      text-align: center;
    }
  }
}
</style>
<template>
  <div>
    <header>
      <nav>
        <div class="logo-nav">
          <div class="logo">
            <h1>
              <nuxt-link to="/" title="博客">
                <img src="@/assets/logo.png" alt="博客" />
              </nuxt-link>
              <!-- 这里放logo图片 -->
            </h1>
            <span>博客</span>
          </div>
          <div class="nav">
            <ul>
              <li class="nav-item active">
                <i class="iconfont icon-shouye"></i>首页
              </li>
              <li class="nav-item"><i class="iconfont icon-fenlei"></i>分类</li>
              <li class="nav-item">
                <i class="iconfont icon-biaoqian"></i>标签
              </li>
              <li class="nav-item">
                <i class="iconfont icon-guidangxiangmu"></i>归档
              </li>
              <li class="nav-item">
                <i class="iconfont icon-guanyuwomen"></i>关于我
              </li>
            </ul>
          </div>
        </div>
        <div class="search">
          <el-input v-model="searchValue" placeholder="请输入搜索内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </nav>
    </header>
    <Nuxt />
    <footer>
      <div class="footer-center">
        <div class="item-list">
          <div class="item three">
            <img src="@/assets/logo.png" alt="博客" />
          </div>
          <div class="item three">
            <h4>最新博客</h4>
            <div class="last-blog">
              <a href="#">用户故事666666666666666666666666666666666</a>
              <a href="#">用户故事6666</a>
              <a href="#">用户故事6666</a>
            </div>
          </div>
          <div class="item three">
             <h4>联系我</h4>
            <div>
              <a href="#">Email：1329926763@qq.com</a>
              <a href="#">QQ：1329926763</a>
            </div>
          </div>
          <div class="item seven">
            <h4>Blog</h4>
           <span>这是我用nuxt.js框架搭建的博客系统，哈哈哈哈哈哈哈哈哈，希望可以给来到这儿的人有所帮助...</span>
          </div>
        </div>
        <div class="division"></div>
        <p class="copy-right">Copyright © 2020 Designed by YLS</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: ""
    }
  },
  mounted() {

  },
}
</script>