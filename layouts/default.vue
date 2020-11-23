/* default是每个页面默认的布局 */
<style lang="scss" scoped>
header {
  width: 100%;
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
          &:hover{
            background: rgba(255,255,255,.08);
            color:  #fff;
          }
        }
        .active {
          color: #fff;
          &:hover{
            background: rgba(255,255,255,.08);
          }
        }
      }
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
              <li class="nav-item active">首页</li>
              <li class="nav-item">分类</li>
              <li class="nav-item">标签</li>
              <li class="nav-item">归档</li>
              <li class="nav-item">关于我</li>
            </ul>
          </div>
        </div>
        <div class="search">
          <input type="text" />
        </div>
      </nav>
    </header>

    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
};
</script>