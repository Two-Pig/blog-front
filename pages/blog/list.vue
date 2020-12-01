<template>
  <div class="container">
    <div class="center">
      <el-table
        :data="tableData"
        border
        :height="tableHeight"
        style="width: 100%"
        ref="table"
      >
        <el-table-column prop="title" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="type" label="类型" width="180">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        ref="page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        background
        layout="total, prev, pager, next, sizes, jumper"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  layout: "backstage",
  data() {
    return {
      tableData: [
        {
          title: "我是一只猪哈哈哈哈",
          type: "自我介绍",
          updateTime: "2020-12-1 23:48:26"
        },
        {
          title: "我是一只猪哈哈哈哈",
          type: "自我介绍",
          updateTime: "2020-12-1 23:48:26"
        },
        {
          title: "我是一只猪哈哈哈哈",
          type: "自我介绍",
          updateTime: "2020-12-1 23:48:26"
        },
        {
          title: "我是一只猪哈哈哈哈",
          type: "自我介绍",
          updateTime: "2020-12-1 23:48:26"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableHeight: 200
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    dynamicTableHeight() {
      this.$nextTick(() => {
        let windowHeight = window.innerHeight
        let tableTop = this.$refs.table.$el.getBoundingClientRect().top
        let pageHeight = this.$refs.page.$el.getBoundingClientRect().height
        this.tableHeight = windowHeight - tableTop - pageHeight
      })
    }
  },
  mounted() {
    this.dynamicTableHeight()
    window.addEventListener("resize", () => {
      this.dynamicTableHeight()
    })
  }
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
    .el-pagination {
      text-align: right;
    }
  }
}

</style>