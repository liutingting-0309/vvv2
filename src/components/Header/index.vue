<template>
  <div id="Header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '喵喵电影'
    }
  }
}
</script>

<style lang="less" scoped>
  #Header{
    width:100%;
    height:50px;
    background-color: indianred;
    text-align: center;
    line-height:50px;
    font-size:12px;
    position: fixed;
    top:0;
  }
</style>
