<template>
  <Modal v-model="itemModal" title="编辑已完成项目" @on-ok="ok"  @on-cancel="cancel">
    模块名称：<Input v-model="inputValue" placeholder="" style="width: 300px"/>
    <br/><br/>
    开始时间：<DatePicker type="date" placeholder="请选择" style="width: 200px"></DatePicker>
    <br/><br/>
    结束时间：<DatePicker type="date" placeholder="请选择" style="width: 200px"></DatePicker>
    <br/><br/>
  </Modal>
</template>

<script>
    export default {
        name: "ProjectItemModal",
        methods:{
          /*模态框中提交和取消按钮对应的方法*/
          ok () {
            this.$Message.info('提交成功');
          },
          cancel () {
            this.$Message.info('取消编辑');
          }
        }
    }
</script>

<style scoped>

</style>
