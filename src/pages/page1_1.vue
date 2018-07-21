<template>
  <div class="progress">
    <h2>
      贷款核算-项目进度 &nbsp;
      <Rate disabled v-model="valueDisabled" allow-half></Rate>
      <span style="color: #f5a623">{{ valueDisabled }}</span>
</h2>
    <br/>
    <ul id="progressUl">
      <li v-for="item in progressList">
        <span>{{ item.progressName }}<br/></span>
        <Progress :percent="item.progressNum"></Progress>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "page1_1",
    data(){
        return{
          progressList:[
            {progressName:'环境准备',progressNum:100},
            {progressName:'开发培训',progressNum:100},
            {progressName:'基础算法',progressNum:80},
            {progressName:'贷款放款',progressNum:36},
            {progressName:'正常还款',progressNum:60},
          ],
          valueDisabled: 4.2
        }
    }
  }
</script>

<style scoped>
  .progress ul{
    list-style: none;
  }
  .progress ul li{
    height: 56px;
  }
</style>
