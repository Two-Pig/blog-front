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
        <div class="blog-content-main">
          <!--markdown展示-->
          <!--在 mavon-editor 标签中添加class="md" 和在上一层嵌套<no-ssr>都可以达到解析markdown语法的效果 -->
          <mavon-editor
            class="md"
            :toolbarsFlag="false"
            defaultOpen="preview"
            :subfield="false"
            :editable="false"
            :scrollStyle="true"
            :toolbars="toolbars"
            :value="value"
          />
        </div>
      </div>
      <div class="comment">
        <div class="comment-list">
          <div class="header">评论</div>
          <div class="content-list">
            <div class="comment-item">
              <div class="img">
                <img src="@/assets/images/皮卡丘.jpg" alt="" />
              </div>
              <div class="comment-user">
                <div class="user">
                  <span class="name">
                    <span class="sender">最强王者</span><span>@回复</span>
                    <span class="receiver">荣耀王者</span>
                    <span class="time">2020-11-26 23:36:21</span>
                  </span>
                  <span class="reply-delete">
                    <span class="reply">回复</span>

                    <span class="delete">删除</span>
                  </span>
                </div>
                <div class="content">
                  哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                </div>
                <div class="comments">
                  <div class="comment-item"> 
                    <div class="img">
                      <img src="@/assets/images/皮卡丘.jpg" alt="" />
                    </div>
                    <div class="comment-user">
                      <div class="user">
                        <span class="name">
                          <span class="sender">最强王者</span><span>@回复</span>
                          <span class="receiver">荣耀王者</span>
                          <span class="time">2020-11-26 23:36:21</span>
                        </span>
                        <span class="reply-delete">
                          <span class="reply">回复</span>

                          <span class="delete">删除</span>
                        </span>
                      </div>
                      <div class="content">哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
                    </div>
                  </div>
                  <div class="comment-item">
                    <div class="img">
                      <img src="@/assets/images/皮卡丘.jpg" alt="" />
                    </div>
                    <div class="comment-user">
                      <div class="user">
                        <span class="name">
                          <span class="sender">最强王者</span><span>@回复</span>
                          <span class="receiver">荣耀王者</span>
                          <span class="time">2020-11-26 23:36:21</span>
                        </span>
                        <span class="reply-delete">
                          <span class="reply">回复</span>

                          <span class="delete">删除</span>
                        </span>
                      </div>
                      <div class="content">
                        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                      </div>
                    </div>
                  </div>
                  <div class="comment-item">
                    <div class="img">
                      <img src="@/assets/images/皮卡丘.jpg" alt="" />
                    </div>
                    <div class="comment-user">
                      <div class="user">
                        <span class="name">
                          <span class="sender">最强王者</span><span>@回复</span>
                          <span class="receiver">荣耀王者</span>
                          <span class="time">2020-11-26 23:36:21</span>
                        </span>
                        <span class="reply-delete">
                          <span class="reply">回复</span>

                          <span class="delete">删除</span>
                        </span>
                      </div>
                      <div class="content">哈哈哈哈哈哈哈哈哈哈哈</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-item">
              <div class="img">
                <img src="@/assets/images/皮卡丘.jpg" alt="" />
              </div>
              <div class="comment-user">
                <div class="user">
                  <span class="name">
                    <span class="sender">最强王者</span><span>@回复</span>
                    <span class="receiver">荣耀王者</span>
                    <span class="time">2020-11-26 23:36:21</span>
                  </span>
                  <span class="reply-delete">
                    <span class="reply">回复</span>

                    <span class="delete">删除</span>
                  </span>
                </div>
                <div class="content">哈哈哈哈哈哈哈哈</div>
                <div class="comments"></div>
              </div>
            </div>
            <div class="comment-item">
              <div class="img">
                <img src="@/assets/images/皮卡丘.jpg" alt="" />
              </div>
              <div class="comment-user">
                <div class="user">
                  <span class="name">
                    <span class="sender">最强王者</span><span>@回复</span>
                    <span class="receiver">荣耀王者</span>
                    <span class="time">2020-11-26 23:36:21</span>
                  </span>
                  <span class="reply-delete">
                    <span class="reply">回复</span>

                    <span class="delete">删除</span>
                  </span>
                </div>
                <div class="content">
                  哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                </div>
                <div class="comments"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="comment-input">
          <el-input type="textarea" :rows="4" placeholder="请输入内容">
          </el-input>
          <div class="btn">
            <el-button type="success">发布</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '# hhh',
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      }
    }
  },
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
        border: 1px solid #d4d4d5;
        border-top: 2px solid #008c8c;
        box-shadow: 0 1px 2px 0 #22242626;
        border-radius: 5px;
        .header {
          color: #008c8c;
          font-size: 16px;
          font-weight: bolder;
          border-bottom: 1px solid #d4d4d5;
          padding: 14px 0;
        }
        .content-list {
          padding-top: 14px;
          .comment-item {
            display: flex;
            margin-top: 16px;
            .img {
              width: 35px;
              height: 35px;
              margin-right: 16px;
              img {
                width: 100%;
                height: 100%;
                border: 1px solid #008c8c;
                border-radius: 5px;
              }
            }
            .comment-user {
              flex: 1;
              display: flex;
              flex-direction: column;
              .user {
                display: flex;
                justify-content: space-between;
                .name {
                  .sender {
                    font-weight: bolder;
                  }
                  .receiver {
                    margin-left: 4px;
                    font-weight: bolder;
                    color: gray;
                    white-space: nowrap;
                  }
                  .time {
                    font-size: 12px;
                    color: #008c8c;
                    margin-left: 6px;
                    letter-spacing: 0;
                  }
                }
                .reply-delete {
                  white-space: nowrap;

                  span {
                    cursor: pointer;
                    white-space: nowrap;
                  }
                  .reply {
                    color: #008c8c;
                    white-space: nowrap;
                  }
                  .delete {
                    margin-left: 6px;
                    color: red;
                  }
                }
              }
              .content {
                margin-top: 6px;
                line-height: 1.3em;
                font-size: 14px;
              }
            }
            .comments {
            }
          }
        }
      }
      .comment-input {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        .btn {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>