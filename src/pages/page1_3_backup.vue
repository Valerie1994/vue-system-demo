<template>
  <div>
    <!--<Table :columns="theadColumns" :data="projectItems"></Table>-->
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
      <!--<tr>
        <td>环境准备</td>
        <td>2020-06-06</td>
        <td>2020-06-08</td>
        <td>
          <Tooltip content="修改" placement="top">
            <a style="color: #495060" @click="itemModal = true"><Icon type="ios-color-wand-outline" size="20"></Icon></a>
          </Tooltip>
          &nbsp;&nbsp;
          <Tooltip content="删除" placement="top">
            <a style="color: #495060"><Icon type="ios-trash-outline" size="20"></Icon></a>
          </Tooltip>
        </td>
      </tr>-->

      <tr v-for="projectItem in projectItems">
        <td>{{ projectItem.id }}</td>
        <td>{{ projectItem.startDate }}</td>
        <td>{{ projectItem.endDate }}</td>
        <td>
          <Tooltip content="修改" placement="top">
            <a style="color: #495060" @click="showItemModal()"><Icon type="ios-color-wand-outline" size="20"></Icon></a>
          </Tooltip>
          &nbsp;&nbsp;
          <Tooltip content="删除" placement="top">
            <a style="color: #495060"><Icon type="ios-trash-outline" size="20"></Icon></a>
          </Tooltip>
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
    <Modal v-model="itemModal" title="编辑已完成项目" @on-ok="ok"  @on-cancel="cancel" width="300">
      模块名称：<Input v-model="inputValue" placeholder="" style="width: 200px"/>
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
            /*theadColumns: [
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
                          this.show(params.index);
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
            ],*/
            projectItems: [
              {
                id:1,
                //modularName: '环境准备',
                startDate: '2020-06-06',
                endDate: '2020-06-08',
              },
              {
                id:2,
                //modularName: '开发培训',
                startDate: '2020-06-06',
                endDate: '2020-06-08',
              },
            ]
          }
        },
        methods:{
          /*修改按钮方法*/
          show (index) {
            console.log(index)
          },
          showItemModal(id){
            //itemModal = true;
            console.log(id);
          },
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
