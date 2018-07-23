<template>
  <div>
    <Table :columns="theadColumns" :data="projectItems"></Table>
    <Modal v-model="itemModal" title="编辑已完成项目" @on-ok="ok"  @on-cancel="cancel" width="300">
      <form>
          模块名称：<Input v-model="itemInfo.modularName" placeholder="" style="width: 200px"/>
          <br/><br/>
          开始时间：<DatePicker v-model="itemInfo.startDate" type="date" format="yyyy-MM-dd" placeholder="请选择" style="width: 200px"></DatePicker>
          <br/><br/>
          结束时间：<DatePicker v-model="itemInfo.endDate" type="date" placeholder="请选择" style="width: 200px"></DatePicker>
          <br/><br/>
      </form>
    </Modal>
  </div>
</template>

<script>
    export default {
        name: "page1_3",
        data () {
          return {
            itemModal: false,//模态框不可见
            itemInfo:{},//每一行的数据
            theadColumns: [
              {
                title: '编号',
                key: 'id'
              },
              {
                title: '模块名称',
                key: 'modularName'
              },
              {
                title: '开始日期',
                key: 'startDate'
              },
              {
                title: '结束日期',
                key: 'endDate'
              },
              {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          //显示模态框
                          //this.show(params.index)
                          this.itemModal = true;
                          this.itemInfo = params.row;
                          console.log(params.row);
                        }
                      }
                    }, '修改'),
                    h('Button', {
                      props: {
                        type: 'error',
                        size: 'small'
                      },
                      on: {
                        click: () => {
                          this.remove(params.index)
                        }
                      }
                    }, '删除')
                  ]);
                }
              }
            ],
            projectItems: [
              {
                id:1,
                modularName: '环境准备',
                startDate: '2020-06-06',
                endDate: '2020-06-08',
              },
              {
                id:2,
                modularName: '开发培训',
                startDate: '2020-06-07',
                endDate: '2020-06-09',
              },
            ]
          }
        },
        methods:{
          remove (index) {
            this.projectItems.splice(index, 1);
          },
          /*添加模态框按钮方法*/
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
    border: 1px solid #dddee1;
    border-collapse: collapse;
  }
  table th{
    border: 1px solid #dddee1;
    padding: 10px;
    background: #f8f8f9;
  }
  table td{
    border: 1px solid #dddee1;
    padding: 10px;
    text-align: center;
  }

</style>
