<template>
  <div>
    <Headers  title="喵喵电影"/>
    <div id="content">
        <router-link class="address" tag="div" to="/movie/city">
          <span>大连<i class="iconfont icon-down"></i></span>
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
  /*width: 100%;*/
  height:40px;
  background-color:#e7e1cd;
  display: flex;
  line-height:40px;
  text-align: center;
  padding:5px;
  margin-top:50px;
}
.address{
  width:25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.switchModule{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
}
.switchModule div.router-link-active{
  color:#fff;
}
.search{
  margin-left:13%;
}
.search i{
  font-size: 30px;
  margin-top: 5px;
  color:darksalmon;
}
</style>
