<template>
  <div>
    <Alert show-icon>
      新消息
      <template slot="desc">您有2条未读消息，请<u class="tips">点击查看</u>。<Tag checkable color="red">重要</Tag></template>
    </Alert>
    <!-- 表格 -->
    <div>
      <Table :columns="columns3" :data="data1"></Table>
      <br/>
      <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>
      <br/>
      <div style="float: right">
        <Button @click="handleClearCurrentRow">清除选择</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button>查看详情</Button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "mainPage",
    data () {
      return {
        //表头数据
        columns3: [
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '住址',
            key: 'address'
          }
        ],
        //表体数据
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
    methods: {
      handleClearCurrentRow () {
        this.$refs.currentRowTable.clearCurrentRow();
      }
    }
  }
</script>

<style scoped>
  .tips {
    cursor: pointer;
  }
</style>
