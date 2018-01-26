<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Hello everybody，let's go</h2>
    <el-table
      :data="tableData"
      :row-class-name="tableRowClassName">
      border
      style="width: 100%">
        <el-table-column
          align="center"
          prop="time"
          label="日期">
        </el-table-column>
        <el-table-column
          align="center"
          prop="email"
          label="邮件">
        </el-table-column>
        <el-table-column
          align="center"
          prop="uid"
          label="id">
        </el-table-column>
    </el-table>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'welcome to thomas pleasure ground',
      tableData: []
    }
  },
  mounted: function () {
    this.$axios.get('/api/data').then(res => {
      this.tableData = res.data.result
    })
  },
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>
