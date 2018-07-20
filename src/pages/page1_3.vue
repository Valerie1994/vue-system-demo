<template>
  <div>
    <table border="1" width="100%" cellspacing="0">
      <thead>
        <tr>
          <th>项目模块</th>
          <th>开始时间</th>
          <th>完成时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>环境准备</td>
        <td>2018-06-06</td>
        <td>2018-06-08</td>
        <td>
          <a style="color: #495060"><Icon type="ios-color-wand-outline" size="20"></Icon></a>
          &nbsp;&nbsp;
          <a style="color: #495060"><Icon type="ios-trash-outline" size="20"></Icon></a>
        </td>
      </tr>
      <tr>
        <td>开发培训</td>
        <td>2018-06-06</td>
        <td>2018-06-08</td>
        <td>
          <a style="color: #495060"><Icon type="ios-color-wand-outline" size="20"></Icon></a>
          &nbsp;&nbsp;
          <a style="color: #495060"><Icon type="ios-trash-outline" size="20"></Icon></a>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <a class="addProjectItem" @click="itemModal = true">
            <Icon type="ios-plus-outline" size="16"></Icon>
            &nbsp;
            添加已完成模块
          </a>
        </td>
      </tr>
      </tbody>
    </table>
    <Modal v-model="itemModal" title="编辑已完成项目" @on-ok="ok"  @on-cancel="cancel">
      模块名称：<Input v-model="inputValue" placeholder="" style="width: 300px"></Input>
      <br/><br/>
      开始时间：<DatePicker type="date" placeholder="请选择" style="width: 200px"></DatePicker>
      <br/><br/>
      结束时间：<DatePicker type="date" placeholder="请选择" style="width: 200px"></DatePicker>
      <br/><br/>
    </Modal>
  </div>
</template>

<script>
    export default {
        name: "page1_3",
        data () {
          return {
            itemModal: false,
            inputValue:'',
          }
        },
        methods:{
          /*add() {
            console.log(1)
          },
          operation(operationName){
            //添加
            if (operationName == 'add') {
              add();
            }
          },*/
          /*模态框按钮方法*/
          ok () {
            this.$Message.info('提交成功');
          },
          cancel () {
            this.$Message.info('取消编辑');
          }
        },
    }
</script>

<style scoped>
  table{
    border: 1px solid #bbbec4;
    border-collapse: collapse;
  }
  table th{
    border: 1px solid #bbbec4;
    padding: 10px;
    background: #f8f8f9;
  }
  table td{
    border: 1px solid #bbbec4;
    padding: 10px;
    text-align: center;
  }
</style>
