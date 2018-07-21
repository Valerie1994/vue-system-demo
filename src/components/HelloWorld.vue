<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav">
            <MenuItem name="1"  @click.native="pageChange(mainPage)">
              <Icon type="ios-navigate"></Icon>
              <span>首页</span>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="podium"></Icon>
              合作
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              历史
            </MenuItem>
            <MenuItem name="4">
              <Icon type="android-options" size="16"></Icon>
              设置
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <!-- 这里的active-name属性就决定了哪一个菜单一开始就被选中 -->
          <Menu active-name="1_1" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                管理
              </template>
              <MenuItem name="1_1" @click.native="pageChange(page1_1)">项目进度</MenuItem>
              <MenuItem name="1_2">项目介绍</MenuItem>
              <MenuItem name="1_3" @click.native="pageChange(page1_3)">项目详情</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="person-stalker"></Icon>
                员工
              </template>
              <MenuItem name="2_1">2-1</MenuItem>
              <MenuItem name="2_2">2-2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="android-notifications"></Icon>
                消息
              </template>
              <MenuItem name="3_1">3-1</MenuItem>
              <MenuItem name="3_2">3-2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '12px 0'}">
          <!-- <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
             <BreadcrumbItem>目录1</BreadcrumbItem>
             <BreadcrumbItem>1-1</BreadcrumbItem>-->
          </Breadcrumb>
          <Content :is="currentView" :style="{padding: '24px', minHeight: '500px', background: '#fff'}">
            <!--<MainPage></MainPage>-->
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import MainPage from '@/pages/mainPage';
  import Page1_1 from '@/pages/page1_1';
  import Page1_3 from '@/pages/page1_3';

  export default {
    components: {
      MainPage,
      Page1_1,
      Page1_3
    },
    data(){
      return{
        mainPage:'MainPage',
        page1_1:'Page1_1',
        page1_3:'page1_3',
        currentView:'MainPage',
      }
    },
    methods:{
      pageChange(pageName){
        this.currentView = pageName;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
</style>
