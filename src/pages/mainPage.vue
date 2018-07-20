<template>
  <div>
    <Alert show-icon>
      新消息
      <template slot="desc">您有2条未读消息，请<u class="tips">点击查看</u>。</template>
    </Alert>
  </div>
</template>

<script>
  export default {
    name: "mainPage"
  }
</script>

<style scoped>
  .tips {
    cursor: pointer;
  }
</style>
