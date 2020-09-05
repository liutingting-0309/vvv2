<template>
  <div>
    <Headers  title="喵喵电影"/>
    <div id="content">
      <router-link tag="div" to="/movie/city">
        <span>大连</span><i class="iconfont icon-down"></i>
      </router-link>
      <div class="switchModule">
        <router-link tag="div" to="/movie/nowPlaying">正在热映</router-link>
        <router-link tag="div" to="/movie/comingSoon">即将上映</router-link>
      </div>
      <div class="search">
        <router-link tag="div" to="/movie/search">
          <i class="iconfont icon-search"></i>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
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

<style lang="less" scoped>
#content{
  height:40px;
  background-color:#e7e1cd;
  display: flex;
  line-height:40px;
  text-align: center;
  padding:5px;
}
.switchModule{
  display: flex;
}
.switchModule div{
  margin-left:45px;
}
.search{
  margin-left:35px;
}
.search i{
  font-size: 30px;
  color:darksalmon;
}
</style>
