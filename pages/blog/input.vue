<template>
  <div class="container">
    <div class="center">
      <div class="title">
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </el-input>
      </div>

      <!--markdown编辑-->
      <no-ssr>
        <mavon-editor :toolbars="toolbars" v-model="value" />
      </no-ssr>

      <div class="tag">
        <div>
          <div class="name">分类</div>
          <el-select v-model="select" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </div>
        <div>
          <div class="name">标签</div>
          <el-select v-model="select" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </div>
      </div>
      <div class="picture">
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="prepend" type="success">首图</el-button>
        </el-input>
      </div>
      <div class="btn">
        <el-button type="info" plain>保存</el-button>
        <el-button type="success" plain>发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'backstage',
  data() {
    return {
      select: "",
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

<style  lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  .center {
    display: flex;
    flex-direction: column;
    max-width: 1127px;
    width: 60%;
    margin: 42px 0;
    .title {
      margin-bottom: 26px;
      /deep/ .el-select {
        .el-input {
          width: 100px;
        }
      }
    }
    .tag {
      margin-top: 26px;
      display: flex;
      justify-content: space-between;
      > div {
        display: flex;
        width: 49%;
      }
    }
    .picture {
      display: flex;
      margin-top: 26px;
    }
    .btn {
      text-align: right;
      margin-top: 26px;
    }
    .name {
      display: flex;
      align-items: center;
      padding: 0 14px;
      color: #008c8c;
      border: 1px solid #008c8c;
      border-radius: 5px 0 0 5px;
    }
    .el-select {
      flex: 1;
    }
  }
}
</style>