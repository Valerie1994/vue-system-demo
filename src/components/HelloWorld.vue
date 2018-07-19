<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              首页
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              分类
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              管理
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              明细
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                目录1
              </template>
              <MenuItem name="1-1" @click="jump11">1-1</MenuItem>
              <MenuItem name="1-2">1-2</MenuItem>
              <MenuItem name="1-3">1-3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                目录2
              </template>
              <MenuItem name="2-1">2-1</MenuItem>
              <MenuItem name="2-2">2-2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                目录3
              </template>
              <MenuItem name="3-1">3-1</MenuItem>
              <MenuItem name="3-2">3-2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>目录1</BreadcrumbItem>
            <BreadcrumbItem>1-1</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '500px', background: '#fff'}">
            <MainPage></MainPage>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import MainPage from '@/pages/mainPage';
  export default {
    components: {
      MainPage
    },
    methods:{
      jump11:function(){
        console.log(this);
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
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
</style>
