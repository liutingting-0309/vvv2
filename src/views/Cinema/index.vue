<template>
  <div>
    <Headers title="喵喵影院"/>
    <div class="cineTitle">
      <div>全城<i class="iconfont icon-down"></i></div>
      <div>品牌<i class="iconfont icon-down"></i></div>
      <div>特色<i class="iconfont icon-down"></i></div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <TabBar/>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import Headers from '../../components/Header'
// eslint-disable-next-line import/no-duplicates
import TabBar from '../../components/TabBar'

export default {
  components: {
    Headers,
    TabBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cineTitle{
  height:50px;
  background-color: #e7e1cd;
  margin-top 50px;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
</style>
